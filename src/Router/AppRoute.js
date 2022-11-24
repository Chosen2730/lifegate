import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Layout/footer";
import Nav from "../Components/Layout/nav";
import Apply from "../Pages/Apply";
import Home from "../Pages/Home";
const AppRoute = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoute;
