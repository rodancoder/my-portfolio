import './SocialLink.scss'

const SocialLink = ({ sm }) => {
  return (
    <a href={sm.url} className='SocialLink' title={sm.urlTitle}>
      <span className='SocialLink-pic'>
        <img src={sm.icon.iconSrc} alt={sm.icon.alt} className='SocialLink-icon' />
      </span>
      <div className='SocialLink-wrapper'>
        <span className='SocialLink-platform'>{sm.platform}</span>
        <span className='SocialLink-userName'>{sm.userName}</span>
      </div>
    </a>
  )
}

export default SocialLink
