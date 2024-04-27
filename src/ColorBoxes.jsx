import ColorBox from './ColorBox';
import './ColorBoxes.css';

function ColorBoxes ({ colors }) {
    return (
        <div className="ColorBoxes">
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
        </div>
    );
}

export default ColorBoxes;