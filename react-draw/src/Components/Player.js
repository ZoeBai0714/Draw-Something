import React, {Component} from 'react';
import socketIO from 'socket.io-client';

const io = socketIO('10.185.5.64:3000/')
//const io = socketIO('localhost:3000/')
window.io = io

export default class Player extends Component {

    
    sendState(e) {
        io.emit('welcome.index', {state: {
            username: e.target[0].value,
            description: e.target[1].value,
            avatar: e.target[2].value
        }}, returnOfTheBackend => {
            //console.log(returnOfTheBackend)
        });
    }
  
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.sendState(e)
        e.target[0].value = " "
        e.target[1].value = " "
        e.target[2].value = " "
    }
   


    render() {
        return (
            <div className="Person" style = {{"margin": "0.5rem"}}>
                <form onSubmit = {e=>{this.handleSubmit(e)}}>
                <div>
                    <label className = "label">
                        Username: 
                        <input  id="username" name="username" type="text" style = {{ "margin-right": "1rem"}}/>
                    </label>
                    <label className = "label">
                        Bio:
                        <input id="description" name="description" type="text" style = {{ "margin-right": "1rem"}}/>
                    </label>
                    <label className = "label">
                        Avatar:
                        <input id="description" name="description" type="text" style = {{ "margin-right": "1rem"}} />
                    </label>
                    <button type="submit">Log in</button>
                </div>
                </form>
            </div>
        )    
    }
}