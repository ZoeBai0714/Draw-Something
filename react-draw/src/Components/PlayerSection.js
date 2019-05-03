import React from 'react'
import PlayerCard from './PlayerCard';

export default class PlayerSection extends React.Component {

    state = {
        players: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/players")
            .then(response => response.json())
            .then(allPlayers => this.setState({
                players: allPlayers
            }))
    }


    render() {
        //console.log(this.state.players)
        return (
            <div>
                {this.state.players.map(player => (<PlayerCard player = {player}/>))}            
            </div>
        )
    }
}