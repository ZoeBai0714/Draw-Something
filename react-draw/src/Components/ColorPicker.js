import React from 'react'
import {SketchPicker} from 'react-color'

export default class ColorPicker extends React.Component {

    state = {
        currentColor: '#fff'
    }

    handleChange = (color) => {
        console.log(color.hex)
        this.setState({
            currentColor: color.hex
        })
    }


    render() {
        return (
            <SketchPicker color = {this.state.currentColor} onChangeComplete = {this.handleChange}/>
        )
    }
}