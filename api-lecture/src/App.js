import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const [breweries, setBreweries] = useState([]);

  const fetchBreweryInfo = (event) => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setBreweries(res);
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button className="btn btn-primary btn-lg mt-5" onClick={fetchBreweryInfo}>Fetch Information</button>

      {
        breweries.map((item,i)=><h1>{item.name}, {item.city}</h1>)
      }
    </div>
  );
}

export default App;