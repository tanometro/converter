import './App.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage/Landingpage';

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
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
