import React, {Component} from 'react';
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:3000')
window.io = io

export default class Player extends Component {

    state = {
        username: " "
    }

    sendState() {
        io.emit('welcome.index', {state: this.state})
    }
    /*
    componentDidMount() {
        this.sendState()     
    }
    */
    handleChange = (e) => {
        this.setState({username: e.target.value})
    }


    render() {
        this.sendState()
        return (
            <div className="Person">
            <form onSubmit={this.handleSubmit}>
                <label>
                Username:
                <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
                Hello
            </div>
        )    
    }
}