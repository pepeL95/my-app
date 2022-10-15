import './EducationObject.scss'

const EducationObject = ({institutionName, location, field, date, gpa}) => {
  return (
    <div className='EducationObject-container'>
        <div className='institution-container'>
          <p>{institutionName}</p>
          <p>{location}</p>
        </div>

        <div className='field-container'>
          <p>{field}</p>
          <p>{date}</p>
        </div>

        <div className='gpa-container'>
          <p>GPA: {gpa}</p>
        </div>
    </div>
  )

}

export default EducationObject