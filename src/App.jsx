import BentoGrid from './components/BentoGrid/BentoGrid'
import { Provider } from './Provider/Provider'
import './styles/scss/App.scss'

const App = () => {
  return (
    <Provider>
      <BentoGrid />
    </Provider>
  )
}

export default App
