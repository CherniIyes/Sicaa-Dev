import React from 'react'
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Info from '@/components/Info';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ResumeButton from '@/components/Resume'; // Import ResumeButton component
import Experties from '@/components/Experties';

const Home = () => {
  return (
    <div>
      <Hero heading="placeholder heading" message="placeholder msg" />
      <AboutUs />
      <Experties />
      <Info />
      <Projects />
      <ResumeButton />
      <Footer />
    </div>
  );
};

export default Home;
