import React from 'react'
import DrawArea from '../Components/DrawArea'
import ColorPicker from '../Components/ColorPicker';
import PlayerSection from '../Components/PlayerSection';
import '../DrawArea.css'


export default class DrawerScreen extends React.Component {
      state = {
        currentColor: ''
      }     


      handleChange = (color) =>{
        console.log(color)
        this.setState({
            currentColor: color.hex
        })
      }

    render() {
      console.log(this.state.currentColor)
        return (
            <div>
                <DrawArea fullscreen={true}  currentColor = {this.state.currentColor} />
                <ColorPicker currentColor = {this.state.currentColor} handleChange = {this.handleChange}/>
                <PlayerSection />
            </div>
        )
    }
}