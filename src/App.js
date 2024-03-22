// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Import CSS file for global styles
import Header from './components/header/Header';
import  Hero from './components/hero/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import CoursesPage from './pages/courses/CoursesPage';
import WebAppDevelopmentBootcampPage from './pages/web-development/WebAppDevelopmentBootcampPage';
import CampusPage from './pages/campusPage/CampusPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} /> {/* Route for the courses page */}
          <Route path="/web-app-development-bootcamp" element={<WebAppDevelopmentBootcampPage />} />
          <Route path="/campus" element={<CampusPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Courses />
    <Testimonials />
    <Partners />
  </>
);

export default App;
