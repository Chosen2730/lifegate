import React from "react";
import hero from "../assets/images/team-hero.png";
import left from "../assets/images/l-left.png";
import bankole from "../assets/images/bankole.png";
import godwin from "../assets/images/godwin.png";
import ilesanmi from "../assets/images/ilesanmi.png";
import mayowa from "../assets/images/mayowa.png";
import omotayo from "../assets/images/omotayo.png";
import chinyere from "../assets/images/chinyere.jpg";
import patrick from "../assets/images/patrick.jpg";
import samuel from "../assets/images/samuel.jpg";
import oluwaseun from "../assets/images/oluwaseun.jpg";
import md from "../assets/images/md.jpeg";
import manage from "../assets/images/team.jpeg";
import about from "../assets/images/about.jpeg";

const Team = () => {
	// 	DR. GODWIN OROVWIRORO
	// MRS. OLUYEMISI ILESANMI
	// MR. MAYOWA OWOLABI
	// MR. ROTIMI OMOTAYO
	// MRS. ADEPEJU ADEKUNLE
	const teams = [
		{ name: "Dr Godwin Orovriroro", img: godwin },
		{ name: "Mrs Oluyemisi Ilesanmi", img: ilesanmi },
		{ name: "Mr Mayowa Owolabi", img: mayowa },
		// { name: "Mr Rotimi Omotayo", img: omotayo },
		{ name: "Mrs Adepeju Adekunle", img: bankole },
	];
	const management = [
		{ name: "Uche Betty Chinyere", img: chinyere, position: "Head of Finance" },
		// {
		// 	name: "Patrick Etokhana",
		// 	img: patrick,
		// 	position: "Head of Audit and Compliance",
		// },
		{ name: "Samuel Olowoyeye", img: samuel, position: "Head of Operations" },
		{ name: "Oladimeji Tinuosho", img: oluwaseun, position: "IT Head" },
		{
			name: "Grace Adeyinka Jones",
			img: about,
			position: "Head of Credit and Risk",
		},
	];
	return (
		<div>
			<div className='relative bg-blur bg-gradient-to-b  from-gray-500 to-green-900'>
				<img
					className='h-[600px] object-cover w-full mix-blend-overlay'
					src={manage}
					alt=''
				/>
				<div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
					<h1 className='font-medium text-3xl md:text-6xl text-center'>
						The Team
					</h1>
					<p className='text-3xl md:text-7x text-center font-bold my-6'>
						Together <span className='text-yellow-600'>We can do so much</span>
					</p>
				</div>
			</div>
			<div className='max-w-6xl mx-auto p-4 md:p-8'>
				<div className='flex item-center'>
					<img src={left} alt='' />
					<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
						Board of Directors
					</h2>
				</div>
				<div className='flex flex-col md:flex-row p-8 bg-gray-100 shadow-xl gap-8 my-6 mb-20'>
					{/* <img src={stephen} alt='stephen' /> */}
					<div>
						<h2 className='font-bold text-lg'>Mr. Lanre Bamkole</h2>
						<h3 className='text-sm my-1 font-medium'>Chairman</h3>
						<p className='text-sm my-6 leading-[2rem]'>
							Lanre Bamkole has B.Sc Civil Engineering from the University of
							Ife now Obafemi Awolowo University Ile Ife Osun State and M.Sc
							Civil Engineering Structures from the University of Lagos, Akoka
							Lagos as well as MBA from the University of Navarra (IESE)
							Barcelona Spain. He has 14 years of banking experience with
							Nigeria International Bank/Citibank where he was an Assistant
							General Manager and headed various banking units/departments. He
							was also an Assistant Vice President while he was with Nigeria
							International Bank/Citibank. He has also been an Executive
							Director and Vice Chairman with a Stock broking firm,
							International Capital Securities Limited. He was once the Managing
							Director of Lifegate Microfinance Bank and presently he is the
							lead facilitator at H Pierson's Limited.
						</p>
					</div>
				</div>
				<div className='flex flex-col md:flex-row-reverse p-8 bg-gray-100 shadow-xl gap-8 my-20'>
					{/* <img src={adedayo} alt='adedayo' /> */}
					<div>
						<h2 className='font-bold text-lg'>Mr. Oluwasogo Kolawole</h2>
						<h3 className='text-sm my-1 font-medium'>
							Managing Director/Business Development
						</h3>
						<p className='text-sm my-6 leading-[2rem]'>
							Sogo Kolawole holds an HND in Banking and Finance from The Federal
							Polytechnic, Ede, Osun State. He is a certified Microfinance
							Banker by the Chartered Institute of Bankers of Nigeria (CIBN). He
							started his banking career with Universal Truest Bank PLC as a
							Consumer Banking Group & Retail Banking Group. He moved to Wonder
							Foods Now Promasidor Nigeria Limited as production/ sales
							personnel. He started is career in Microfinance Bank with
							Integrated Microfinance Bank PLC as Group Business Manager/Profit
							Center Manager , He moved to Marksmen Microfinance Institution as
							Head, Risk, Credit and marketing. He also worked with Bosak
							Microfinance Bank Limited as Head, Business Development also
							Davodani Microfinance Bank Limited as Group Head, Business
							Development and Branch Coordinator. He joined Lifegate MFB in 2023
							as the Managing Director and Business Development.
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-black text-white p-4'>
					{teams.map(({ name, img }, i) => {
						return (
							<div className='flex flex-col items-center' key={i}>
								{/* <img className='w-full' src={img} alt={name} /> */}
								<h2 className='text-center text-base my-2 font-medium'>
									{name}
								</h2>
							</div>
						);
					})}
				</div>
				<div className='mt-20'>
					<div className='flex item-center'>
						<img src={left} alt='' />
						<h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
							Management Team
						</h2>
					</div>
					<div className='flex flex-col items-center justify-center my-4'>
						{/* <div>
            <img
              src={manage}
              className='w-screen md:h-[580px] object-cover'
              alt='management'
            />
          </div> */}
						<div className='relative flex items-center justify-center rounded-full my-10 w-96 h-96  bg-blur bg-gradient-to-b  from-gray-500 to-green-900 m-4'>
							<img
								src={md}
								className='w-96 h-96 object-cover rounded-full shadow-xl mix-blend-overlay object-top'
								alt='adewale'
							/>
							<div className='absolute bottom-12 text-white text-center'>
								<h2 className='text-center font-medium text-xl'>
									Mr. Oluwasogo Kolawole
								</h2>
								<p className='italic'>MD/CEO</p>
							</div>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 w-full'>
							{management.map(({ name, img, position }, i) => {
								return (
									<div
										className='flex flex-col items-center bg-blur bg-gradient-to-b  from-gray-500 to-green-900 relative'
										key={i}
									>
										<img
											className='w-full mix-blend-overlay h-96 md:h-64 object-cover object-top'
											src={img}
											alt={name}
										/>
										<div className='absolute bottom-2 text-white text-center '>
											<h2 className='text-sm my-2 font-medium '>{name}</h2>
											<p className='italic text-xs'>{position}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
