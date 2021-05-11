import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("chicago");


  useEffect(()=>{
    console.log("hey it's me, useEffect!");
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => {
        console.log(res);
        setBreweries(res.data);
      })
      .catch(err => console.log(err))
  },[])

  const fetchBreweryInfo = (event) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => {
        console.log(res);
        setBreweries(res.data);
      })
      .catch(err => console.log(err))
    // fetch("https://api.openbrewerydb.org/breweries")
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     setBreweries(res);
    //   })
    //   .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <div className="container">
        <input className="form-control m-5 mx-auto center w-50" type="text" placeholer="city" onChange={(event) => setCity(event.target.value)}/>
      </div>


      <button className="btn btn-primary btn-lg mt-5" onClick={fetchBreweryInfo}>Fetch Information</button>

      {
        breweries.map((item,i)=><h1>{item.name}, {item.city}</h1>)
      }
    </div>
  );
}

export default App;