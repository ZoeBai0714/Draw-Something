import React from 'react';
import '../DrawArea.css'
import Brush from './Brush';
import ColorPicker from '../Components/ColorPicker';
    
import socketIO from 'socket.io-client'

//const io = socketIO('http://localhost:3000/')
const io = socketIO('10.185.5.103:3000/')

window.io = io


export default class DrawArea extends React.Component{
  
    state = {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      canvasURL: null,
      hue: 1,
      direction: true,
      controlDisplay: "none",
      controlLeft: "100%",
      customColor: `${this.props.currentColor}`,
      color: "#000000",
      customStroke: false,
      //maxWidth: 100,
      minWidth: 5,
      mode:"",
      //none:true, //default style
      //shadow: false,
      //randomDots:false
    }

    canvas = ()=> {
      return document.querySelector("#drawing");
    }

    ctx = () => {
      return this.canvas().getContext("2d");
    }

    componentDidMount = () =>{
      const canvas = this.canvas()
      const ctx = this.ctx()
      //set the canvas size here, we compare it to the screen size so it will not affect offset X and Y when we draw
      if(this.props.fullscreen === true){
        canvas.width =  window.innerWidth * 0.70; 
        canvas.height = window.innerHeight * 0.75;
    }
    //set the draw stroke 
      ctx.strokeStyle = "#BADA55";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = this.state.minWidth//Number(this.state.minWidth)
      this.drawCanvas()
    } 

    drawCanvas=()=> { 
      //io.emit('canvas.update', this.state.canvasURL)
      io.on('canvas.draw', url => {
        //const canvas = this.canvas()
       
        var image = new Image()
        image.src = url
        //console.log(url)
        //console.log(image)
        image.onload = () =>{
          this.clearStyle()
          const ctx = this.ctx()
          ctx.clearRect(0, 0, this.canvas().width, this.canvas().height)
          ctx.drawImage(image, 0, 0, this.canvas().width, this.canvas().height) // take in four arguments to fit the canvas size for all browsers
        }
        console.log('CANVAS RECEIVED')
      })
    }

  //convert DOM pixel into canvas pixel, that's why the offset position is not right
    getMousePosition = (e) =>{  
      this.setState({
        isDrawing: true,
        lastX: e.nativeEvent.offsetX,
        lastY: e.nativeEvent.offsetY  // been adjusted to be relative to element
      }) 

  
    }


    drawMain = (e) =>{
      const ctx = this.ctx();
      ctx.globalAlpha = 1
      ctx.beginPath();
      ctx.moveTo(this.state.lastX, this.state.lastY);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //create a line betwwen coordinates
      ctx.stroke();// display that line created above
      ctx.strokeStyle = this.props.currentColor || 'red'//`hsl(${this.state.hue}, 100%, 50%)`
    }
  

    draw = (e) =>{ //still in mouseDown
      const ctx = this.ctx();
      let hue = this.state.hue;
      this.ctx().lineWidth = this.state.minWidth // MUST be here, so everytime before the first stroke, it will check the new width first
      const canvas = this.canvas()
     //check brush style
      if(this.state.isDrawing == true){
      
        if(this.state.mode == ""){
          this.drawMain(e)
          ctx.shadowColor = '';   //get rid of shadow style if any
          ctx.shadowBlur = 0;
        }else if(this.state.mode == "shadow"){
          this.shadow(e)
          this.drawMain(e)
        }else if(this.state.mode == "random dots"){
          ctx.beginPath();
          ctx.moveTo(this.state.lastX, this.state.lastY);
          //ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //must remove this line style to enable dots
          ctx.stroke();
          ctx.strokeStyle = this.props.currentColor || 'red'//`hsl(${this.state.hue}, 100%, 50%)`
          this.randomDots(e)
        }else if(this.state.mode == "stars"){
          this.addRandomPoint(e)
          this.star(e) //call draw star
        }
      
      }

      // testing state buffer
      const canvasDraw = document.querySelector("#drawing")
      //const objectURL = URL.createObjectURL(canvasDraw.toBlob())
      //console.log(objectURL)
      var image = new Image()
      let url = canvasDraw.toDataURL()
      console.log(image.src)
      const data = image.src
      image.src = url
// console.log(url)
      // set canvasURL state 
      this.setState({   
         hue: hue,
         lastX: e.nativeEvent.offsetX,
         lastY: e.nativeEvent.offsetY,
         canvasURL: url
      })
    }
  
 


  //functions for Brush
  handleInputChange = (e) =>{
      const ctx = this.ctx();
      let name = e.target.name
      let value = e.target.value
      this.setState({
        //mode:value 
        [name]:value
      })

      this.ctx().lineWidth = this.state.minWidth

      if(value == "shadow"){
        this.setState({
          mode: "shadow"
        })
      }else if(value == "random dots"){
        this.setState({
          mode: "random dots"
        })
      }else if(value == "none"){
        this.setState({
          mode: ""
        })
      }else if(value == "stars"){
        this.setState({
          mode:"stars"
        })
      }

  }
  // call this function first everytime a new brush style is triggered
  clearStyle = (e) =>{
    const ctx = this.ctx();
    ctx.globalAlpha = 1
    ctx.shadowColor = '';   //get rid of shadow style if any
    ctx.shadowBlur = 0;
    ctx.fillStyle = this.props.currentColor ||'red'

  }

  shadow = (e) =>{
    const ctx = this.ctx()
    ctx.globalAlpha = 1;
    ctx.shadowColor = this.props.currentColor ||'red'
    ctx.shadowBlur = 30;
    ctx.fillStyle = this.props.currentColor ||'red'
       
  } 
  

  randomDots = (e) =>{
    const ctx = this.ctx()
    let getRandomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;  //max min
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.fillStyle = this.props.currentColor ||'red'//`${this.props.currentColor}`

    let points = []//, radius = 15
    points.push({ 
      x: e.nativeEvent.offsetX, 
      y: e.nativeEvent.offsetY,
      radius: getRandomInt(5, 20),
      opacity: Math.random()
    });

    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.globalAlpha = points[i].opacity;
      console.log(points[i].opacity)
      ctx.arc(
      points[i].x, points[i].y, points[i].radius, 
      false, Math.PI * 2, false);
      ctx.fill()
  } 
   }

   
   star = (e) =>{
    //mouseMove
    let points = this.addRandomPoint(e)
    let ctx = this.ctx()
    //loop
      //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (var i = 0; i < points.length; i++) {
        this.drawStar(points[i]);
      }
   }

    drawStar = (options)=> {
    let ctx = this.ctx()
    var length = 15;
    ctx.save();
    ctx.translate(options.x, options.y);
    ctx.beginPath();
    ctx.globalAlpha = options.opacity;
    ctx.rotate(Math.PI / 180 * options.angle);
    ctx.scale(options.scale, options.scale);
    ctx.strokeStyle = this.props.currentColor || options.color;
    ctx.lineWidth = options.width;
    for (var i = 5; i--;) {
      ctx.lineTo(0, length);
      ctx.translate(0, length);
      ctx.rotate((Math.PI * 2 / 10));
      ctx.lineTo(0, -length);
      ctx.translate(0, -length);
      ctx.rotate(-(Math.PI * 6 / 10));
    }
    ctx.lineTo(0, length);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

   addRandomPoint(e) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
     }

    let points = [ ], radius = 15
    points.push({ 
      x: e.nativeEvent.offsetX, 
      y: e.nativeEvent.offsetY, 
      angle: getRandomInt(0, 180),
      width: getRandomInt(1,10),
      opacity: Math.random(),
      scale: getRandomInt(1, 20) / 10,
      color: ('rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')')
    });
    return points
  }
  
   handleMouseUp = () => {
    io.emit('canvas.update', this.state.canvasURL)
    this.setState({isDrawing: false})
   }

  render(){
    //console.log(this.state.mode)
      return(  
          <div >
            <canvas style = {{backgroundColor:'white'}}
                    onMouseMove = {this.draw} 
                    onMouseDown = {(e)=> this.getMousePosition(e)} 
                    onMouseUp = {this.handleMouseUp}
                    onMouseOut = {() => this.setState({isDrawing: false})}  
                    id="drawing">
            </canvas>
            <div className = "ui grid" style = {{"margin-top": "1rem"}}>
            {/* <div className = "row" style = {{"margin-top": "1rem"}}> */}
              <div className="five wide column">
                <div>
                <Brush handleInputChange = {this.handleInputChange}
                      minWidth={this.state.minWidth}
                      select = {this.select}
                      customColor={this.state.customColor}
                      ctx = {this.ctx}
                      canvas = {this.canvas}
                      mode = {this.state.mode}
                />
                </div>
              </div>
              <div className="three wide column" style = {{"margin-left": "1rem"}}>
                <ColorPicker currentColor = {this.state.currentColor} handleChange = {this.props.handleChange} />
              </div>
            {/* </div> */}
            </div>
         </div>
         
      )
  }
}

/*
  // function drawStar(options) {
  //     var length = 15;
  //     ctx.save();
  //     ctx.translate(options.x, options.y);
  //     ctx.beginPath();
  //     ctx.globalAlpha = options.opacity;
  //     ctx.rotate(Math.PI / 180 * options.angle);
  //     ctx.scale(options.scale, options.scale);
  //     ctx.strokeStyle = options.color;
  //     ctx.lineWidth = options.width;
  //     for (var i = 5; i--;) {
  //       ctx.lineTo(0, length);
  //       ctx.translate(0, length);
  //       ctx.rotate((Math.PI * 2 / 10));
  //       ctx.lineTo(0, -length);
  //       ctx.translate(0, -length);
  //       ctx.rotate(-(Math.PI * 6 / 10));
  //     }
  //     ctx.lineTo(0, length);
  //     ctx.closePath();
  //     ctx.stroke();
  //     ctx.restore();
  // }



// function getRandomInt(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//var el = document.getElementById('c');
//var ctx = el.getContext('2d');

// var isDrawing, points = [ ], radius = 15;

// function addRandomPoint(e) {
//   points.push({ 
//     x: e.clientX, 
//     y: e.clientY, 
//     angle: getRandomInt(0, 180),
//     width: getRandomInt(1,10),
//     opacity: Math.random(),
//     scale: getRandomInt(1, 20) / 10,
//     color: ('rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')')
//   });
// }

// el.onmousedown = function(e) {
//   isDrawing = true;
//   addRandomPoint(e);
// };


el.onmousemove = function(e) {
  if (!isDrawing) return;
  
  addRandomPoint(e);
  
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < points.length; i++) {
    drawStar(points[i]);
  }
};
el.onmouseup = function() {
  isDrawing = false;
  points.length = 0;
};
*/

