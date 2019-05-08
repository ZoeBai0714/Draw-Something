import React from 'react'
import {Link} from 'react-router-dom'

export default class Title extends React.Component {

    render() {
        return(
            <Link to = '/'><div class="foo" >
                <span class="letter" data-letter="D">D</span>
                <span class="letter" data-letter="r">r</span>
                <span class="letter" data-letter="a">a</span>
                <span class="letter" data-letter="w">w</span>
                <span class="letter" data-letter="!">!</span>
            </div>
            </Link>
        )
    }
}