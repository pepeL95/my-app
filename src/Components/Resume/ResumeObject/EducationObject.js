import './EducationObject.scss'
import {useState} from 'react'

const EducationObject = ({institutionName, location, field, date, gpa}) => {
  const [showGpa, setShowGpa] = useState(false)

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
          <p>GPA: {showGpa && gpa}</p>
          <button onClick={() => setShowGpa(!showGpa)}>{showGpa ? 'Hide' : 'Show'}</button>
        </div>
    </div>
  )

}

export default EducationObject