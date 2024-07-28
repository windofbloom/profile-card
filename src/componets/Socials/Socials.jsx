import { BehanceIcon } from '../Icons/BehanceIcon';
import { FigmaIcon } from '../Icons/FigmaIcon';
import { FiverIcon } from '../Icons/FiverIcons';
import { GithubIcon } from '../Icons/GithubIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import './socials.css'


function Socials () {
    
    return(
        <div className='Socials'>
            
            <a href="https://www.figma.com/@windofbloom">
                <FigmaIcon color={"#392b12"} size={40}/>
            </a>
            <a href="https://www.behance.net/windofbloom">
                <BehanceIcon color={"#392b12"} size={50} />
            </a>
            <a href="https://github.com/windofbloom">
                <GithubIcon color={"#392b12"} size={40} />
            </a>
            <a href="https://www.instagram.com/windofbloom">
               <InstagramIcon color={"#392b12"} size={40} />
            </a>
        </div>
    )

}

export { Socials };

