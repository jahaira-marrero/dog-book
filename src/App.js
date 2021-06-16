import React, {useEffect, useState} from 'react';
import Dogs from './Dogs';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const faker = require('faker');

useEffect(() => { 
  fetch("https://dog.ceo/api/breeds/image/random/15")
  .then(r => r.json())
  .then((dogArr) => {const formattedDogs = dogArr['message'].map((singleDog) =>{
    return {image: singleDog, firstName: faker.name.firstName()}
  })
    setDogs(formattedDogs) 
  })
},[]);

console.log(dogs)


const dogArray=dogs.map((dog) => {
  return (
    <Dogs
    key={dog.id}
    image={dog.image} 
    name={dog.firstName}
    // goodBoy={dog.goodBoy}
    />
  )   
});


  return (
    <div className="App">
        <header className="header">
          Welcome to the Dog Book
        </header>
         <ul className="cards">{dogArray}</ul>
    </div>
  );
}

export default App;
