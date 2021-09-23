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
// useEffect(() => {
//   axios("https://jsonplaceholder.typicode.com/posts")
//   .then(data=> setApiData(data.data))
// },[])
// *** AXIOS TRY CATCH /// 

axios.get('https://jsonplaceholder.typicode.com/posts', data).then(res => {

})
.catch(err => {
if (err.response) {
// client received an error response (5xx, 4xx)
} else if (err.request) {
// client never received a response, or request never left
} else {
// anything else
}
})

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