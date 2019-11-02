import React, { useState, useEffect } from 'react';
import './App.css';

function Timer(props) {
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date().toLocaleTimeString());  
        }, 1000);
        return() => clearInterval(interval);
    });

    return (
        <div>
            <p>Time is: {timer} </p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>App5 is working!</h1>
            <Timer />
        </div>
    );
}

export default App;