import React, { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import toast from 'react-hot-toast';
import { getAppData, removeDataFromDB } from '../../Utility/AddToDB';
import { useLoaderData } from 'react-router';

const InstalledApps = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const installedIds = getAppData().map(id => Number(id));
        const matchedApps = allApps.filter(app => installedIds.includes(app.id));
        setInstalledApps(matchedApps);
    }, [allApps]);

    const parseDownloads = (str) => {
        if (!str) return 0;
        const value = parseFloat(str.replace(/[^0-9.]/g, ""));
        if (str.toUpperCase().includes("M")) return value * 1_000_000;
        if (str.toUpperCase().includes("K")) return value * 1_000;
        return value;
    };

    useEffect(() => {
        if (!sortOrder) return;
        setInstalledApps(prev => {
            const sorted = [...prev].sort((a, b) => {
                const aVal = parseDownloads(a.downloads);
                const bVal = parseDownloads(b.downloads);
                return sortOrder === "desc" ? bVal - aVal : aVal - bVal;
            });
            return sorted;
        });
    }, [sortOrder]);

    const handleUninstall = (id) => {
        removeDataFromDB(id);
        setInstalledApps(prev => prev.filter(app => app.id !== id));
        toast.success("App uninstalled successfully!");
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div className="w-11/12 sm:w-9/12 mx-auto mt-12 mb-12">
            <h1 className="text-center text-4xl sm:text-5xl font-semibold">Your Installed Apps</h1>
            <p className="text-center font-semibold mt-2">
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-7 gap-4 sm:gap-0">
                <h1 className="text-2xl font-semibold">
                    Apps Found ({installedApps.length})
                </h1>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg flex items-center justify-between">
                        Sort by Downloads <span className="ml-2"><MdArrowDropDown /></span>
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-lg font-semibold">
                        <li><a onClick={() => setSortOrder('desc')}>Low-High</a></li>
                        <li><a onClick={() => setSortOrder('asc')}>High-Low</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-full mx-auto gap-5 mt-6 mb-90 flex flex-col">
                {installedApps.length === 0 ? (
                    <p className="text-center text-gray-500 text-2xl font-semibold">No apps installed yet.</p>
                ) : (
                    installedApps.map(app => {
                        const { id, title, image, downloads, ratingAvg } = app;
                        return (
                            <div key={id} className="bg-white rounded-2xl shadow-md p-3 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6">
                                <img src={image} alt={title} className="h-20 w-20 object-contain rounded-lg" />
                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                    <div className="flex justify-center sm:justify-start items-center gap-4 mt-1 text-gray-500">
                                        <div className="flex text-xl items-center gap-1">
                                            <MdOutlineFileDownload className="text-green-500" />
                                            <span>{downloads}</span>
                                        </div>
                                        <div className="flex text-xl items-center gap-1">
                                            <IoStar className="text-yellow-400" />
                                            <span>{ratingAvg}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleUninstall(id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg mt-2 sm:mt-0"
                                >
                                    Uninstall
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default InstalledApps;
