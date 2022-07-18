import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from '../pages/Home.jsx';
import Student from '../pages/Student.jsx';
import Contact from '../pages/Contact.jsx';
import Faculty from '../pages/Faculty.jsx';

const Registration1 = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Registration1;