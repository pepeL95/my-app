import './ExperienceObject.scss'

const ExperienceObject = ({
  companyName,
  location,
  jobTitle,
  date,
  jobDescription,
}) => {
  return (
    <div className="experienceObject-container">
      <div className="section company-container">
        <p>{companyName}</p>
        <p>{location}</p>
      </div>

      <div className="section job-title-container">
        <p style={{ fontWeight: 'bold' }}>{jobTitle}:</p>
        <p>{date}</p>
      </div>

      <ul>
      {jobDescription.map(e => (
            <li className="list-group-item list-group-item-primary">{e}</li>
          ))}
      </ul>
    </div>
  )
}

export default ExperienceObject
