import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';
import Home from './Containers/Home';
import Login from './Components/Player'
import Title from './Components/Title'
import {BrowserRouter, Route} from 'react-router-dom'

const MainPage = () => (
  <div id = "backgroundIMG">
    <Title/>
    <Login />
    <DrawerScreen/>>
  </div>
)

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
      <Route exact path = '/draw' component = {MainPage}/>
      <Route exact path = '/' component = {Home}/>
    </BrowserRouter>
  );
  }
}

export default App;



