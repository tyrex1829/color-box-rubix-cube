import { useState } from 'react'
import './App.css'
import ColorBox from './ColorBox'

function App() {
  const [color, setColor] = useState(0)

  return (
    <>
      <ColorBox  />
    </>
  )
}

export default App


// colors={[
//   "#E53935",
//   "#E91E63",
//   "#9C28B0",
//   "#673AB7",
//   "#3F51B5",
//   "#2196F3",
//   "#03A9F4",
//   "#00BCD4",
//   "#009688",
//   "#4CAF50",
//   "#8BC34A",
//   "#CDDC39",
//   "#FFEB3B",
//   "#FFC107",
//   "#FF9800",
//   "#FF5722",
// // ]}