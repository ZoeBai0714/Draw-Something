import React from 'react';
import DrawArea from './Components/DrawArea'

function App() {
  return (
    <div className="App">
       <DrawArea/>
    </div>
  );
}

export default App;



/*
  Components Structure and Routes we need:
  Login route: login html, NavBar
  Game route:   
              -- NavBar
              -- DrawArea
              -- GuessArea
*/
