import './App.css'
import { Buttons } from '../Buttons/Buttons'
import { Info } from '../Info/Info'
import { Socials } from '../Socials/Socials'
import { ProfileImg } from '../ProfileImg/ProfileImg'


function App() {

  return (
    <div className='AppContainer'>

      <ProfileImg />
      <Info />
      <Socials />
      <Buttons />

      <div className="card">
      </div>

    </div>
    
  )
}

export default App
