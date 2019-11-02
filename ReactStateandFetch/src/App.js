import React, {useState, useEffect} from 'react';
import CountryTable from "./CountryTable";
import './App.css';

const App = (props) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  // standard version
  useEffect(() => {
    const promiseLabels = props.factory.getLabels();
    promiseLabels.then(res => (
      setLabels(res)
    ));

    const promiseCountries = props.factory.getCountries();
    promiseCountries.then(res => (
      setCountries(res)
    ));
  }, []);


/*
  // interval version - loading every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("updating...");
      
      // updating labels
      const promiseLabels = props.factory.getLabels();
      promiseLabels.then(res => (
      setLabels(res)
    ));
    
    // updating countries
    const promiseCountries = props.factory.getCountries();
    promiseCountries.then(res => (
      setCountries(res)
    ));

  }, 3000);
    return() => clearInterval(interval); 
  });
*/
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>          
          <CountryTable
          labels={labels}
          countries={countries}
          />
        </div>
      </div>
    );
};


export default App;
