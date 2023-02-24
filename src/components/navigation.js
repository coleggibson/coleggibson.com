

const Navigation = () => {
    return (
        <div id='nav-main-container'>
            <div id='profile-container' className='nav-container'>
                <div>image container</div>
                <h3 id='name'>Cole Gibson</h3>
            </div>
            <div id='nav-items-container' className='nav-container'>
                <div className='nav-item'>About Me</div>
                <div className='nav-item'>Projects</div>
                <div className='nav-item'>Contact</div>
            </div>
        </div>
    )
}

export default Navigation