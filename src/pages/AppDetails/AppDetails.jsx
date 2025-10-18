import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, } from "recharts";


const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id)
    const data = useLoaderData();
    console.log(data)

    const singleAppDetail = data.find(app => app.id === appId);
    console.log(singleAppDetail)
    const { companyName, description, downloads, image, ratingAvg, ratings, reviews, size, title } = singleAppDetail;


    const convertToNumber = (value) => {
        if (value.includes("M")) return parseFloat(value) * 1000000;
        if (value.includes("K")) return parseFloat(value) * 1000;
        return Number(value);
    };


    const chartData = ratings.map(r => ({
        name: r.name,
        count: convertToNumber(r.count),
    }));

    return (
        <div className='bg-gray-200'>
            <div className=' md:flex p-10'>
                <div className="flex-1">
                    <img src={image} alt="" />
                </div>
                <div className="content flex-3">
                    <div>
                        <h1 className='text-3xl font-semibold'>{title}</h1>
                        <p className='text-gray-500 text-lg font-semibold'>Developed by <span className='text-purple-500'>{companyName}</span></p>
                        <h1 className='divider border-'></h1>
                    </div>
                    <div className='flex gap-8'>
                        <div className='md:mr-5'>
                            <MdOutlineFileDownload className='text-4xl text-green-500' />
                            <p >Downloads</p>
                            <h2 className='text-4xl font-semibold'>{downloads}</h2>
                        </div>
                        <div className='md:mr-5'>
                            <IoStar className='text-4xl text-[#ff8811]' />
                            <p>Avarage ratings</p>
                            <h2 className='text-4xl font-semibold'>{ratingAvg}</h2>
                        </div>
                        <div>
                            <MdFeedback className='text-4xl text-purple-500' />
                            <p>Total Reviews</p>
                            <h2 className='text-4xl font-semibold'>{reviews}</h2>

                        </div>
                    </div>
                    <button className='btn text-lg mt-5 p-6 bg-green-500 text-white'>Install Now ({size} MB)</button>
                </div>
            </div>
            <div className=" p-6 ">
                <h2 className="text-2xl font-bold  text-center text-gray-700">Rating</h2>

                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" width={80} />
                            <Tooltip
                                formatter={(value) =>
                                    value >= 1000000
                                        ? `${(value / 1000000).toFixed(1)}M`
                                        : `${(value / 1000).toFixed(0)}K`
                                }
                            />
                            <Bar
                                dataKey="count"
                                fill="#fb923c"
                                barSize={25}
                                radius={[5, 5, 5, 5]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='p-6'>
                <h1 className='divider'></h1>
                <h1 className='text-3xl font-semibold'>Description</h1>
                <p className='mt-4 text-[19px] text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
