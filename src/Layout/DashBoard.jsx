import { NavLink, Outlet } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";



const DashBoard = () => {
    return (
        <div>
             <div className="flex lg:flex-row flex-col lg:w-10/12 mx-auto">
      <div className="w-64 bg-[#0f9be0] text-white min-h-screen">
        <ul className="menu mt-6">

            <li>
                <NavLink to="/dashBoard/createT">
                <FaTasks />
                 Task
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashBoard/previous">
                <TbPlayerTrackPrev />
                Previous
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashBoard/logOut">
                <BiLogOut />
                Log Out
                </NavLink>
              </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>

        </div>
    );
};

export default DashBoard;