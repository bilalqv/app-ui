import './App.css';
import {useEffect, useState} from 'react';
import BasicConnection from './BasicConnection';


function App() {

  useEffect( ()=>{
    fetch('/data')
    .then( (res) => res.json() )  
    .then( data => console.log("Response from Server :", data.message) )
    .catch(error => console.log('Authorization failed : ' + error.message))
  }, []);
  return (
    <div className="App"> 
      <BasicConnection />  
    </div>
  );
}

export default App;
