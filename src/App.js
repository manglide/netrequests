import React, {useState, useEffect} from 'react';
import './App.css';

import COV from './services';

function App() {
  const [centers, setCenters] = useState([]);
  useEffect(() => {
    COV.getCovid()
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    }).then((data) => {
      setCenters(data.data);
      console.log(data.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <div className="App">
    <ul>
      {
        centers.map((item, index) => (
          <li key={item.id}>{item.reg_fac_name}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
