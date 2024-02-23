import React from 'react';
import styles from './Saved.module.css';
import { IoIosClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { deleteLike } from '../../features/likes/likesSlice';

const Saved = (props) => {
    const {id, valueInput, fromValue, toValue, resultValue} = props;
    const dispatch = useDispatch()

    const deleteOneLiked = () => {
        dispatch(deleteLike(id));
        let likesFromLocalStorage = localStorage.getItem('Convert'); 
        if (likesFromLocalStorage) {
            likesFromLocalStorage = JSON.parse(likesFromLocalStorage);
            
            if (Array.isArray(likesFromLocalStorage)) {
                const updatedLikes = likesFromLocalStorage.filter(like => like.id !== id);
                localStorage.setItem('Convert', JSON.stringify(updatedLikes));
            } else {
                console.error('El valor almacenado en localStorage no es un array.');
            }
        } else {
            console.warn('No se encontraron datos en localStorage.');
        }
    }
    
  return (
    <div className={styles.divSaved}>
        <span>{`${valueInput} ${fromValue} -> ${resultValue} ${toValue}`}</span>
        <IoIosClose color='#676767' size='28.5px' className={styles.close} onClick={() => deleteOneLiked()}/>
    </div>
  )
}

export default Saved;