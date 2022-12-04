import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Layout/footer";
import Nav from "../Components/Layout/nav";
import Apply from "../Pages/Apply";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Team from "../Pages/Team";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
const AppRoute = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoute;
