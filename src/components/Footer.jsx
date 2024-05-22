import FooterLogo from "../../public/logos/FooterLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="text-base">
        <div className="w-full max-w-[1400px] px-4 py-12 mx-auto sm:px-6 lg:py-8 lg:px-8">
          <div className="pb-8 mb-8 border-b border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
              <div className="flex justify-center items-center md:col-span-1 col-span-2">
                <img
                  src={FooterLogo}
                  alt="Footer Logo"
                  className="w-32 h-32 md:mb-0 mb-8"
                />
              </div>

              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Services
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Customer Success
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Popular Blogs
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/login"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Log In to Syndèo
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Appointment Booking
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Developer Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Connect
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Vahas Careers
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/login"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Become Partner
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Sign Up Here
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Team & Company
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Company
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Why Vahas?
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      About Vahas
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/login"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Contact Us
                </h4>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  <a href="/about">
                    <FaLinkedin
                      size={25}
                      className="cursor-pointer"
                      color="white"
                    />
                  </a>
                  <a href="/about">
                    <FaFacebook
                      size={25}
                      className="cursor-pointer"
                      color="white"
                    />
                  </a>
                  <a href="/about">
                    <FaInstagram
                      size={25}
                      className="cursor-pointer"
                      color="white"
                    />
                  </a>
                  <a href="/about">
                    <FaXTwitter
                      size={25}
                      className="cursor-pointer"
                      color="white"
                    />
                  </a>
                  <a href="/about">
                    <FaDiscord
                      size={25}
                      className="cursor-pointer"
                      color="white"
                    />
                  </a>
                </div>
                <div className="mt-8">
                  <form action="">
                    <div className="mt-4 flex flex-col justify-center items-center">
                      <div className=" flex justify-center items-center w-full">
                        <input
                          type="email"
                          name="email"
                          required
                          className=" appearance-none flex md:w-11/12 w-full border border-transparent px-5 py-2 text-base leading-6 rounded-md text-gray-400 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-2 mb-2 rounded-md flex md:w-11/12 w-full justify-center items-center">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center px-5 py-2 text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-colorFour focus:outline-none focus:bg-green-200 transition duration-1000 ease-in-out"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:mt-0 mt-4">
            <p className="md:text-sm text-xs text-black">
              Copyright © 2024 Vahas Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
