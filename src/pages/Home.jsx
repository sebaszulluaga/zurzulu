import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Aquí agregaremos más secciones después (Research, Arsenal, etc.) */}
      </main>
    </>
  );
};

export default Home;