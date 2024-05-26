import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logos/FooterLogo.png";

const OriNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" md:z-20 z-20 fixed w-full bg-white">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div className="text-black flex justify-between items-center md:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-[94px] w-full md:top-0 top-0 bg-white max-w-[1400px] mx-auto">
            {/* <nav className="flex justify-between items-center w-full mx-auto "> */}
            <div className=" ml-2">
              <img src={Logo} className="w-[86px]" alt="" />
              {/* <div className=" text-[30px] block">
                <h2 className="text-colorFour font-bold">VAHAS.</h2>
              </div> */}
            </div>
            <div className="lg:ml-12">
              <ul className="hidden md:flex items-center lg:gap-[4vw] gap-[3vw]">
                {" "}
                <li className="group cursor-pointer text-colorThree font-medium lg:text-base text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="#">Home</a>
                  <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium lg:text-base text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="#">About Us</a>
                  <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium lg:text-base text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a className="hover:text-gray-500 " href="#">
                    Products
                  </a>
                  <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium lg:text-base text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="#">Solutions</a>
                  <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium lg:text-base text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="#">Careers</a>
                  <div className="bg-colorFour h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </ul>
            </div>

            <div className="md:block hidden mr-6">
              <a
                href="/contact"
                className="py-2 px-8 border-[#2fe8d1] hover:border-black border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition ease-in-out duration-1000"
              >
                Contact Us
              </a>
            </div>
            {/* </nav> */}

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <AiOutlineMenu size={30} className=" mr-4 " />
              ) : (
                <AiOutlineClose size={30} className=" mr-4" />
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
                VAHAS.
              </h1>
              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about">About Us</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/careers">Careers</a>
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

export default OriNavbar;
