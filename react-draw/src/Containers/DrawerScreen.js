import React from 'react'
import DrawArea from '../Components/DrawArea'
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
                <div className = "ui grid" style = {{"margin-top": "0rem", "margin-left": "0.5rem"}}>
                  <div className="twelve wide column">
                      <DrawArea fullscreen={true}  currentColor = {this.state.currentColor} handleChange = {this.handleChange}/>
                  </div>
                  <div className="three wide column">
                    <PlayerSection />
                  </div>
              </div>
            </div>
        )
    }
}