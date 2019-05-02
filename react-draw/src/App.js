import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <DrawerScreen/>
    </div>
  );
  }
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
