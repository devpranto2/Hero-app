import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import { addDataToDB, getAppData } from '../../Utility/AddToDB';

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();

    const singleAppDetail = data.find(app => app.id === appId);
    const { companyName, description, downloads, image, ratingAvg, ratings, reviews, size, title } = singleAppDetail;

    const convertToNumber = (value) => {
        if (value.includes("M")) return parseFloat(value) * 1000000;
        if (value.includes("K")) return parseFloat(value) * 1000;
        return Number(value);
    };
    useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    const chartData = ratings.map(r => ({
        name: r.name,
        count: convertToNumber(r.count),
    }));

    // State for installed
    const [installed, setInstalled] = useState(false);

    // Check localStorage on mount AND whenever localStorage changes
    const checkInstalled = () => {
        const installedIds = getAppData().map(id => Number(id));
        setInstalled(installedIds.includes(appId));
    };

    useEffect(() => {
        checkInstalled();

        // Listen to localStorage changes in case uninstall happens elsewhere
        const handleStorageChange = () => {
            checkInstalled();
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [appId]);

    const handleInstallBtn = (id) => {
        const success = addDataToDB(id);
        if (success) {
            toast.success(`${title} Installed!`);
            setInstalled(true);
        } else {
            toast('Already installed');
        }
    }

    return (
        <div className='bg-gray-200'>
            <div className='w-10/12 mx-auto'>
                <div className='md:flex p-10'>
                    <div className="flex-1">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content flex-3">
                        <div>
                            <h1 className='text-3xl font-semibold'>{title}</h1>
                            <p className='text-gray-500 text-lg font-semibold'>
                                Developed by <span className='text-purple-500'>{companyName}</span>
                            </p>
                            <h1 className='divider border-'></h1>
                        </div>
                        <div className='flex gap-8'>
                            <div className='md:mr-5'>
                                <MdOutlineFileDownload className='text-4xl text-green-500' />
                                <p className='text-[12px] md:text-[18px]'>Downloads</p>
                                <h2 className='text-4xl font-semibold'>{downloads}</h2>
                            </div>
                            <div className='md:mr-5'>
                                <IoStar className='text-4xl text-[#ff8811]' />
                                <p className='text-[12px] md:text-[18px]'>Average ratings</p>
                                <h2 className='text-4xl font-semibold'>{ratingAvg}</h2>
                            </div>
                            <div>
                                <MdFeedback className='text-4xl text-purple-500' />
                                <p className='text-[12px] md:text-[18px]'>Total Reviews</p>
                                <h2 className='text-4xl font-semibold'>{reviews}</h2>
                            </div>
                        </div>

                        <button
                            onClick={() => handleInstallBtn(appId)}
                            disabled={installed}
                            className={`mt-5 btn btn-xs p-6 text-lg sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white ${
                                installed ? "bg-green-400 cursor-not-allowed" : "bg-green-500"
                            }`}
                        >
                            {installed ? "Installed" : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Rating</h2>
                    <div className="h-60 md:h-80">
                        <ResponsiveContainer width="80%" height="80%">
                            <BarChart
                                data={chartData}
                                layout="vertical"
                                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
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
        </div>
    );
};

export default AppDetails;
