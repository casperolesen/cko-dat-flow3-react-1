import React from "react";

const CountryTable = (props) => {
  const { labels, countries } = props;

  const countryRow = (country, name) => {
    const data = country[name];
    if (Array.isArray(data)) {
      return <td>{data.shift()} (+{data.length})</td>;
      
    } else {
      return <td>{data}</td>;
    }  
  }

  const countryTable = (countries) => {
    
  }
    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
          <tr>
          {labels.map(label =>(
            <th>{label}</th>
          ))}
          </tr>
        </thead>
        
        <tbody>
          {countries.map(c =>(
            <tr>
              {countryRow(c, "name")}
              <td>{c.capital}</td>
              <td>{c.region}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
              {countryRow(c, "timezones")}
              {countryRow(c, "borders")}
              {countryRow(c, "topLevelDomain")}
              {countryRow(c, "currencies")}
              {countryRow(c, "languages")}
            </tr>
          ))}   
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;