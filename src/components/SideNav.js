import React, { useState } from 'react';

const Navbar = ({visible, setvisible}) => {
    const [isOpen, setIsOpen] = useState(visible);

    const toggleNavbar = () => {
        setvisible(!visible);
    };

    if(!visible ) return null
    return (
        <header className='text-center bg-black flex  h-screen sideNav'>
               <div className='font-bold text-lg w-4/5'>
               <ul>
                    <li className='p-10'><a href="#Home">Home</a></li>
                    <li className='p-4'><a href="#popular">Our Product</a></li>
                    <li className='p-4'><a href="#contact">Contact</a></li>
                    <li className='p-4'><a href="#Aboutus">About Us</a></li>
                    <li className='p-4'><a href="#Beapartner">Be a Partner</a></li>
                    <li className='p-4'><a href="#Ourteam">Our team</a></li>
                    
                </ul>
               </div>
               <div>
               <div className='p-2' onClick={toggleNavbar}>
               <img className='w-10 hamburger' src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" alt="" />
                </div>
               </div>
        </header>
    );
};

export default Navbar;
