import React from 'react'
import Canvas from '../Components/Canvas'
import ColorPicker from '../Components/ColorPicker';
import PlayerSection from '../Components/PlayerSection';


export default class DrawerScreen extends React.Component {
    render() {
        return (
            <div>
                <Canvas />
                <ColorPicker />
                <PlayerSection />
            </div>
        )
    }
}