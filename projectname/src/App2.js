import React from 'react';
import './App.css';

import person, {males, females} from './file2';
const {firstName, email} = person;
const [y, z] = males;
const [x, t] = females; 

function App() {
    console.log(y, z, x, t);
  return (
    <div className="App">
      <h1>App2 is working!</h1>
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
  
}

export default App;