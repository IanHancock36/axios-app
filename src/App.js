import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
  // the state to save the Api data 
  const [apiData, setApiData] = useState(null)

  // the useEffect runs when the component mounts and sets the state when its requested.
  useEffect(()=>{
    //fetch the data
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setApiData(data))
},[])
console.log(apiData)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
