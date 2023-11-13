import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <nav className="bg-[#0F0F0F] fixed mb-5 bg-opacity-40 w-full z-30 flex justify-between">
        <div className="flex justify-center items-center">
          <div
            className="flex lg:hidden pl-3 mr-4 text-3xl text-white cursor-pointer "
            onClick={() => setIsClicked(!isClicked)}
          >
            {isClicked ? <CgMenuLeftAlt></CgMenuLeftAlt> : <BiMenu></BiMenu>}
          </div>
          <p className=" text-white text-2xl font-bold pl-2">
            BISTRO BOSS <br />
            <span className=" text-lg tracking-[6px]">Restaurant</span>
          </p>
        </div>
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="flex gap-8 justify-center items-center mr-5 text-white">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Dashboard</Link>
            </li>
            <li>
              <Link>Our Menu</Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link>Our Shop</Link>
              <FaShoppingCart></FaShoppingCart>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link>Sign Out</Link>
              <BsPersonCircle className="text-xl text-green-700"></BsPersonCircle>
            </li>
          </ul>
        </div>
        <div
          style={{ display: isClicked ? "block" : "none" }}
          className="  absolute top-16 bg-[#0F0F0F] lg:hidden bg-opacity-40 flex z-20 justify-center items-center"
        >
          <ul className="flex flex-col gap-1 justify-center items-center mr-5 text-white">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Dashboard</Link>
            </li>
            <li>
              <Link>Our Menu</Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link>Our Shop</Link>
              <FaShoppingCart></FaShoppingCart>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link>Sign Out</Link>
              <BsPersonCircle className="text-xl text-green-700"></BsPersonCircle>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
