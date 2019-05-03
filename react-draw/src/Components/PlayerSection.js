import React from 'react'
import PlayerCard from './PlayerCard';
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:3000')
window.io = io

export default class PlayerSection extends React.Component {

    state = {
        players: []
    }

  /*  
    setState = () => {
        io.emit('users.index', {state: this.state.players}, returnPlayers => {
            console.log(returnPlayers)
            this.setState({players: returnPlayers})
        })
    }

*/

    componentDidMount() {
        //this.setState()
        io.emit('users.index', {state: this.state.players}, returnPlayers => {
            console.log(returnPlayers)
            this.setState({players: returnPlayers})
        })
    }
/*
    componentDidUpdate() {
        fetch("http://localhost:3000/players")
            .then(response => response.json())
            .then(allPlayers => this.setState({
                players: allPlayers
            }))
    }
*/
    render() {
        console.log(this.state.players)
        return (
            <div>
                {this.state.players.map(player => (<PlayerCard player = {player}/>))}            
            </div>
        )
    }
}