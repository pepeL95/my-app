import './TopBar.scss'
import { Button } from '@mui/material'
import { menus } from '../../utils/enum.js'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

const TopBar = ({ window, setWindow }) => {
  return (
    <div className="top-bar-container">
      <div className="left-halve" />
      <div className="right-halve">
        <Button
          className="portfolio-btn"
          sx={{
            background:
              window === menus.portfolio ? 'rgba(189, 191, 194, 0.5)' : 'none',
          }}
          onClick={() => setWindow(menus.portfolio)}
        >
          Portfolio
          <span style={{ width: '10px' }} />
          <CodeIcon fontSize="small" />
        </Button>

        <Button
          className="about-btn"
          sx={{
            background:
              window === menus.about ? 'rgba(189, 191, 194, 0.5)' : 'none',
          }}
          onClick={() => setWindow(menus.about)}
        >
          About
          <span style={{ width: '10px' }} />
          <QuestionMarkIcon fontSize="small" />
        </Button>

        <Button
          className="resume-btn"
          sx={{
            background:
              window === menus.resume ? 'rgba(189, 191, 194, 0.5)' : 'none',
          }}
          onClick={() => setWindow(menus.resume)}
        >
          Resume
          <span style={{ width: '10px' }} />
          <WorkIcon fontSize="small" />
        </Button>

        <Button
          className="contact-btn"
          sx={{
            background:
              window === menus.contact ? 'rgba(189, 191, 194, 0.5)' : 'none',
          }}
          onClick={() => setWindow(menus.contact)}
        >
          Contact
          <span style={{ width: '10px' }} />
          <PermContactCalendarIcon fontSize="small" />
        </Button>
      </div>
    </div>
  )
}

export default TopBar
