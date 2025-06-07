import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landingpage/Home/HomePage';
import Signup from "./landingpage/Signup/Signup";

import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import ProductPage from "./landingpage/Products/ProductPage";
import  AboutPage from './landingpage/about/AboutPage';

import Navbar from './Nabar';
import Footer from './Footer';
import NotFound from './landingpage/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/"element={<HomePage/>}/>
 <Route path="/signup" element={<Signup/>}/>
 <Route path="/about"element={<AboutPage/>}/>
  <Route path="/pricing"element={<PricingPage/>}/>
  <Route path ="/Product" element={<ProductPage/>}/>
  <Route path="/Support"element={<SupportPage/>}/>
  <Route path ="/*"element={<NotFound/>}/>

 </Routes>
 <Footer/>

 </BrowserRouter>
);


