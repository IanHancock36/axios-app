import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  // the state to save the Api data 
  const [apiData, setApiData] = useState(null)

  // the useEffect runs when the component mounts and sets the state when its requested.
//   useEffect(()=>{
//     fetch the data
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => setApiData(data))
// },[])

//*** AXIOS */
useEffect(() => {
  axios("https://jsonplaceholder.typicode.com/posts")
  .then(data=> setApiData(data.data))
},[])

console.log(apiData)
  return (
    <div>
     {apiData ? apiData.map(item => <h2 key={item.id}>{item.title}</h2>) : null}
    </div>
  );
}

export default App;



// async function awesome (){
//   try{
//     const data = await Promise
//     return [data, null];
//   } catch(error){
//     return [null ,error]
//   }
// }

// async function main(){
//   const [data,error] = await awesome
//   if(error) {
//     const [data2,error2] = await awesome()
//     const [data3,error3] = await awesome()
//   }
// }