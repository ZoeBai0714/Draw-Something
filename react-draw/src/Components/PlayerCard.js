import React from 'react'

export default class PlayerCard extends React.Component {



    render() {
        
        return (
            
            
                <div className="ui raised link card">
                    <div className="image">
                        <img src={this.props.player.avatar} alt=""></img>
                    </div>
                    <div className="content">
                        <h3>{this.props.player.name}</h3>
                        <div className="meta text-wrap">
                            <p>Bio: {this.props.player.description}</p>
                        </div>
                    </div>
                </div>
           
        )
    }
}    