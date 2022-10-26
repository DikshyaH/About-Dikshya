import './landing-container.styles.scss';

const Landing = () => {
    return(
        <div className='landing-container'>
            <div className='overlay'>
            <div className='name-container'>
                <a href='/' className='scroll-down'><span className='arrow'></span></a>
                
                <h1>Dikshya Handique</h1>
                <h4>Interactive Resume</h4>
                    
            </div>
            </div>
        </div>
    )
}

export default Landing;