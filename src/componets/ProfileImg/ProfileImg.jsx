import './profileimg.css'
import tarnishedoc1 from '../../assets/imgs/tarnishedoc1.jpg';

function ProfileImg() {
    return (
        <div>
            <img className='profile__img' src={tarnishedoc1} alt="Profile" />
        </div>
    );
}

export { ProfileImg };