import './Contact.scss'
import SendSharpIcon from '@mui/icons-material/SendSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="email-container">
        <h3>You Can Reach Me Through My Email</h3>
        <a href="mailto:jose.lopezgarrido@95@gmail.com" className=" email">
          jose.lopezgarrido95@gmail.com 
          <SendSharpIcon sx={{ fill: '#FDE68A' }}/>
        </a>
      </div>

      <div className="social-media-container">
        <h3>Or Contact Me Through Social Media</h3>
        <a
          href="https://www.linkedin.com/in/jose-miguel-lopez-garrido-685821199"
          target="_blank"
          rel="noopener noreferrer"
          className=" social-media"
        >
          Linked <LinkedInIcon sx={{ fill: '#1D4ED8' }} />
        </a>
      </div>
    </div>
  )
}
// https://usf.joinhandshake.com/stu/users/29106498
export default Contact
