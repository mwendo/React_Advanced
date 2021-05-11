import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res=>{
      setPokemon(res.data.results);
    })}, []);

  
  return (
    <div className="App">
      <button className="btn btn-danger btn-lg mt-5" onClick="">Fetch Pokemon</button>

    {
      pokemon.map((item, i)=><h1>{item.name}</h1>)
    }

    </div>
  );
}

export default App;