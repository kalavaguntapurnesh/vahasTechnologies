import world from "../assets/world.svg";

const AboutTwo = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-4">
        <div className="w-full animate-slidein [--slidein-delay:400ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      About Vahas Technologies
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div>
                    <div className="flex flex-col flex-wrap">
                      <h1 className="uppercase text-2xl font-medium">
                        Vahas Technologies Private Limited.
                      </h1>
                      <div className="bg-[#2fe8d1] w-[10%] h-[2px] mt-1"></div>
                    </div>
                    <div className="mt-8">
                      <p>
                        Vahas Technologies are committed to your success with
                        Industry Standard IT solutions. We’re here to help you
                        throughout the entire solution lifecycle — from strategy
                        and consulting to implementation and management — with
                        unsurpassed depth of expertise and breadth of services
                        offerings to deliver real business results with
                        confidence.
                      </p>
                      <p className="mt-4">
                        Plan for success, and achieve better business agility
                        from strategy to execution with Project Portfolio
                        Management solutions from Vahas Technologies.
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
                          Collaborate with us &#8594;
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center md:mt-0 mt-4">
                    <img src={world} alt="" className="w-full" />
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

export default AboutTwo;
