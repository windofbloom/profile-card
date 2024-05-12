import './buttons.css'
import { BookmarkIcon } from '../Icons/Bookmark'
import { ArtIcon } from '../Icons/ArtIcon'
import { motion } from 'framer-motion'

function Buttons () {

    return(
        <div
            className='Button-Container'>
            <motion.a 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 6 }}
                href='https://www.behance.net/gallery/197509895/UXUI-Designer-Portfolio' className='Portfolio-button button_uxui'>
                UX/UI Portfolio 
                <BookmarkIcon color={"white"} size={25} />
            </motion.a>
            <motion.a 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 6 }}
                href='https://cara.app/windofbloom' className='Portfolio-button button_art'>
               Art Portfolio 
               <ArtIcon color={"white"} size={25} />
            </motion.a>
        </div>
    )
}

export { Buttons }


