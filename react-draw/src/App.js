import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';
import Login from './Components/Player'
import './DrawerScreen.css'

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <div class="foo">
        <span class="letter" data-letter="D">D</span>
        <span class="letter" data-letter="r">r</span>
        <span class="letter" data-letter="a">a</span>
        <span class="letter" data-letter="w">w</span>
        <span class="letter" data-letter="!">!</span>
      </div>
      <Login/>
      <DrawerScreen draw = {this.props.draw} stopDraw = {this.props.stopDraw}/>
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

/*
  state = {
    hello: 'swagger'
  }
                                                  // Dont worry about this garbage (testing backend)
  componentDidMount() {
    io.emit('welcome.index', {state: this.state})
  }
  */
