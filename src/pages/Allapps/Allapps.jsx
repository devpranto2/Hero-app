import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Allapp from '../Allapp/Allapp';
import { useEffect,useState } from "react";

const Allapps = () => {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    const data=useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

//
    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    //
    useEffect(() => {
        if (searchTerm && filteredApps.length === 0) {
            navigate("/appnotfound");
        }
    }, [searchTerm, filteredApps, navigate]);

    
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='text-center mt-10'>
                <h1 className='text-3xl font-semibold'>Our All Applications</h1>
                <p className='font-semibold text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='md:flex w-9/12 mx-auto justify-center text-center space-y-3 md:space-y-0 md:justify-between mt-7 mb-6'>
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
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Apps"
                        className="outline-none w-full"
                    />
                </label>
            </div>
            <div className='w-9/12 mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {filteredApps.map(singleAllApp => (
                    <Allapp key={singleAllApp.id} singleAllApp={singleAllApp} />
                ))}
            </div>
        </div>
    );
};

export default Allapps;