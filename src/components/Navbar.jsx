import React from "react";
import './Navbar.css';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a 
            href="/Ntsako%20Ndumiso%20cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-icon"
            >
              <FaFileAlt /> View CV
            </a>
          </li>
          <li><a href="https://github.com/ntsako1804" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaGithub />GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ntsako-shibambu-15023b325/" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaLinkedin /> LinkedIn</a></li>
          <li>
            <div className="toggle-switch">
              <input 
                type="checkbox" 
                id="switch" 
                checked={darkMode} 
                onChange={() => setDarkMode(prev => !prev)} 
              />
              <label htmlFor="switch" className="slider">
              {darkMode ? <BsMoon /> : <BsSun />}
              </label>

            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// 🔘 Dark mode toggle?

// 🔘 Responsive/mobile styles?

// 🔘 Background visual effects?






