import React, { useState, useEffect } from 'react';
import './App.css';

function Counter(props) {
    const [count, setCount] = useState(localStorage.getItem("count"));
    const [numbers, setNumbers] = useState([1,2,7]);

    const addNumber = () => {
        const rand = Math.floor(Math.random()*1000)+1;
        setNumbers([...numbers,rand]);
    }

    useEffect(() => {
        localStorage.setItem("count", count);
        document.title = `You clicked ${localStorage.getItem("count")} times`;
    });

    return (
        <div>
        <p>You clicked {count} times</p>
        <p>Numbers: {numbers.toLocaleString()}</p>

        <button onClick={() => setCount(parseInt(count) + props.step)}>
            +{props.step}
        </button>

        <button onClick={() => setCount(parseInt(count) - props.step)}>
            -{props.step}
        </button>

        <button onClick={addNumber}>
            Add Number
        </button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>App4 is working!</h1>
            <Counter step={7} />
        </div>
    );
}

export default App;