import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
  // the state to save the Api data 
  const [apiData, setApiData] = useState(null)

  // the useEffect runs when the component mounts and sets the state when its requested.
  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
