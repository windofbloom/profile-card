import './buttons.css'
import { BookmarkIcon } from '../Icons/Bookmark'
import { ArtIcon } from '../Icons/ArtIcon'
import { motion } from 'framer-motion'

function Buttons () {

    return(
        <div className='Button-Container'>
            <div>
                <button 
                    className='Portfolio-button button_uxui'
                    onClick={() => window.open('https://www.behance.net/gallery/197509895/UXUI-Designer-Portfolio', '_blank')} >
                    UX/UI Portfolio
                </button>

                <button 
                    className='Portfolio-button button_art'
                    onClick={() => window.open('https://cara.app/windofbloom', '_blank')}>
                    Art Portfolio</button>
            </div>
            <div>
                <button 
                    className='Portfolio-button'
                    disabled={true}
                    onClick={() => window.open('', '_blank')}>
                    Commissions (soon)</button>
                <button 
                    className='Portfolio-button button_kofi'
                    onClick={() => window.open('https://ko-fi.com/windofbloom', '_blank')}>
                    Buy me a Ko-FI ❥</button>
            </div>
        </div>
   
    )
}

export { Buttons }


