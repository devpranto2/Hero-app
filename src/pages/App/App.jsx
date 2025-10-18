import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
const App = ({ singleApp }) => {

    const {title,image,companyName,ratingAvg,description,downloads}=singleApp;
    console.log(singleApp)
    return (
        <div className="card bg-base-100 p-5 shadow-sm">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
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
    );
};

export default App;