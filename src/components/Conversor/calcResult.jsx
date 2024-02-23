const calcResult = (props) => {
    const {selectedFrom, selectedTo, setSelected, valueInput} = props;
    let resultado = 0;
    switch(selectedFrom) {
        case 'kilometers':
            if (selectedTo === 'miles') {
                resultado = valueInput * 0.62; 
            } 
            break;
        case 'miles':
            if (selectedTo === 'kilometers') {
                resultado = valueInput * 1.60;
            }
            break;
        case 'feet':
            if (selectedTo === 'meters') {
                resultado = valueInput * 0.30;
            }
            break;
        case 'meters':
            if (selectedTo === 'feet') {
                resultado = valueInput / 0.30;
            }
            break;
        case 'centimeters':
                if (selectedTo === 'inches') {
                    resultado = valueInput * 0.39; 
                }
            break;
        case 'inches':
            if (selectedTo === 'centimeters') {
                resultado = valueInput / 0.393701; 
            }
            break;
            default:
                console.log('Unidad de medida no reconocida');
            }
            setSelected(prevState => ({...prevState, result: resultado}));
}

export default calcResult;