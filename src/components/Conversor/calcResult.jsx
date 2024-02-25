const calcResult = (props) => {
    const {selectedFrom, selectedTo, valueInputProp, setState, resultProp} = props;
    let resultado = 0;
    switch(selectedFrom) {
        case 'kilometers':
            if (selectedTo === 'miles') {
                resultado = valueInputProp * 0.62; 
            } 
            break;
        case 'miles':
            if (selectedTo === 'kilometers') {
                resultado = valueInputProp * 1.60;
            }
            break;
        case 'feet':
            if (selectedTo === 'meters') {
                resultado = valueInputProp * 0.30;
            }
            break;
        case 'meters':
            if (selectedTo === 'feet') {
                resultado = valueInputProp / 0.30;
            }
            break;
        case 'centimeters':
                if (selectedTo === 'inches') {
                    resultado = valueInputProp * 0.39; 
                }
            break;
        case 'inches':
            if (selectedTo === 'centimeters') {
                resultado = valueInputProp / 0.393701; 
            }
            break;
            default:
                console.log('Unidad de medida no reconocida');
            }
            setState(prevState => ({...prevState, resultProp: resultado}));
}

export default calcResult;