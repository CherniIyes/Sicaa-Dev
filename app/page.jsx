import React from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Info from '@/components/Info';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ResumeButton from '@/components/Resume'; // Import ResumeButton component
import Experties from '@/components/Experties';
import Resume from '@/components/Certificate'
import Brain from '@/components/brain';

const Home = () => {
  return (
    <div>
      <Hero heading="placeholder heading" message="placeholder msg" />
      <AboutUs />
      {/* <Brain /> */}
      <Experties />
      <Info />
      <Projects />
      <ResumeButton />
<Resume/>
      <Footer />
      {/* Include ResumeButton component here */}
    </div>
  );
};

export default Home;
