import React, { useState, useEffect } from 'react';
import './App.css';

function ChuckNorris() {
    const[joke, setJoke] = useState("");

    const newJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => setJoke(data.value))
        .catch(err => console.log("Ups " + err))
    }

    useEffect(() => {
        console.log("fetching..");
        const interval = setInterval(() => {
            fetch('https://icanhazdadjoke.com/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => setJoke(data.joke))
            .catch(err => console.log("Ups " + err)) 
        }, 10000);
        return() => clearInterval(interval);
    });

    return (
        <div>
        <button onClick={newJoke}>Get ChuckNorris</button>
        <p>{joke}</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>App6 is working!</h1>
            <ChuckNorris />
        </div>
    );
}

export default App;