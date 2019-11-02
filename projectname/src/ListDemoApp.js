import React, { useState, useEffect } from "react";
import './App.css';
 
function ListItem(props) {
    return (
        <li>{props.value}</li>
    );
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map((n, index) =>
    <ListItem key={index} value={n} />
    );
  return  listItems;
}

function TableItem(props) {
    return (
        <tr><td>{props.value}</td></tr>
    );
}

function NumberTable({ numbers }) {
    const tableItems = numbers.map((n, index) =>
        <TableItem key={index} value={n} />
    );
    return tableItems;
}

function ListDemo(props) {
  console.log(props.numbers)

  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <ul>
        <NumberList numbers={props.numbers} />
      </ul>
      <h2>NumberTable</h2>
      <table align="center" border="1">
          <thead></thead>
          <tbody>
          <NumberTable numbers={props.numbers} />
          </tbody>
      </table>
    </div>
  );
}
export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  
  useEffect(() => {
    const interval = setInterval(() => {
        const rand = Math.floor(Math.random()*1000)+1;
        setNumbers([...numbers,rand]);  
    }, 1000);
    return() => clearInterval(interval);
  });

  return <ListDemo numbers={numbers} />;
}
