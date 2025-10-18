import React, { Suspense } from 'react';
import App from '../App/App';

const Apps = ({data}) => {
    // const [data,setdata]=useState([]);

    // useEffect(()=>{
    //     fetch('/appData1.json')
    //     .then(res=>res.json())
    //       .then(data => setdata(data));
        
    // },[])
    return (
        <div className='bg-gray-100 pt-10'>
            <div className='text-center mt-10'>
                <h2 className='text-3xl font-bold'>Trending Apps </h2>
                <p className='md:font-semibold text-gray-500 p-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<span>Loading</span>} >
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 w-11/12 mx-auto'>
                    {
                    data.map((singleApp=><App key={singleApp.id} singleApp={singleApp}></App>))
                }
                </div>
            </Suspense>
            <div className='text-center'>
                <button className='btn mt-4 mb-4 text-center bg-gradient-to-r from-[#4B0082] to-[#9B30FF] text-white'>Show All</button>
            </div>
        </div>
    );
};

export default Apps;