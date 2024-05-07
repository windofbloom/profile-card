import './App.css'
import { Buttons } from '../Buttons/Buttons'
import { Info } from '../Info/Info'
import { Socials } from '../Socials/Socials'
import { ProfileImg } from '../ProfileImg/ProfileImg'


function App() {

  return (
    <div className='AppContainer'>

      <div className='AppContainer__img'>
        <ProfileImg />
      </div>

      <div className='AppContainer__info'>
        <Info />
        <Socials />
        <Buttons />
      </div>

    </div>
    
  )
}

export default App
