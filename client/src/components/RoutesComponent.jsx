import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './Course';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { FloatingButton } from './FloatingButton';
import { Home } from './Home';

export const RoutesComponent = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
        <FloatingButton />
        <Footer />
    </Router>
  )
}
