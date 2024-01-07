import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerImage from "../assets/images/image2.png";

const Footer = () => {
  return (
    <div className="bg-amber-500 lg:px-28 md:px-16 px-2 lg:pb-20 md:pb-16 pb-12 grid grid-cols-12 gap-6 items-center justify-center">
      <div className="col-span-8 pl-16">
        <div className="relative flex items-center lg:mb-24 w-[90%]">
          <input
            type="search"
            className="lg:py-4 px-6 rounded-xl focus:outline-none w-full"
            placeholder="Enter Your Email"
          />
          <button className="absolute inset-y-0 right-0 m-2 flex gap-2 justify-center items-center bg-orange-500 px-4 py-2 rounded-xl text-white">
            Subscribe
            <FaArrowRightLong className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="lg:text-3xl text-2xl font-bold col-span-2">
              pti<span className="text-red-500">.</span>
            </p>
            <p className="font-semibold mt-3">
              Copyright©Tripp.All Right Reserved
            </p>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full text-orange-500 bg-orange-200 p-2">
              <FaGoogle />
            </div>
            <div className="rounded-full text-orange-500 bg-orange-200 p-2">
              <FaTwitter />
            </div>
            <div className="rounded-full text-orange-500 bg-orange-200 p-2">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 hidden lg:flex">
        <img src={footerImage} alt="" />
      </div>
    </div>
  );
};

export default Footer;
