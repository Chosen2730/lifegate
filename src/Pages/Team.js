import React from "react";
import hero from "../assets/images/team-hero.png";
import left from "../assets/images/l-left.png";
import stephen from "../assets/images/stephen.png";
import adedayo from "../assets/images/adedayo.png";
import bankole from "../assets/images/bankole.png";
import godwin from "../assets/images/godwin.png";
import ilesanmi from "../assets/images/ilesanmi.png";
import mayowa from "../assets/images/mayowa.png";
import omotayo from "../assets/images/omotayo.png";
import adewale from "../assets/images/adewale.jpg";
import chinyere from "../assets/images/chinyere.jpg";
import patrick from "../assets/images/patrick.jpg";
import samuel from "../assets/images/samuel.jpg";
import oluwaseun from "../assets/images/oluwaseun.jpg";
import oladipo from "../assets/images/oladipupo.jpg";
import manage from "../assets/images/management.jpg";

const Team = () => {
  const teams = [
    { name: "Mrs Oluyemi Ilesanmi", img: ilesanmi },
    { name: "Dr Godwin Orovriroro", img: godwin },
    { name: "Mrs Adefunke Omotayo", img: omotayo },
    { name: "Mr Mayowa Owolabi", img: mayowa },
    { name: "Mr Lanre Bankole", img: bankole },
  ];
  const management = [
    { name: "Uche Betty Chinyere", img: chinyere },
    { name: "Patrick Etokhana", img: patrick },
    { name: "Samuel Olowoyeye", img: samuel },
    { name: "Oluwaseun Abigail Orimoyegun", img: oluwaseun },
    { name: "Oladipo Olatilewa Ishola", img: oladipo },
  ];
  return (
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
          <h2 className='font-bold text-lg'>Mr Stephen</h2>
          <h3 className='text-sm my-1 font-medium'>Chairman</h3>
          <p className='text-sm my-6 leading-[2rem]'>
            Stephen Adekunle has a Bachelor of Law Degree from the University of
            Lagos, an MBA from the same University and an M.Sc. in Accounting
            from The Hague University, The Netherlands. He is a member of the
            Institute of Chartered Accountants of Nigeria (ICAN), Chartered
            Institute of Bankers Nigeria, and Association of forensic Accounting
            Researchers. He started his banking career with Peak Merchant Bank
            Ltd and later with Stallion Mortgage Bank Ltd
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse p-8 bg-gray-100 shadow-xl gap-8 my-20'>
        {/* <img src={adedayo} alt='adedayo' /> */}
        <div>
          <h2 className='font-bold text-lg'>Miss Adedayo Adewale</h2>
          <h3 className='text-sm my-1 font-medium'>Managing Director</h3>
          <p className='text-sm my-6 leading-[2rem]'>
            A resourceful professional with about 13 years’ experience in
            business development, Credit training, customer service and
            product/service design. Over the years, she has demonstrated
            exceptional aptitude in assembling and leading high-performing
            teams, gain customer trust and sustain business relationships
            through excellent service delivery, leading to increased referrals,
            recommendations, and endorsements…
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-black text-white p-4'>
        {teams.map(({ name, img }, i) => {
          return (
            <div className='flex flex-col items-center' key={i}>
              {/* <img className='w-full' src={img} alt={name} /> */}
              <h2 className='text-center text-base my-2 font-medium'>{name}</h2>
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
          <div>
            <img
              src={manage}
              className='w-screen md:h-[580px] object-cover'
              alt='management'
            />
          </div>
          <div className='relative flex items-center justify-center rounded-full my-10 w-full md:w-96 h-[500px]  bg-blur bg-gradient-to-b  from-gray-500 to-green-900 m-4'>
            <img
              src={adewale}
              className='w-full md:w-96 h-[500px] object-cover rounded-full shadow-xl mix-blend-overlay'
              alt='adewale'
            />
            <h2 className='absolute text-center bottom-12 font-medium text-xl text-white'>
              Dayo Adewale
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-10 w-full'>
            {management.map(({ name, img }, i) => {
              return (
                <div
                  className='flex flex-col items-center bg-blur bg-gradient-to-b  from-gray-500 to-green-900 relative'
                  key={i}
                >
                  <img
                    className='w-full mix-blend-overlay h-96 md:h-64 object-cover'
                    src={img}
                    alt={name}
                  />
                  <h2 className='text-center text-sm my-2 font-medium absolute bottom-2 text-white'>
                    {name}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
