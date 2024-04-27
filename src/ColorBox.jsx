import { useState } from 'react'

// for DRY
function randomChoice (arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
} 

function ColorBox ({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    
    const changeColor = () => {
        setColor(randomChoice(colors));
    }

    return (
        <div 
            onClick={changeColor} 
            style={{ backgroundColor: color, height: "20%", width: "20%", borderRadius: "5px" }}
        ></div>
    )
}

export default ColorBox;