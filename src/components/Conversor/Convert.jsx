import React, {useEffect, useState} from 'react';
import styles from './Conversor.module.css'
import { Options } from './Options';
import { BsHeart } from "react-icons/bs";
import { LuArrowLeftRight } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addLike } from '../../features/likes/likesSlice';
import {v4 as uuid} from 'uuid';

function Convert() {
    const [selected, setSelected] = useState({ from: 'kilometers', to: 'miles', result: '' });    
    const [valueInput, setValueInput] = useState(0);
    const dispatch = useDispatch();
    
    const calcResult = () => {
        let resultado = 0;
        switch(selected.from) {
            case 'kilometers':
                if (selected.to === 'miles') {
                    resultado = (valueInput * 0.62).toFixed(2); 
                } 
                break;
            case 'miles':
                if (selected.to === 'kilometers') {
                    resultado = (valueInput * 1.60).toFixed(2);
                }
                break;
            case 'feet':
                if (selected.to === 'meters') {
                    resultado = (valueInput * 0.30).toFixed(2);
                }
                break;
            case 'meters':
                if (selected.to === 'feet') {
                    resultado = (valueInput / 0.30).toFixed(2);
                }
                break;
            case 'centimeters':
                    if (selected.to === 'inches') {
                        resultado = (valueInput * 0.39).toFixed(2); 
                    }
                break;
            case 'inches':
                if (selected.to === 'centimeters') {
                    resultado = (valueInput / 0.393701).toFixed(2); 
                }
                break;
                default:
                    console.log('Unidad de medida no reconocida');
                }
                setSelected(prevState => ({...prevState, result: resultado}));
    }

    useEffect(() => {
        calcResult();
    }, [selected.from, selected.to, valueInput]);
            
    const invert = () => {
        const selectFrom = selected.to;
        const selectTo = selected.from;
        setSelected(prevState => ({...prevState, from: selectFrom}))
        setSelected(prevState => ({...prevState, to: selectTo}))
        calcResult();
    }
            
    const handleChange = (e) => {
        const selectedOption = Options.find(option => option.id === parseInt(e.target.value));
        setSelected({ from: selectedOption.from, to: selectedOption.to });   
    }

    const handleValue = (e) => {
        setValueInput(e.target.value);
    }

    const addNewLike = () => {
        const toLike = { ...selected, valueInput, id: uuid() };
        let likesFromLocalStorage = JSON.parse(localStorage.getItem('Convert'));
        if (!Array.isArray(likesFromLocalStorage)) {
            likesFromLocalStorage = [];
        }
        likesFromLocalStorage.push(toLike);
        localStorage.setItem('Convert', JSON.stringify(likesFromLocalStorage));
        dispatch(addLike(toLike));
    }


  return (
    <div className={styles.conversor}>
        <div>
            <h1 className={styles.title}>convert</h1>
        </div>
            <div className={styles.divConverter} >
                <div>
                    <select name='relation' onChange={handleChange} value={selected.id} >
                        {
                            Options.map((option,) => (
                                <option value={option.id} key={option.id}>
                                    <h3>{`${option.from} -> ${option.to}`}</h3>
                                </option>
                            ))
                        }
                    </select>
                    <LuArrowLeftRight color='white' className={styles.convertIcon} onClick={() => invert()}/>
                </div>
                <div>
                    <input placeholder='0' value={valueInput} onChange={handleValue} name='valueInput'/>
                    <span className={styles.textValue}>{selected.from}</span>
                </div>
            </div>
        <div className={styles.resultDiv}>
            <div>
                <BsHeart className={styles.likeButton} color='white' onClick={() => addNewLike()}/>
            </div>
            <div className={styles.resultText}>
                <h1>{selected.result}</h1>
                <span>{selected.to}</span>
            </div>
        </div>
    </div>
  )
}

export default Convert;