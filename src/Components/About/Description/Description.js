import './Description.scss'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const Description = () => {
  return (
    <div className="description-container">
      <h1> Hello, I'm Jose Lopez</h1>
      <div className="text-box">
        <p>
          Some text in here that explains what I want... Some text in here that
          explains what I want... Some text in here that explains what I want...
          Some text in here that explains what I want... Some text in here that
          explains what I want...
        </p>
      </div>
      <div className="social-media-btns">
        <IconButton
          sx={{
            width: '13vmax',
            minWidth: '120px',
            height: '40px',
            borderRadius: '20px',
            border: '2px solid #272c34',
            mt: '20px',
            color: '#272c34',
            fontSize: '2vmax',
          }}
        >
          <GitHubIcon sx={{ mr: '5px', fill: 'purple' }} />
          GitHub
        </IconButton>
        <IconButton
          sx={{
            width: '13vmax',
            minWidth: '120px',
            height: '40px',
            borderRadius: '20px',
            border: '2px solid #272c34',
            mt: '20px',
            color: '#272c34',
            fontSize: '2vmax',
          }}
        >
          <LinkedInIcon sx={{ mr: '5px', fill: '#1D4ED8' }} />
          LinkedIn
        </IconButton>
      </div>
    </div>
  )
}

export default Description
