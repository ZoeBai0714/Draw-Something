import React from 'react';
import '../DrawArea.css'
import Brush from './Brush';
    

export default class DrawArea extends React.Component{
  
    state = {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      canvasURL: "test ",
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

  /*
  getDataURL = () => {
    const canvas = this.canvas()
    const dataUrl = canvas.toDataURL()
    return dataUrl
  }
  

  changeStateURL = () => {
    const canvas = this.canvas()
    console.log(this.state.canvasURL)
    console.log(canvas.toDataURL())
    this.setState({
      canvasURL: canvas.toDataURL()
    })
  }
  */

    componentDidMount = () =>{
      const canvas = this.canvas()
      const ctx = this.ctx()
      //set the canvas size here, we compare it to the screen size so it will not affect offset X and Y when we draw
      if(this.props.fullscreen === true){
        canvas.width = window.innerWidth * 0.67; 
        canvas.height = window.innerHeight * 0.7;
    }
    //set the draw stroke 
      ctx.strokeStyle = "#BADA55";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = this.state.minWidth//Number(this.state.minWidth)
    } 

  //convert DOM pixel into canvas pixel, that's why the offset position is not right
    getMousePosition = (e) =>{
    //const canvas = document.querySelector("#drawing");
    //let rect = canvas.getBoundingClientRect();
    //let scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for X
    //let scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y
     
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
  

    draw = (e) =>{
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
          this.stars(e) 
        } 
      
      }
    
      this.setState({   
         hue: hue,
         lastX: e.nativeEvent.offsetX,
         lastY: e.nativeEvent.offsetY,
         canvasURL: canvas.toDataURL()
      })
    }
  
 



  
  



  //functions for Brush
  handleInputChange = (e) =>{
      const ctx = this.ctx();
      let name = e.target.name
      let value = e.target.value

      this.setState({
        mode:value 
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
    // ctx.shadowColor = '';  //get rid of the styles in shadow if any
    // ctx.shadowBlur = 0;

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

  stars = (e) =>{
    let getRandomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;  //max min
    const ctx = this.ctx()

  }

  render(){
    //console.log(this.state)
      return(
          <div /*style = {{height:'100%',width:'70%'}} */ /* right:'0px', position: 'absolute'}} */>
            <canvas onMouseMove = {this.draw} 
                    onMouseDown = {(e)=> this.getMousePosition(e)} 
                    onMouseUp = {() => this.setState({isDrawing: false})}
                    onMouseOut = {() => this.setState({isDrawing: false})}  
                    id="drawing">
            </canvas>
            <Brush handleInputChange = {this.handleInputChange}
                   minWidth={this.state.minWidth}
                   select = {this.select}
                   customColor={this.state.customColor}
                   ctx = {this.ctx}
                   canvas = {this.canvas}
                   mode = {this.state.mode}
            />
         </div>
        
      )
  }
}

/* stars:
 function drawStar(x, y) {
  var length = 15;
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.rotate((Math.PI * 1 / 10));
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.lineJoin = ctx.lineCap = 'round';
ctx.fillStyle = 'red';

var isDrawing, points = [ ], radius = 15;

el.onmousedown = function(e) {
  isDrawing = true;
  points.push({ x: e.clientX, y: e.clientY });
};
el.onmousemove = function(e) {
  if (!isDrawing) return;
  
  points.push({ x: e.clientX, y: e.clientY });
  
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < points.length; i++) {
    drawStar(points[i].x, points[i].y);
  }
};
el.onmouseup = function() {
  isDrawing = false;
  points.length = 0;
};
*/
