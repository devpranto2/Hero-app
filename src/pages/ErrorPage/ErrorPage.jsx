import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
const ErrorPage = () => {
    return (
        
            <div>
                <Navbar></Navbar>
                <div className="flex flex-col items-center justify-center  text-center px-4 pt-35 pb-20 ">
                    <img className="h-48 md:h-90 lg:h-120 mb-6" src={errorImg} alt="Error" />
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Oops, page not found!</h1>
                    <p className="text-gray-600 mb-6">The page you are looking for is not available.</p>
                    <Link to={'/'}>
                        <button className="bg-gradient-to-r from-[#4B0082] to-[#9B30FF]  text-white px-8 py-4 text-lg rounded transition">
                        Go Back
                    </button>
                    </Link>
                </div>
                <Footer></Footer>

            </div>
        
    );
};

export default ErrorPage;