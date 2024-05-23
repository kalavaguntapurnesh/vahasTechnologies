import TabLogo from "../../public/TabLogo.png";
import SNG from "../../public/SNG.png";
import CDN from "../../public/CDN.png";
import Dental from "../../public/Dental.png";

const AboutFour = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-4 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Our Valuable Clients
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={TabLogo}
                      alt=""
                      className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={SNG}
                      alt=""
                      className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={Dental}
                      alt=""
                      className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={CDN}
                      alt=""
                      className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
