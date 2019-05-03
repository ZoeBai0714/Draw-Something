import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js'
import socketIO from 'socket.io-client';

const io = socketIO('http://localhost:3000/')
window.io = io

export default class Player extends Component {

    state = {
        username: " "
    }

    sendState() {
        io.emit('welcome.index', {state: this.state}, returnOfTheBackend => {
            console.log(returnOfTheBackend)
        });
    }
    /*
    componentDidMount() {
        this.sendState()     
    }
    */
    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        this.sendState()
        this.setState({username: e.target[0].value})
        e.target[0].value = " "
    }


    render() {
        return (
            <div className="Person">
                <form onSubmit = {e=>{this.handleSubmit(e)}}>
                <div>
                    <label>
                        Username
                        <input onChange = { e => this.handleChange(e)} id="username" name="username" type="text" />
                    </label>
                    <button type="submit">Log in</button>
                </div>
                </form>
                Hello
            </div>
        )    
    }
}