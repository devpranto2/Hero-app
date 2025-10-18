import React from 'react';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    const links = <>

        <NavLink to={'/'}
        className={({isActive})=>isActive?"text-purple-700":"text-gray-500" }>
            <li className='mr-3 text-lg font-bold'>Home</li>
         </NavLink>
        <NavLink to={'/allapps'}
        className={({isActive})=>isActive?"text-purple-700":"text-gray-500" }>
            <li className='mr-3  text-lg font-bold'>Apps</li>
         </NavLink>
        <NavLink to={'/installation'}
        className={({isActive})=>isActive?"text-purple-700":"text-gray-500" }>
            <li className='mr-3  text-lg font-bold'>Installation</li>
         </NavLink>


    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start md:ml-7">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }

                    </ul>
                </div>
                <Link to={'/'}>
                    <div className='flex justify-center items-center '>
                        <img className='h-8 md:h-10' src={logo} alt="" />
                        <h1 className='md:text-2xl font-bold bg-gradient-to-r from-[#4B0082] to-[#9B30FF] bg-clip-text text-transparent'>HERO.IO</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end md:mr-7 flex">
                <a className="mg:p-6 btn bg-gradient-to-r from-[#4B0082] to-[#9B30FF] md:text-lg text-white" href='https://github.com/devpranto2'><FaGithub />Contribute</a>
                {/* <button className='btn'><a href=""><FaGithub />Contribute</a></button> */}
            </div>
        </div>
    );
};

export default Navbar;