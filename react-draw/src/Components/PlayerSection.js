import React from 'react'
import PlayerCard from './PlayerCard';
import socketIO from 'socket.io-client'
import "../PlayerSection.css"
const io = socketIO('http://localhost:3000')
window.io = io

export default class PlayerSection extends React.Component {

    state = {
        players: []
    }

    changeState = () => {
        io.emit('users.index', {state: this.state.players}, returnPlayers => {
            console.log(returnPlayers)
            this.setState({players: returnPlayers})
        })
        io.on('users.new',user =>{
            this.setState({players: [ ...this.state.players, user]})
        })
    }
    
    componentDidMount() {
        this.changeState()
    }
    

    // shouldComponentUpdate = (prevState) => {
    //     if(prevState.players !== this.state.players) this.changeState() 
    // }

    render() {
        console.log(this.state.players)
        return (
            <div id = "player-section">
                {this.state.players.map(player => (<PlayerCard player = {player}/>))}            
            </div>
        )
    }
}