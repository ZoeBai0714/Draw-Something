import React from 'react';
import DrawerScreen from './Containers/DrawerScreen';
import Home from './Containers/Home';
import Login from './Components/Player'
import Title from './Components/Title'
import {BrowserRouter, Route} from 'react-router-dom'

const MainPage = () => (
  <div>
    <Title/>
    <Login />
    <DrawerScreen/>>
  </div>
)

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
      <Route path = '/' component = {Home}/>
      <Route path = '/draw' component = {MainPage}/>
    </BrowserRouter>
  );
  }
}

export default App;



