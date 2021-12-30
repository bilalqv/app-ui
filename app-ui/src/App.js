import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect( ()=>{
    fetch('/data')
    .then( (res) => res.json() )  
    .then( data => setData(data) )
    .catch(error => console.log('Authorization failed : ' + error.message))
  }, []);
  return (
    <div className="App">
      <h2>App Home</h2>
      <h3> { !data ? "Loading..." : data.message } </h3>
    </div>
  );
}

export default App;
