import React from "react";
import { Link, useLocation } from "react-router-dom";
import FASTCARR from "../assets/fastkar4.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="sticky flex border-b-[1px] border-neutral-700 font-sans font-[500] bg-[#112744] text-[15px] h-[100px]">
      <div className={`mt-4 ${location.pathname === "/"}`}>
        <Link to="/">
          <img src={FASTCARR} alt="logo" />
        </Link>
      </div>
      <div className="p-10 absolute right-0 text-neutral-200">
        <ul className="flex items-center justify-between font-semibold">
          <li className="ml-1">
            <Link
              to="/Vehicles-in-kenya"
              className={`hover:bg-[#c0ec60] hover:text-black p-4 rounded-md duration-300 ease-in-out ${
                location.pathname === "/Vehicles-in-kenya" &&
                "bg-[#c0ec60] text-black"
              }`}
            >
              Vehicles in Kenya
            </Link>
          </li>
          <li className="ml-1">
            <Link
              to="/inventory"
              className={`hover:bg-[#c0ec60] hover:text-black p-4 rounded-md duration-300 ease-in-out ${
                location.pathname === "/inventory" && "bg-[#c0ec60] text-black"
              }`}
            >
              International Inventory
            </Link>
          </li>
          <li className="ml-1">
            <Link
              to="/about"
              className={`hover:bg-[#c0ec60] hover:text-black p-4 rounded-md duration-300 ease-in-out ${
                location.pathname === "/about" && "bg-[#c0ec60] text-black"
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="ml-1">
            <Link
              to="/faq"
              className={`hover:bg-[#c0ec60] hover:text-black p-4  rounded-md duration-300 ease-in-out ${
                location.pathname === "/faq" && "bg-[#c0ec60] text-black"
              }`}
            >
              Frequently Asked Questions
            </Link>
          </li>
          <li className="ml-1">
            <Link
              to="/contact"
              className={`hover:bg-[#c0ec60] hover:text-black p-4 rounded-md duration-300 ease-in-out ${
                location.pathname === "/contact" && "bg-[#c0ec60] text-black"
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="ml-4">
            {currentUser ? (
              <Link to="/profile">
                <img
                  className="h-9 w-9 rounded-full object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              </Link>
            ) : (
              <Link
                to="/signup"
                className={`hover:bg-[#c0ec60] hover:text-black p-4 rounded-md duration-300 ease-in-out ${
                  location.pathname === "/signup" && "bg-[#c0ec60] text-black"
                }`}
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
