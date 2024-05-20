import React from "react";
import "./Header.css";
import images from "../images/pp.png.webp";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import About from "../components/About";

const Header = () => {
  return (
    <nav class="fixed w-full z-20 top-0 start-0">
      <div className=" bg-opacity-50">
        <div className=" items-center  max-auto flex justify-between ">
          <div className="flex">
            <div>
              <img className="object-contain h-30 w-75 ml-20" src={images} />
            </div>
            <div className="mt-10 mb-20 ml-10">
              <div className="bg-yellow-500 items-center p-5 ">
                <h1 className="">14-16 November 2024</h1>
                <h2>INDIA EXPO MART NOIDA</h2>
              </div>
            </div>
          </div>

          <IoIosMenu className="text-white  text-3xl md:hidden " />
          <ul className="ml-[5px] hidden md:flex  gap-5 mr-10">
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
            {/* <li>
              <Link className="text-orange-500 text-xl font-bold" to="/Visitor">
                Visitor
              </Link>
            </li> */}
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
    </nav>
  );
};

export default Header;
