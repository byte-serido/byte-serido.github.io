import React from 'react';
import "./styles.css";
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import FooterBottom from './components/Footer';
import Value from './components/Value';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Value />
      <Team />
      <FooterBottom />
    </div>
  );
}

export default App;
