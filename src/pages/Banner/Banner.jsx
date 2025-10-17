import React from 'react';
import Appstoreicon from '../../assets/appstore.png'
import playstoreicon from '../../assets/playstore.png'
import heroImg from '../../assets/hero.png'
const Banner = () => {
    return (
        
        <div className=" bg-[#f5f5f5] p-10">
            <div className="w-9/12 mx-auto text-center">
                <div className="">
                    <h1 className="text-5xl font-bold mb-4">We Build <br />
                        <span className='bg-gradient-to-r from-[#8e0ceb] to-[#9b3bf5] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className="text-gray-500 font-semibold ">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    
                    <div className='md:space-x-3 mt-6 text-lg font-semibold'>
                        <a className='btn p-6' href="https://play.google.com/"><img src={playstoreicon} alt="" />Google Play</a>
                        <a className='btn p-6' href="https://www.apple.com/app-store/"><img src={Appstoreicon} alt="" />App Store</a>
                    </div>
                    <div className='mt-7'>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;