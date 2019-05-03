import React from 'react'
import {SketchPicker} from 'react-color'

export default class ColorPicker extends React.Component {
 
    state = {
        currentColor: this.props.currentColor
    }

    handleChange = (color) => {
        console.log(color)
        this.setState({
            currentColor: color.hex
        })
        this.props.handleChange(color)
    }

 
    render() {
        // console.log(this.state.currentColor)
        return (
            <SketchPicker color = {this.state.currentColor} onChangeComplete = {this.handleChange}/>
        )
    }
}