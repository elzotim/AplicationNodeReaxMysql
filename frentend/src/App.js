
import './App.css';
import axios from "axios"


import { useEffect, useState } from 'react';
function App() {
  const [listofAll, setlistofAll] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      setlistofAll(response.data);
      console.log(response.data);
    });
  }, [])
  return (
    <div className="App">{listofAll.map((value, key) => {
      return <div>
        <body>  {value.title}</body>
        <div> {value.postText}</div>
        <footer> {value.username}</footer>
        </div> 
    })}

        </div>
        );
}

        export default App;
