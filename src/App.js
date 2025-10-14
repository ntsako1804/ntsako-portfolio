// import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { div } from 'framer-motion/client';

// function App() {

//   const[darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem("darkmode");
//     if(saved === "true") setDarkMode(true);
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("darkmode", darkMode);
//   }, [darkMode])


//   return (

//     <div className={darkMode ? "dark" : ""}>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Home />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>

    
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

