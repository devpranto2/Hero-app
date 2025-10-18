import React from "react";
import { Link } from "react-router";
import notfoundImg from '../../assets/App-Error.png'
const AppNotFound = () => {
    return (
        <div>
            <div className="flex flex-col mt-30 mb-20 items-center p-10 justify-center  text-center">
            <img
                src={notfoundImg}
                alt="No App Found"
                className="object-contain "
            />
            <p className="text-gray-500 text-lg md:text-4xl font-semibold ">
               OPPS!! APP NOT FOUND
            </p>
            <p className="mb-3 text-lg text-gray-500">The App you are requesting is not found on our system.  please try another apps</p>
            <Link
                to="/allapps"
                className="btn p-6 text-lg mt-4 mb-4 text-center bg-gradient-to-r from-[#4B0082] to-[#9B30FF] text-white"
            >
                Go Back
            </Link>
        </div>
        </div>
    );
};

export default AppNotFound;
