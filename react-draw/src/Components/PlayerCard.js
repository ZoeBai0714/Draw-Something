import React from 'react'

export default class PlayerCard extends React.Component {



    render() {
        
        return (
            
            
                <div className="blue move ui raised link card">
                    <div className="image">
                        <img src={this.props.player.avatar} alt=""></img>
                    </div>
                    <div className="content">
                        <h3>{this.props.player.name}</h3>
                        <div className="description">
                            <p>Bio: {this.props.player.description}</p>
                        </div>
                    </div>
                </div>
           
        )
    }
}    