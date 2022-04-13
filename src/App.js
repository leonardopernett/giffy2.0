import { useEffect, useState } from 'react';
import {getGiffy} from './services/api.service'
import './sass/App.scss';

function App() {

 const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGiffy().then(res =>console.log(res))
  }, [])
  

  return (
    <div className="App">
     <div className="App-header"></div>
    </div>
  );
}

export default App;
