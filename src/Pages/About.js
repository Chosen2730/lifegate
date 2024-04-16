import React from "react";
import { useEffect } from "react";
import hero from "../assets/images/about-us.jpeg";
import img1 from "../assets/images/left.jpg";
import img2 from "../assets/images/right.jpg";
import left from "../assets/images/l-left.png";

import Team from "./Team";

const About = () => {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);
	return (
		<div>
			<div className='relative bg-blur bg-gradient-to-b  from-gray-500 to-green-900'>
				<img
					className='h-[600px] object-cover w-full mix-blend-overlay'
					src={hero}
					alt=''
				/>
				<div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
					<h1 className='font-medium text-3xl md:text-6xl text-center'>
						About us
					</h1>
					<p className='text-3xl md:text-7x text-center font-bold my-6'>
						Lifegate <span className='text-yellow-600'>Microfinance Bank</span>
					</p>
				</div>
			</div>
			<div className='max-w-6xl mx-auto p-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-6'>
					<div>
						<div className='flex item-center'>
							<img src={left} alt='' />
							<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
								About
							</h2>
						</div>
						<p className='my-4 text-sm'>
							Lifegate Microfinance Bank situated at the heart of Kosofe LGA of
							Lagos State commenced operation in the year 2008, with the primary
							aim of providing financial services to the informal and semi
							formal sector in ketu and its environs.
						</p>
						<p className='my-4 text-sm'>
							The bank is committed to its passion of improving the business
							opportunities of entrepreneurs by availing them easy access to
							affordable loans, micro investment opportunities and financial
							advisory services, as well as acting as agent for Micro pension
							and insurance, a one stop shop for all financial needs of SMEs in
							Lagos.
						</p>
						<p className='my-4 text-sm'>
							We pride ourselves in our ability to provide simple solutions with
							quality, excellent and exceptional services. As such we are
							deliberate in ensuring that we are constantly abreast of
							innovation and market changes that can affect the businesses in
							our sector. The bank has exceptional and strong shareholders
							committed to the task of improving access to financial service in
							the country.
						</p>
						<p className='my-4 text-sm'>
							We believe that by providing a broad package of financial
							inclusion products and business development services to the
							socially and economically challenged, we will be able to increase
							the enabling environment for growth and expansion which will in
							turn increase the GDP of the economy
						</p>
					</div>
					<div>
						<img
							src={img1}
							className='w-full h-full object-cover'
							alt='about-img'
						/>
					</div>
				</div>
				<div className='flex gap-6 flex-col md:flex-row-reverse my-20'>
					<div className='md:w-[50%]'>
						<div className='flex gap-4 item-center'>
							<img src={left} alt='' />
							<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
								Our Mission
							</h2>
						</div>
						<p className='my-4 text-sm'>
							To provide Financial and Advisory services to the low income
							echelon of the Nigerian Society with such efficiency and integrity
							that all stake holders are justifiably proud to be associated with
							LMFB.
						</p>
						<div className='flex gap-4 item-center'>
							{/* <img src={left} alt='' /> */}
							<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
								Our Vision
							</h2>
						</div>
						<p className='my-4 text-sm'>
							To be the first choice inclusive finance solution provider
						</p>
						<div className='flex gap-4 item-center'>
							{/* <img src={left} alt='' /> */}
							<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
								Core Values
							</h2>
						</div>
						<div className='ml-8'>
							<li className='list-disc my-3'>Integrity</li>
							<li className='list-disc my-3'>Innovation</li>
							<li className='list-disc my-3'>Inclusion</li>
							<li className='list-disc my-3'>Transparency </li>
							<li className='list-disc my-3'>Accountability</li>
						</div>
					</div>
					<div className='md:w-[50%]'>
						<img
							src={img2}
							className='w-full h-full object-cover'
							alt='about-img'
						/>
					</div>
				</div>
			</div>
			{/* <Team /> */}
		</div>
	);
};

export default About;
