import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // declaring a new state variable
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Greetings!!!");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit')
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
    .then(response => response.json())
    .then(state => console.log(state));
  }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Enter your name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}

export default App;
