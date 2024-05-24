import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const CareersFour = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1200px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[1200px] mx-auto space-y-4 ">
                <div className="mt-2 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Connect with us
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 pt-8">
                  <a href="/about" className="flex justify-center items-center">
                    <FaLinkedin
                      size={36}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaFacebook
                      size={36}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaInstagram
                      size={36}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaXTwitter
                      size={36}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaYoutube
                      size={36}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersFour;
