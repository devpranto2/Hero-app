import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logo.png'
const Footer = () => {
    const whatsappNumber='01876692921';
    return (
        <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-[#a060ff] via-[#c99fff] to-[#a060ff] text-white p-10">

            <aside>
               <div className='flex justify-center items-center'>
                <img className='h-8 md:h-10' src={logo} alt="" />
                                    <h1 className='md:text-2xl font-bold bg-gradient-to-r from-[#4B0082] to-[#9B30FF] bg-clip-text text-transparent'>HERO.IO</h1>
               </div>
                <p className="font-bold text-lg text-purple-800">
                    Dabashis Roy Pranto
                    <br />
                    Connect for Developer
                </p>
                <p className='text-black'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href={`https://wa.me/${whatsappNumber}`} className='text-[#24cc65]'>
                        <FaWhatsappSquare />
                    </a >
                    <a className='text-[#4064ad]' href='https://www.facebook.com/share/177pApSVAX/'>
                       <FaFacebookSquare />
                    </a>
                    <a className='text-[#0173af]'>
                        <FaLinkedin />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;