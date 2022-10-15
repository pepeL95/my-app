import './App.css'
import { useState } from 'react'
import { menus } from './utils/enum'
import TopBar from './Components/TopBar/TopBar'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
  const [window, setWindow] = useState(menus.about)
  return (
    <div className="App">
      <TopBar window={window} setWindow={setWindow} />
      {window === menus.about && <About />}
      {window === menus.resume && <Resume />}
      {window === menus.portfolio && <Portfolio />}
      {window === menus.contact && <Contact />}
    </div>
  )
}

export default App
