import './buttons.css'

function Buttons () {

    return(
        <div className='Button-Container'>
            <button className='Portfolio-button button_uxui'>
                UX/UI Portfolio
            </button>
            <button className='Portfolio-button button_art'>
               Art Portfolio
            </button>
        </div>
    )
}

export { Buttons }