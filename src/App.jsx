import { useState } from 'react'
import './App.css'
import Pytajnik from './questON'
import Start from './start'

function App() {
  
  const [ gamemode, setGamemode ] = useState(false)

  return (
    <>
      <div>
        { gamemode ? <Pytajnik/>:<Start setGamemode={setGamemode} />}
      </div>
    </>
  )
}

export default App
