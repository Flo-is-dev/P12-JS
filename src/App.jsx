import Aside from './components/Aside'
import Content from './components/Content'
import Navigation from './components/Navigation'
import './index.css'


function App() {

  return (
    <div className='appContainer'>
        <Navigation/>
        <Aside/>
        <div className='contentContainer'>
            <h1>Bonjour <span className='red'>Thomas</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <Content/>
        </div>
    </div>
  )
}

export default App
