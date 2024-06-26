
import './App.css'
import { Buttons } from '../Buttons/Buttons'
import { Info } from '../Info/Info'
import { Socials } from '../Socials/Socials'
import { ProfileImg } from '../ProfileImg/ProfileImg'
import { motion } from 'framer-motion'


function App() {

  return (
    <>
    <motion.div 
      initial={ {opacity: 0} }
      animate={ {opacity: 1} }
      transition={{duration:1,
        ease: 'easeInOut'}}
      className='AppContainer'>

      <div className='AppContainer__img'>
        <ProfileImg />
      </div>

      <div className='AppContainer__info'>
        <Info />
        <Socials />
        <Buttons />
      </div>
    </motion.div>
    <div className='AppBackground_container'>
        <section id="up"></section>
        <section id="down"></section>
        <section id="left"></section>
        <section id="right"></section>
    </div>
    </>
  )
}

export default App
