import { useState } from 'react'
import Slider from 'react-input-slider'

function SliderComponent() {

    const [state, setState] = useState({x: 0})


    const style = { width: 600, margin: 50 };

    return (
        <div style = {style}>
            <h1>{state.x}</h1>
            <Slider
                axis="x"
                xstep={20}
                xmin={0}
                xmax={100}
                x={state.x}
                onChange={({ x }) => setState({ x: x })}
            />
            
        </div>
    );
}

export default SliderComponent;