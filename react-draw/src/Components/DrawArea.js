import React from 'react';
import '../DrawArea.css'


export default class DrawArea extends React.Component{
  isPainting = false;


  render(){
      //console.log(this.props.currentColor)
      return(
          <div>
            <canvas onMouseDown = {this.props.draw} onMouseUp = {this.props.stopDraw} currentColor = {this.props.currentColor} id="drawing"></canvas>
          
          </div>
      )
  }
}