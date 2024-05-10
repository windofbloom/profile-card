import './buttons.css'
import { BookmarkIcon } from '../Icons/Bookmark'
import { ArtIcon } from '../Icons/ArtIcon'

function Buttons () {

    return(
        <div className='Button-Container'>
            <a href='https://www.behance.net/gallery/197509895/UXUI-Designer-Portfolio' className='Portfolio-button button_uxui'>
                UX/UI Portfolio 
                <BookmarkIcon />
            </a>
            <a href='https://cara.app/windofbloom' className='Portfolio-button button_art'>
               Art Portfolio 
               <ArtIcon />
            </a>
        </div>
    )
}

export { Buttons }


