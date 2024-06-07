import { FaSatelliteDish } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import Lottie from "lottie-react";
import Globe from "../../public/lotties/Globe.json";

const Working = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full animate-slidein [--slidein-delay:1600ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="md:mt-6">
                    <div>
                      <div className="mt-2 flex md:justify-start justify-center">
                        <p className="text-sm font-medium">
                          THE JOURNEY TO USERSHIP
                        </p>
                      </div>
                      <div className="mt-3 mb-2 flex md:justify-start justify-center">
                        <div className="flex flex-col flex-wrap">
                          <h1 className="text-3xl font-semibold">
                            Solid, battle-tested infrastructure
                          </h1>
                          <div className="bg-[#2fe8d1] w-[30%] h-[2px] mt-1 ml-1 md:block hidden"></div>
                        </div>
                      </div>
                      <div className="mt-6 mb-2 flex md:justify-start justify-center">
                        <p className="text-gray-700">
                          As your customers change how they access your products
                          and services, you have to evolve how you do business.
                          We call this The Journey to Usership™, and it’s our
                          playbook of expertise and resources that has helped
                          subscription businesses succeed worldwide.
                        </p>
                      </div>

                      <div className="flex md:justify-start justify-center flex-col mt-8">
                        <div className=" mb-4">
                          <div className="grid grid-cols-4 ">
                            <div className="flex justify-center items-center col-span-1">
                              <FaNetworkWired className="w-8 h-8" />
                            </div>
                            <div className="col-span-3">
                              <div>
                                <h1 className="font-medium text-2xl">
                                  Premium Global Cloud
                                </h1>
                              </div>
                              <p className="mt-2">Powered by Kubernetes</p>
                            </div>
                          </div>
                        </div>
                        <div className=" mb-4">
                          <div className="grid grid-cols-4">
                            <div className="flex justify-center items-center col-span-1">
                              <MdOutlineSecurity className="w-8 h-8" />
                            </div>
                            <div className="col-span-3">
                              <div>
                                <h1 className="font-medium text-2xl">
                                  Enterprise-Grade Security
                                </h1>
                              </div>
                              <p className="mt-2">Powered by Norton Security</p>
                            </div>
                          </div>
                        </div>
                        <div className=" mb-4">
                          <div className="grid grid-cols-4">
                            <div className="flex justify-center items-center col-span-1">
                              <FaCloudDownloadAlt className="w-8 h-8" />
                            </div>
                            <div className="col-span-3">
                              <div>
                                <h1 className="font-medium text-2xl">
                                  Containerized and Automated
                                </h1>
                              </div>
                              <p className="mt-2">Powered by Google Cloud</p>
                            </div>
                          </div>
                        </div>
                        <div className=" mb-4">
                          <div className="grid grid-cols-4">
                            <div className="flex justify-center items-center col-span-1">
                              <FaSatelliteDish className="w-8 h-8" />
                            </div>
                            <div className="col-span-3">
                              <div>
                                <h1 className="font-medium text-2xl">
                                  Premium Global Cloud
                                </h1>
                              </div>
                              <p className="mt-2">Powered by Kubernetes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 
                      <div className="pt-8 flex md:justify-start justify-center">
                        <a
                          href="/careers"
                          className="py-2 px-10 border-black border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition ease-in-out duration-1000"
                        >
                          Explore about us &#8594;
                        </a>
                      </div> */}
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <Lottie
                      animationData={Globe}
                      loop={true}
                      className="w-full h-3/4 "
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

export default Working;
