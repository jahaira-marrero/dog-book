import React, {useEffect, useState} from 'react';
import Dogs from './Dogs';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([])

useEffect(() => { 
  fetch("https://dog.ceo/api/breeds/image/random/15")
  .then(r => r.json())
  .then((dogArr) => setDogs(dogArr));
},[]);

console.log(dogs)
const dogArray=dogs.map((dog) => {
  return (
    <Dogs
    key={dog.id}
    image={dog.message}
    />
  )   
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dog Book <code>src/App.js</code> and save to reload.
         dogArray={dogArray}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
