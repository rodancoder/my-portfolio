import TechBadge from '../TechBadge/TechBadge'
import './TechStack.scss'

const TechStack = ({ list }) => {
  return (
    <ul className='TechStack'>
      {list.map(item => {
        return (
          <li className='TechStack-item'>
            <TechBadge tech={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default TechStack
