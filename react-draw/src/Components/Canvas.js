import React, { Component } from 'react';

class Canvas extends Component {
   render() {
       return (
           <canvas style = {{border: 'solid'}} display = 'block' ref="canvas" width={500} height={500}/>
       )
   }
}

export default Canvas