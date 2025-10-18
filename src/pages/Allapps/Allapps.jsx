import React from 'react';
import { useLoaderData } from 'react-router';
import Allapp from '../Allapp/Allapp';
import { useEffect } from "react";

const Allapps = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
    const data=useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center mt-10'>
                <h1 className='text-3xl font-semibold'>Our All Applications</h1>
                <p className='font-semibold text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='md:flex justify-center text-center space-y-3 md:space-y-0 md:justify-between mt-7 mb-6'>
                <h3 className='text-2xl font-semibold'>({data.length}) Apps found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                    data.map((singleAllApp=><Allapp key={singleAllApp.id} singleAllApp={singleAllApp}></Allapp>))
                    }
                </div>
        </div>
    );
};

export default Allapps;