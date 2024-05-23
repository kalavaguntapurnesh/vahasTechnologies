import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed  md:z-20 z-20 bg-white">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full ">
          <div className="text-black flex justify-between md:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-24 w-full md:top-0 top-0 bg-white max-w-[1400px] mx-auto">
            <div className="flex justify-center items-center">
              <div className=" text-[30px] block ml-4">
                <h2 className="text-colorFour font-bold">VAHAS.</h2>
              </div>
            </div>

            <ul className="hidden md:flex md:pt-4 ">
              <li className="lg:p-4 group p-[11px] cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ">
                <a href="/">Home</a>
                <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ">
                <a href="/about">About Us</a>
                <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ">
                <a href="/about">Products</a>
                <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ">
                <a href="/solutions">Solutions</a>
                <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer font-medium">
                <a
                  href="/contact"
                  className="bg-colorFour hover:bg-colorFour transition ease-in-out duration-1000
        rounded-[4px] text-white px-8 py-2.5 text-center"
                >
                 Contact Us
                </a>
              </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <AiOutlineMenu size={30} className=" mr-4 mt-6" />
              ) : (
                <AiOutlineClose size={30} className=" mr-4 mt-6" />
              )}
            </div>

            <div
              className={
                !nav
                  ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                  : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[75%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              }
            >
              <h1 className="w-full text-2xl text-colorFour font-bold m-4 cursor-pointer">
                SYNDÈO.
              </h1>
              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about">About Us</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about">Products</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/solutions">Solutions</a>
                </li>

                <li className="p-4 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
