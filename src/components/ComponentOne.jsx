import WorldMap from "../assets/Social.png";

const ComponentOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full animate-slidein [--slidein-delay:1000ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="md:mt-6">
                    <div>
                      <div className="mt-2 flex md:justify-start justify-center">
                        <p className="text-sm font-medium">
                          THE JOURNEY TO SUCCESS
                        </p>
                      </div>
                      <div className="mt-3 mb-2 flex md:justify-start justify-center">
                        <div className="flex flex-col flex-wrap">
                          <h1 className="text-3xl font-semibold">
                            Vahas Technologies is obsessed with better
                            performance
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

                      <div className="pt-8 flex md:justify-start justify-center">
                        <a
                          href="/careers"
                          className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-companyColor transition duration-1000 ease-out border-2 border-companyColor rounded-3xl group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-companyColor group-hover:translate-x-0 ease-in-out">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-companyColor transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                            Explore about us &#8594;
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={WorldMap} alt="" className="w-full" />
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

export default ComponentOne;
