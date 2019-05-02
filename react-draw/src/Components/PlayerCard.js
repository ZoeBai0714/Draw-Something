import React from 'react'

export default class PlayerCard extends React.Component {



    render() {
        return (
            <div>
                <img src={this.props.player.avatar}></img>
                <h1>{this.props.player.name}</h1>
                <p>Description: {this.props.player.description}</p>
            </div>
        )
    }
}