import React, {Component} from 'react';
import socketIO from 'socket.io-client';

const io = socketIO('http://localhost:3000/')
window.io = io

export default class Player extends Component {

    
    sendState(e) {
        io.emit('welcome.index', {state: {
            username: e.target[0].value,
            description: e.target[1].value
        }}, returnOfTheBackend => {
            console.log(returnOfTheBackend)
        });
    }
  
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.sendState(e)
        e.target[0].value = " "
        e.target[1].value = " "
    }


    render() {
        return (
            <div className="Person">
                <form onSubmit = {e=>{this.handleSubmit(e)}}>
                <div>
                    <label>
                        Username:
                        <input  id="username" name="username" type="text" />
                    </label>
                    <label>
                        Bio:
                        <input id="description" name="description" type="text"/>
                    </label>
                    <button type="submit">Log in</button>
                </div>
                </form>
            </div>
        )    
    }
}