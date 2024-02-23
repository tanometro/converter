import './App.css';
import Navbar from './components/Navbar/Navbar';
import Convert from './components/Conversor/Convert';
import { useSelector } from 'react-redux';
import Saved from './components/Saved/Saved';

function App() {
  const likes = useSelector(state => state.likes);
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
    <div className="App">
      <div className='body'>
        <Navbar/>
        <div className='conversor'>
          <Convert/>
        </div>
        <div>
          <span className='savedSpan'>saved</span>
        </div>
        <div className='saved'>
          {
             likesFromLocalStorage.map((like) => (
              <Saved key={like.id} id={like.id} valueInput={like.valueInput} fromValue={like.from} toValue={like.to} resultValue={like.result} />
            ))
          }
        </div>
      </div>
     
    </div>
  );
}

export default App;
