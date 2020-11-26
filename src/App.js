import React from 'react';
import "./styles.css";
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import FooterBottom from './components/Footer';
import Value from './components/Value';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Mission/>
      <Vision />
      <Value />
      <Team />
      <Contact />
      <FooterBottom />
    </div>
  );
}

export default App;
