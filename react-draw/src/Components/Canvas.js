import React, { Component } from 'react';

class Canvas extends Component {
   render() {
       return (
           <canvas style = {{border: 'solid'}} display = 'block' ref="canvas" width={1000} height={600}/>
       )
   }
}

export default Canvas