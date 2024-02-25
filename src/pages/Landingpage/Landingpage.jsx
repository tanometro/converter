import styles from './Landingpage.module.css'
import Convert from '../../components/Conversor/Convert';
import Navbar from '../../components/Navbar/Navbar';
import Saved from '../../components/Saved/Saved';

function Landingpage() {
  let likesFromLocalStorage = localStorage.getItem('Convert');
  
  if (likesFromLocalStorage) {
    likesFromLocalStorage = JSON.parse(likesFromLocalStorage);
    
    if (!Array.isArray(likesFromLocalStorage)) {
      console.error('El valor almacenado en localStorage no es un array.');
      likesFromLocalStorage = [];
    }
  } else {
    console.warn('No se encontraron datos en localStorage.');
    likesFromLocalStorage = [];
  }

  return (
      <div className='body'>
        <Navbar/>
        <div className={styles.conversor}>
          <Convert/>
        </div>
        <div>
          <span className={styles.savedSpan}>saved</span>
        </div>
        <div className={styles.saved}>
          {
             likesFromLocalStorage.map((like) => (
              <Saved key={like.id} id={like.id} valueInput={like.valueInput} fromValue={like.from} toValue={like.to} resultValue={like.result} />
            ))
          }
        </div>
      </div>
     
  );
}

export default Landingpage;