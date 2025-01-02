import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import AwardPage from './landingPage/award/AwardPage';
import SignUp from './landingPage/signUp/SignUp';
import AboutPage from './landingPage/about/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/AwardPage" element={<AwardPage/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/AboutPage" element={<AboutPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

