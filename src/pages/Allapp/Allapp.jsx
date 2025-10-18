import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const Allapp = ({ singleAllApp }) => {
    console.log(singleAllApp)
    const { title, image, ratingAvg, downloads,id } = singleAllApp;
    return (
        <Link to={`/appdetails/${id}`}>
            <div className=" bg-base-100 p-3 shadow-sm">
                <figure className="border-2 border-gray-200 rounded-2xl flex justify-center items-center p-4">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full max-w-sm object-cover"
                    />
                </figure>

                <div className=" items-center text-center">
                    <h2 className="text-lg font-semibold text-center p-1">{title}</h2>

                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1  justify-center items-center  text-green-500 font-semibold py-1 px-3 bg-green-50 rounded-lg">
                        <FiDownload /><h3>{downloads}</h3>
                    </div>
                    <div className="flex gap-1  justify-center items-center  text-[#ff8811] font-semibold py-1 px-3 bg-[#fff0e1] rounded-lg">
                        <FaStar /><h3>{ratingAvg}</h3>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Allapp;