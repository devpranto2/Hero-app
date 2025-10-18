import React from 'react';

const State = () => {
    return (
        <div className='bg-[#723ce7] p-9 text-white -mt-10 py-12'>
            <h1 className='text-center font-bold text-lg md:text-4xl'>Trusted by Millions, Built for You</h1>
            <div className='w-10/12 mx-auto mt-7 md:flex justify-between'>
                <div className='space-y-3 text-center'>
                    <p className='font-bold'>Total Downloads</p>
                    <h1 className='font-bold text-4xl'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-3 text-center '>
                    <p className='font-bold'>Total Reviews</p>
                    <h1 className='font-bold text-4xl'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className='space-y-3 text-center'>
                    <p className='font-bold'>Active Apps</p>
                    <h1 className='font-bold text-4xl'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default State;