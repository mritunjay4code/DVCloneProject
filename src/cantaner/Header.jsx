import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import SideWin from "./SideWin";

const Header = () => {
  const [OpenSide, setOpenSide] = useState(false);
  return (
    <nav class="fixed  w-full z-20 top-0 start-0">
      <div className=" bg-opacity-50">
        <div className="items-center flex justify-between ">
          <div className="flex">
            <div>
              <img
                className="w-16 md:w-36 lg:w-72 ml-4 md:ml-20"
                src="./logo.webp"
              />
            </div>
            <div className="mt-10 md:mb-20 ml-10">
              <div className="bg-yellow-500 items-center p-5 hidden lg:block">
                <h1 className="">14-16 November 2024</h1>
                <h2>INDIA EXPO MART NOIDA</h2>
              </div>
            </div>
          </div>

          <IoIosMenu
            className="text-white mr-5 text-3xl md:text-[50px] lg:hidden"
            onClick={() => setOpenSide(!OpenSide)}
          />
          <ul className="ml-[5px] hidden lg:flex  gap-5 mr-10">
            <li>
              <Link className="text-orange-500 text-xl font-bold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-orange-500 text-xl font-bold" to="/About">
                About
              </Link>
            </li>
            <li class="dropdown">
              <Link className="text-orange-500 text-xl font-bold" to="">
                Exhibitor
              </Link>
              <li class="dropdown-content">
                <Link className=" text-justify text-[#5D504B]" to="/Exhibitor">
                  Exhibitor Profile
                </Link>
                <Link className=" text-justify text-[#5D504B]" to="/Exhibit">
                  Exhibit
                </Link>
              </li>
            </li>
            <li class="dropdown">
              <Link className="text-orange-500 text-xl font-bold" to="#">
                Visitor
              </Link>
              <li class="dropdown-content">
                <Link className=" text-justify text-[#5D504B]" to="/Visitor">
                  Visitor Profile
                </Link>
              </li>
            </li>
            <li>
              <Link className="text-orange-500 text-xl font-bold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SideWin OpenSide={OpenSide} />
    </nav>
  );
};

export default Header;
