import React, { useState } from "react";
import "./Navbar.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        <h2 className="logo">NTSAKO NDUMISO SHIBAMBU</h2>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="/Ntsako_Ndumiso_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              View CV
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ntsako1804"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              <FaGithub /> GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ntsako-shibambu-15023b325/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>

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