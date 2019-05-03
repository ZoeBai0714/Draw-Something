import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';


class App extends React.Component {

  render() {
  return (
    <div className="App">
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
