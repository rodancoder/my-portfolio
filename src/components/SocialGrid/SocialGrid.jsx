import SocialLink from '../SocialLink/SocialLink'
import './SocialGrid.scss'

const SocialGrid = ({ links }) => {
  return (
    <ul className='SocialGrid'>
      {links.map(item => {
        return (
          <li className='SocialGrid-item'>
            <SocialLink sm={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default SocialGrid
