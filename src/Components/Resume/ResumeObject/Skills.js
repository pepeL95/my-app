import './Skills.scss'

const Skills = ({ skills }) => {
  return (
    <div className="skills-container">
      <ul>
        {skills.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
