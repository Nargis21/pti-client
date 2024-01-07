import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="bg-gray-100 lg:px-28 md:px-16 px-2 py-6 grid grid-cols-12 gap-2 items-center">
      <p className="lg:text-3xl text-2xl font-bold col-span-2">pti.</p>
      <div className="relative col-span-6">
        <input
          type="search"
          className="lg:py-3 py-2 px-6 rounded-lg pl-10 focus:outline-none w-full"
          placeholder="Search Audiobook"
        />
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <IoSearchOutline className="w-5 h-5 text-orange-500" />
        </button>
      </div>
      <div className="relative col-span-3">
        <button
          className="bg-white font-bold lg:py-3 py-2 px-4 rounded-lg inline-flex items-center"
          onClick={toggleDropdown}
        >
          MENU
          <span className="lg:ml-16 ml-8">
            <IoIosArrowDown className="text-orange-500 text-xl" />
          </span>
        </button>
        {isOpen && (
          <ul className="absolute bg-white shadow-md rounded-xl mt-2 py-3 text-base lg:w-44 md:w-40 w-36 overflow-auto z-50">
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              Home
            </li>
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              Details
            </li>
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              Category
            </li>
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              My Favorites
            </li>
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-gray-200 hover:font-semibold hover:text-orange-500 px-4 py-2 cursor-pointer">
              Log In/Sign Up
            </li>
          </ul>
        )}
      </div>

      <FaCircleUser className="text-orange-600 text-3xl hidden lg:flex md:flex items-end justify-end w-full col-span-1" />
    </div>
  );
};

export default Navbar;
