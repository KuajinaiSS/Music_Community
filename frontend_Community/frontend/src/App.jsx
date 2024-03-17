import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Emotions from './components/Emotions';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Emotions />
      <Features />
      <Pricing />
      <Testimonial />
    </>
  );
}

export default App;
