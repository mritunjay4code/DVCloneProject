import React from "react";
import { Link } from "react-router-dom";

function SideWin({ OpenSide }) {
  return (
    <section className={`${OpenSide ? "block" : "hidden"}`}>
      <ul className=" h-[100vh] bg-[#3d241a74] float-end flex flex-col justify-center items-center gap-10 w-[50%] ">
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
        <li>
          <Link className=" text-orange-500 text-xl font-bold" to="/Exhibitor">
            Exhibitor Profile
          </Link>
        </li>
        <li>
          <Link className="text-orange-500 text-xl font-bold" to="/Exhibit">
            Exhibit
          </Link>
        </li>
        <li>
          <li>
            <Link className="text-orange-500 text-xl font-bold" to="/Visitor">
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
    </section>
  );
}

export default SideWin;
