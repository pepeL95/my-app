import './TopBar.scss'
import { useState } from 'react'
import { Button } from '@mui/material'
import {menus} from '../../utils/enum.js'
const TopBar = () => {
  const [menuActive, setMenuActive] = useState(menus.about)
  return (
    <div className='top-bar-container'>
        <Button className='portfolio-btn'> Portfolio </Button>
        <Button className='about-btn'> About </Button>
        <Button className='resume-btn'> Resume </Button>
        <Button className='contact-btn'> Contact </Button>
    </div>
  )
}

export default TopBar
