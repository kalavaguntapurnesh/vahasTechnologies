const Final = () => {
  return (
    <div className="bg-white ">
      <div className="relative pt-8 pb-4">
        <div className="w-full animate-slidein [--slidein-delay:3000ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <div className="mt-2 mb-2 flex md:justify-start justify-center items-center">
                      <div className="flex flex-col flex-wrap">
                        <h1 className="text-3xl font-semibold">
                          Your journey starts here
                        </h1>
                        <div className="bg-[#2fe8d1] w-[30%] h-[2px] mt-1 ml-1 md:block hidden"></div>
                      </div>
                    </div>
                    <div className="mt-4 mb-2">
                      <p className="text-gray-800">
                        As your customers change how they want to access your
                        products and services, you have to evolve how you do
                        business. Learn more about how our leading Subscription
                        Economy® solutions have helped many of the world’s most
                        innovative subscription businesses succeed.
                      </p>
                    </div>
                    <div className="mt-4 mb-4">
                      <div className="flex flex-row md:justify-start justify-center">
                        <a
                          href="/careers"
                          className="relative inline-flex items-center justify-center py-2 px-10 overflow-hidden font-semibold text-companyColor transition duration-1000 ease-out border-2 border-companyColor rounded-3xl group"
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
                            Contact us &#8594;
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F1F5F8] rounded-lg md:h-56 h-40 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out cursor-pointer hover:scale-110">
                      <div className="pt-3 pb-3 h-[30%] flex justify-center items-end">
                        <h1 className="text-center text-xl font-semibold">
                          Start your journey
                        </h1>
                      </div>
                      <div className="md:pt-2 pt-1 md:pb-2 pb-1 px-2 h-[30%] flex justify-center items-start">
                        <p className="text-center md:text-base text-sm text-gray-800">
                          Get your hands on the product and test out Vahas for
                          free.
                        </p>
                      </div>
                      <div className="flex justify-center items-center h-[40%]">
                        <a
                          href="/careers"
                          className="text-sm font-semibold mb-4"
                        >
                          Learn More &#8594;
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#F1F5F8] rounded-lg md:h-56 h-40 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out cursor-pointer">
                      <div className="pt-3 pb-3 h-[30%] flex justify-center items-end">
                        <h1 className="text-center text-xl font-semibold">
                          Want to change?
                        </h1>
                      </div>
                      <div className="md:pt-2 pt-1 md:pb-2 pb-1 px-2 h-[30%] flex justify-center items-start">
                        <p className="text-center md:text-base text-sm text-gray-800">
                          Join our global team in the pursuit of transformation.
                        </p>
                      </div>
                      <div className="flex justify-center items-center h-[40%]">
                        <a
                          href="/products"
                          className="text-sm font-semibold mb-4"
                        >
                          Learn More &#8594;
                        </a>
                      </div>
                    </div>
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

export default Final;
