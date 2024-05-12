import { BehanceIcon } from '../Icons/BehanceIcon';
import { FigmaIcon } from '../Icons/FigmaIcon';
import { FiverIcon } from '../Icons/FiverIcons';
import { GithubIcon } from '../Icons/GithubIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import './socials.css'


function Socials () {
    
    return(
        <div className='Socials'>
            
            <a href="">
                <FigmaIcon color={"#092147"} size={40}/>
            </a>
            <a href="">
                <BehanceIcon color={"#092147"} size={50} />
            </a>
            <a href="">
                <FiverIcon color={"#092147"} size={40} />
            </a>
            <a href="">
                <GithubIcon color={"#092147"} size={40} />
            </a>
            <a href="">
               <InstagramIcon color={"#092147"} size={40} /> 

            </a>
        </div>
    )

}

export { Socials };

