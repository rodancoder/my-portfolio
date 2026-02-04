import './TechBadge.scss'

const TechBadge = ({ tech }) => {
  return (
    <div className='TechBadge'>
      <span className='TechBadge-pic'>
        <img src={tech.icon.iconSrc} alt={tech.icon.alt} className='TechBadge-icon' />
      </span>
      <span className='TechBadge-name'>{tech.name}</span>
    </div>
  )
}

export default TechBadge
