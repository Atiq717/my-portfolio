import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cards from './components/Cards';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main>
            <About />
            <Skills />
            <Cards />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
