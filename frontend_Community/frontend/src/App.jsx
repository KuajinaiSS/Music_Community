import React from 'react';

import Features from './components/Features';
import Footer from './components/Footer';
import Emotions from './components/Emotions';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Emotions />
      <Features />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
