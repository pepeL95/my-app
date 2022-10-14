import './TopBar.scss'
import { useState } from 'react'
import { Button } from '@mui/material'
import { menus } from '../../utils/enum.js'
const TopBar = ({ window, setWindow }) => {
  const [menuActive, setMenuActive] = useState(menus.about)
  return (
    <div className="top-bar-container">
      <Button
        className="portfolio-btn"
        sx={{
          background:
            menuActive === menus.portfolio
              ? 'rgba(189, 191, 194, 0.5)'
              : 'none',
        }}
        onClick={() => {
          setMenuActive(menus.portfolio)
          setWindow(menus.portfolio)
        }}
      >
        Portfolio
      </Button>
      <Button
        className="about-btn"
        sx={{
          background:
            menuActive === menus.about ? 'rgba(189, 191, 194, 0.5)' : 'none',
        }}
        onClick={() => {
          setMenuActive(menus.about)
          setWindow(menus.about)
        }}
      >
        About
      </Button>
      <Button
        className="resume-btn"
        sx={{
          background:
            menuActive === menus.resume ? 'rgba(189, 191, 194, 0.5)' : 'none',
        }}
        onClick={() => {
          setMenuActive(menus.resume)
          setWindow(menus.resume)
        }}
      >
        Resume
      </Button>
      <Button
        className="contact-btn"
        sx={{
          background:
            menuActive === menus.contact ? 'rgba(189, 191, 194, 0.5)' : 'none',
        }}
        onClick={() => {
          setMenuActive(menus.contact)
          setWindow(menus.contact)
        }}
      >
        Contact
      </Button>
    </div>
  )
}

export default TopBar
