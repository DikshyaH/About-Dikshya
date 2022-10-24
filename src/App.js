import logo from './logo.svg';
import './App.css';
import Landing from './components/landing-container/landing-container.component';
import Certifications from './components/certifications/certifications.component';
import Contact from './components/contact/contact.component';
import Experience from './components/experiences/experiences.component';
import Profile from './components/profile/profile.component';
import Projects from './components/projects/projects.component';
import Skills from './components/skills/skills.component';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <Landing/>
        <Profile/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Certifications/>
        <Contact/>
        
      </header>
    </div>
  );
}

export default App;
