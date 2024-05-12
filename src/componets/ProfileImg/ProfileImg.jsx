import './profileimg.css'
import tarnishedoc1 from '../../assets/imgs/tarnishedoc1.png';

function ProfileImg() {
    return (
        <div>
            <img className='profile__img' src={tarnishedoc1} loading='lazy' alt="Profile" />
        </div>
    );
}

export { ProfileImg };