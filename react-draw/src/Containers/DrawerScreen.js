import React from 'react'
import DrawArea from '../Components/DrawArea'
import ColorPicker from '../Components/ColorPicker';
import PlayerSection from '../Components/PlayerSection';


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
                <DrawArea draw = {this.draw} stopDraw = {this.stopDraw} currentColor = {this.state.currentColor}/>
                <ColorPicker currentColor = {this.state.currentColor} handleChange = {this.handleChange}/>
                <PlayerSection />
            </div>
        )
    }
}