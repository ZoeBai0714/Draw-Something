import React from 'react'
import DrawArea from '../Components/DrawArea'
import ColorPicker from '../Components/ColorPicker';
import PlayerSection from '../Components/PlayerSection';
import '../DrawArea.css'


export default class DrawerScreen extends React.Component {
      state = {
        currentColor: '#fff'
      }     

      draw = () =>{
        console.log('mouse down')
      }
  
      stopDraw = () =>{
        console.log('mouse up')
      }

      handleChange = (color) =>{
        this.setState({
            currentColor: color.hex
        })
      }

    render() {
        return (
            <div>
                <DrawArea fullscreen={true} width="500" height="500" />
                <ColorPicker currentColor = {this.state.currentColor} handleChange = {this.handleChange}/>
                <PlayerSection />
            </div>
        )
    }
}