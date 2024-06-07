const CareersTwo = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8">
        <div className="w-full animate-slidein [--slidein-delay:1200ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[1400px] mx-auto space-y-4 ">
                <div className="mt-2 mb-4 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      #LifeAtVahasTechnologies
                    </h1>
                  </div>
                </div>
                <div className="text-center pb-4">
                  <p>
                    We’re building a people first culture, where every ZEO feels
                    valued and empowered to innovate, lead, and grow. That
                    includes being part of a supportive team, great benefits,
                    ongoing development and giving back to our communities.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href="/contact"
                    className="relative inline-flex items-center justify-center py-2 px-20 overflow-hidden font-semibold text-companyColor transition duration-1000 ease-out border-2 border-companyColor rounded-3xl group"
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
                      Learn more about us &#8594;
                    </span>
                    <span className="relative invisible">Button Text</span>
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

export default CareersTwo;
