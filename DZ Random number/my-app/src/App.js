import { click } from '@testing-library/user-event/dist/click';
import React from 'react'; 
import { useState } from 'react';
import './App.css';






function App() {

const [count, setCount] = useState(0)

function Click() {
  function numb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   setCount(numb(1,100))

  }






  return (
    <div className="App">
      <button onClick={Click}>Число наугад</button>
      <div>{count}</div>
      </div>
  );
}

export default App;
