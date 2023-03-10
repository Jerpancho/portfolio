import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import ParticlesWrapper from './components/ParticlesWrapper';
import './css/App.css';

function App() {
   return (
      <>
         <Navigation />
         <ParticlesWrapper />
         <Hero />

         <About />
         <Skills />
         <Projects />
         <Contacts />
      </>
   );
}

export default App;

