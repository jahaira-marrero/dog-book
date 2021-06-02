import React, {useEffect, useState} from 'react';
import Dogs from './Dogs';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([])

useEffect(() => { 
  fetch("https://dog.ceo/api/breeds/image/random/15")
  .then(r => r.json())
  .then((dogArr) => {setDogs(dogArr['message'])
});
},[]);


const dogArray=dogs.map((dog) => {
  return (
    <Dogs
    key={dog.id}
    image={dog}
    />
  )   
});


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dog Book
         {dogArray}
        </p>
  
      </header>
    </div>
  );
}

export default App;
