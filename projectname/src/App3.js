import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import {names} from './file2';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  Welcome.propTypes = {
      name: PropTypes.string
  }

  function WelcomePerson(props) {
      const {firstName, lastName, email} = props.person;
      return <h1>Hello, {firstName} {lastName} - {email}</h1>;
  }
  
  function App() {
    return (
      <div className="App">
        <h1>App3 is working!</h1>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome />
        <Welcome name={23} />
        <Welcome name="Edite" />
        {names.map((name) =>
          <div key={name.email}><WelcomePerson person={name}/></div>
        )}
      </div>
    );
  }
  

export default App;