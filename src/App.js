import './App.css'
import { useState } from 'react'
import { menus } from './utils/enum'
import TopBar from './Components/TopBar/TopBar'
import About from './Components/About/About'
import React from 'react'
function App() {
  const [window, setWindow] = useState(menus.about)
  return (
    <div className="App">
      <TopBar window={window} setWindow={setWindow}/>
      {window === menus.about && <About />}
    </div>
  )
}

export default App
