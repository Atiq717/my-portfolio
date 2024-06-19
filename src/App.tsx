import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cards from './components/Cards';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Cards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
