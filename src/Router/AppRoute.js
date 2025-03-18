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
import Faq from "../Pages/Faq";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Contact from "../Pages/Contact";
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
				<Route path='/faq' element={<Faq />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/privacy' element={<Privacy />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRoute;
