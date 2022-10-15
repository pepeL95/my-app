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
          I am currently a student at the University of South Florida working
          towards a bachelor's degree in computer science, along with a minor in
          mathematics. I have tangible experience in the web development
          industry, as I have worked as a software intern at TheIncLab (Tampa,
          FL). I am currently involved in an active research being conducted at
          the University of South Florida in order to determine the benefits of
          gamifying education for engineering, IT, and Cybersecurity. While
          doing this I have had the opportunity to expand my skillset by working
          with Unity, Javascript, ExpressJs, etc. Additionally, I am working as
          a Data Structures Teacher Assistant at USF, which has helped me
          enhance my understanding about data structures/algorithms.
        </p>
      </div>
      <div className="social-media-btns">
        <IconButton
          onClick={() => window.open('https://github.com/pepeL95')}
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #EFF6FF',
            mt: '20px',
            color: '#272c34',
            boxShadow: '1px 2px 2px 1px lightGray',
            mr: '5px',
          }}
        >
          <GitHubIcon sx={{ fill: 'purple' }} />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/jose-miguel-lopez-garrido-685821199'
            )
          }
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #EFF6FF',
            mt: '20px',
            color: '#272c34',
            boxShadow: '1px 2px 2px 1px lightGray',
            ml: '5px',
          }}
        >
          <LinkedInIcon sx={{ fill: '#1D4ED8' }} />
        </IconButton>
      </div>
    </div>
  )
}

export default Description
