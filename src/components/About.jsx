import React from "react";
import AnimatedSection from "./AnimatedSection";
import { FaPython, FaReact, FaDatabase, FaGitAlt, FaUnity } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiVisualstudiocode  } from "react-icons/si";
import { DiDotnet } from "react-icons/di"; 
import { FaTools } from "react-icons/fa";



const About = () => {
  return (
    <section id="about" className="about">
      <AnimatedSection>
        <div className="glass">
          <h2>About Me</h2>
          <p>
            I’m a passionate <strong>BCom Information Systems Graduate</strong> from the University of Johannesburg
            with a love for building smart, user-focused software solutions.
          </p>
          <p>
            My experience ranges from creating <strong>health & fitness apps</strong> to
            developing <strong>college management systems</strong> — blending creativity with functionality.
          </p>

          <div className="skills-grid">
            <div>
              <h3>Languages</h3>
              <ul>
                <li><FaPython className="icon" /> Python</li>
                <li><DiDotnet className="icon" /> C# / .NET</li>
                <li><SiJavascript className="icon" /> JavaScript</li>
              </ul>
            </div>

            <div>
              <h3>Frameworks</h3>
              <ul>
                <li><FaReact className="icon" /> React / React Native</li>
                <li><SiFirebase className="icon" /> Firebase</li>
                <li><FaDatabase className="icon" /> SQL Server</li>
              </ul>
            </div>

            <div>
              <h3>Tools</h3>
              <ul>
                <li><FaGitAlt className="icon" /> Git</li>
                <li><FaUnity className="icon" /> Unity</li>
                <li><FaTools className="icon" /> VS Code / Developer Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
