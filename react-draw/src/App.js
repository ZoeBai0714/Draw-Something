import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:3000')
window.io = io

class App extends React.Component {

  state = {
    hello: 'swagger'
  }

  componentDidMount() {
    io.emit('welcome.index', {hello: 'hello'})
  }

  render() {
  return (
    <div className="App">
      <DrawerScreen />
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
