

import Home from './components/home';
import Skills from './components/skills';
import Contacts from './components/contacts';
import Projects from './components/projects';
import MenuPopup from './components/menu-popup';

import './App.scss';
import { useEffect, useState, createRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route,
  Link
} from "react-router-dom";
import './styles/styles.scss';


function App() {

  const [selectedNav, setSelectedNav] = useState('home');
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();
  const navMenu = createRef();

  useEffect(() => {
    var path = location.pathname.replace('/', '');
    path = path ? path : 'home';
    setSelectedNav(path);
  }, [location]);
  let toggleClass = () => {
    var exist = navMenu.current.classList.contains('open');
    if (exist) {
      navMenu.current.classList.remove('open');
      setShowPopup(false);
    }
    else {
      navMenu.current.classList.add('open');
      setShowPopup(true);
    }
  }
  return (

    <div >
      {
        showPopup &&
        <MenuPopup selected={selectedNav}></MenuPopup>
      }
      <div class='body-content'>
        <div class='section-header'>
          <div class='row'>
            <div class='menu-nav'>
              <div onClick={toggleClass} ref={navMenu} id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>
          <div class='row'>
            <div class='col-md-6'>
              <strong class='header-text'>Gunjan Chhetri</strong>
              <br></br>
              <strong class='header-subtext'>Software Developer</strong> &nbsp; 
              <a><i class="fa fa-linkedin linkedin" aria-hidden="true"></i></a>
            </div>
            <div class='col-md-6'>

            </div>
          </div>
        </div>
        <div class='row d-none d-lg-block .d-xl-block section-menu'>
          <div class="col-md-6  offset-5">
            <div class='nav-menu'>
              <div className={selectedNav == 'home' ? 'selected-nav' : ''}>
                <Link to="/">Home</Link>
              </div>
              <div className={selectedNav == 'skills' ? 'selected-nav' : ''}>
                <Link to="/skills">Resume</Link>
              </div>
              <div className={selectedNav == 'projects' ? 'selected-nav' : ''}>
                <Link to="/projects">Projects</Link>
              </div>
              <div className={selectedNav == 'contact' ? 'selected-nav' : ''}>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div class='row section-body'>

          <Switch>
            <Route path="/contact" exact>
              <Contacts />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/portfolio" exact>
              <Home />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>


        </div>
      </div>

    </div>

  );
}

export default App;
