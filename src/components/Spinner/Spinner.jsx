// src/components/Spinner.jsx
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <ClipLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default Spinner;
