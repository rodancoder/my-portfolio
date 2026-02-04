import { useContext } from 'react'
import BentoItem from '../BentoItem/BentoItem'
import { GlobalContext } from '../../Provider/Provider'
import './BentoGrid.scss'

const BentoGrid = () => {
  const {
    data: { hero, portrait, about, stack, projects, contact },
  } = useContext(GlobalContext)

  return (
    <main className='BentoGrid'>
      <BentoItem data={hero} />
      <BentoItem data={portrait} />
      <BentoItem data={about} />
      <BentoItem data={stack} />
      <BentoItem data={projects} />
      <BentoItem data={contact} />
    </main>
  )
}

export default BentoGrid
