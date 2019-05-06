import React from 'react';

const Brush  = (props) =>{
   const container = {
        position: "absolute",
        right: "100px",
        top: "500px",
        backgroundColor: "transparent",
        width: "400px",
        height: "150px",
        borderRadius: "15px"
   }

   const content = {
        backgroundColor: "rgb(47, 47, 47)",
        color: "white",
        boxSizing: "border-box",
        boxShadow: "rgba(0, 0, 0, 0.28) 0px 1px 2px 2px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "10px",
        borderRadius: "0 0 10px 5px",
        position: "absolute",
       
    }

    const BrushWidth = (props) =>{
      const strokeControlStyle = {
        display: "flex",
        flexDirection: "row"
      }

      const inputStyle = {
        display: "block"
      }
      return (
        <div style={strokeControlStyle} >
              <label>
                 Stroke Width
                <input style={inputStyle} name="minWidth" type="range"  
                 value={props.minWidth} min="5" max="100"
                 onChange={(e) => props.handleChange(e)}/>
              </label>

              <select onChange={(e) => props.handleChange(e)}>
                 <option value = "none">Choose Your Style</option>
                 <option value = "shadow">Shadow</option>
                 <option value = "random dots">Random Dots</option>
              </select>
        </div>
      )
    }
   
    //this would't allow me to update the drop down menu
    

    const ClearCanvas = (props) =>{

      const buttonStyle = {
        display: "block",
        float: "right",
        border: "1px solid #840000",
        borderRadius: "15px",
        backgroundColor: "#ff2929",
        cursor: "pointer"
      }
      const clear = () => {
        props.ctx().clearRect(0, 0, props.canvas().width, props.canvas().height)
      }
      return (
        <button style={buttonStyle} onClick={clear}>Clear Canvas</button>
      )

    }
     // for clear canvas, need to test on whether or not clear just current user all everyone's drawing
        return(
        <div style={container}>
           <div style={content}>
           <BrushWidth minWidth={props.minWidth} handleChange={props.handleInputChange} checked = {props.checked}/>
           <ClearCanvas ctx={props.ctx} canvas={props.canvas}/>
          </div>
        </div>
        )
    
  }

export default Brush

/*
   <select className = "select" onChange = {(e)=>this.change(e)}>
                <option> Choose your filter </option>
                <option value = "byGreased"> Filter by Grease </option>
                <option value = "byWeight">Sort by Weight</option>
                <option value = "byName">Sort by Name</option>
           </select>

*/