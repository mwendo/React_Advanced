import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = (event) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPokemon(res.results);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button className="btn btn-danger btn-lg mt-5" onClick={fetchPokemon}>Fetch Pokemon</button>

      {
        pokemon.map((item, i)=><h1>{item.name}</h1>)
      }

    </div>
  );
}

export default App;