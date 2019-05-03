import React from 'react'
import Person from '../Components/Player'

export default class PlayerCard extends React.Component {



    render() {
        return (
            <div style={{float: "right", top: 100}}className="ui column">
                <div className="ui card">
                    <div className="image">
                        <img src={this.props.player.avatar}></img>
                    </div>
                    <div className="content">
                        <h3>{this.props.player.name}</h3>
                        <div className="meta text-wrap">
                            <p>Description: {this.props.player.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}