import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Create a new file App2.js (and App3.js ....)
//In index.js, delete EVERYTHING BELOW the import of App and use the strategy below to switch between the smaller exercises
//NOTE: THIS IS NOT THE WAY TO DO THINGS AFTER THE FIRST 2-3 DAYS

import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import JokesApp from './JokesApp';
import ListDemoApp from './ListDemoApp';
import ListDemoApp2 from './ListDemoApp2';
import FormDemo from './FormDemo';
import FormDemoMultiple from './FormDemoMultiple';
import AppLifting from './AppLifting';

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3</a> &nbsp;
         <a href="/"  className="x" id="app4">useState</a> &nbsp;
         <a href="/"  className="x" id="app5">timer</a> &nbsp;
         <a href="/"  className="x" id="jokesApp">jokes</a> &nbsp;
         <a href="/"  className="x" id="listDemoApp">lists #1</a> &nbsp;
         <a href="/"  className="x" id="listDemoApp2">lists #2</a> &nbsp;
         <a href="/"  className="x" id="formDemo">forms #1</a> &nbsp;
         <a href="/"  className="x" id="formDemoMultiple">forms #2</a> &nbsp;
         <a href="/"  className="x" id="appLifting">todo</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 />; break;
        case "app5": app = <App5 />; break;
        case "jokesApp": app = <JokesApp />; break;
        case "listDemoApp": app = <ListDemoApp />; break;
        case "listDemoApp2": app = <ListDemoApp2 />; break;
        case "formDemo": app = <FormDemo />; break;
        case "formDemoMultiple": app = <FormDemoMultiple />; break;
        case "appLifting": app = <AppLifting />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
