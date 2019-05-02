import React from 'react';
import '../DrawArea.css'


export default class DrawArea extends React.Component{

  draw = () =>{
    console.log('mouse down')
  }

  stopDraw = () =>{
    console.log('mouse up')
  }

  render(){
      return(
          <div>
            <canvas onMouseDown = {this.draw} onMouseUp = {this.stopDraw} id="drawing"></canvas>
          </div>
      )
  }
}