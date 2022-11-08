import './profile.styles.scss';
import ProfilePic from '../../images/Di-Work.jpg';

const Profile = () => {
    return(
        <div className="profile">
            <div className="profile-heading"><h1>Profile</h1></div>
            <div className='text-container'>
                
                    <div className='photo'>
                        <img src={ProfilePic} alt="Profile" className='profile-pic'></img>
                    </div>
                    <div className='about-me'>
                    <h5>About Me</h5>
                    <p><strong>Name : </strong>Dikshya Handique</p>
                    <p><strong>Location : </strong>Bangalore</p>
                    <p>Hi There! I'm currently working as a senior software engineer, specializing in automation testing for the last 4 years. I am looking to transition into a full-time Solidity and React Developer. I love learning about the Ethereum blockchain and developing smart contracts. My goal is to make a significant impact and contribution to the
web3 space and evolve as developer. With my current experience , I have a very keen eye for details and stand for quality. I am both , an excellent team player and individual contributor. Besides this,  I am a HUGE dog-lover and a foodie ;)  </p>

                </div>     
            </div>
            

        </div>
    )
}

export default Profile;