import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
           <div className="bg-[url('https://i.ibb.co/GpF5BDF/banner.jpg')] flex justify-center items-center bg-cover w-full h-[38em]">
          <Link to="/dashBoard">
          <button className="btn btn-info">Explore More</button>
          </Link>
           </div>
        </div>
    );
};

export default Banner;