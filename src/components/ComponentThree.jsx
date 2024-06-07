const ComponentThree = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full animate-slidein [--slidein-delay:1000ms] opacity-0">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Wondering why are we the best?
                    </h1>
                    {/* <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500"></div> */}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out rounded-xl h-80">
                    <div className="flex justify-center items-center mt-4">
                      <img
                        src="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/equality.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <h1 className="font-medium text-2xl">
                        Software Development
                      </h1>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <p className="text-center text-gray-700">
                        Automated db optimization to ensure it’s always in
                        perfect shape. No setup required.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl h-80 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                    <div className="flex justify-center items-center mt-4">
                      <img
                        src="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/checklist.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <h1 className="font-medium text-2xl">
                        Code minification
                      </h1>
                    </div>
                    <div className="flex justify-center items-center mt-4 ">
                      <p className="text-center text-gray-700">
                        Automated db optimization to ensure it’s always in
                        perfect shape. No setup required.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl h-80 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                    <div className="flex justify-center items-center mt-4">
                      <img
                        src="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/code-minification.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <h1 className="font-medium text-2xl">
                        Monitoring Application Performance
                      </h1>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <p className="text-center text-gray-700">
                        Automated db optimization to ensure it’s always in
                        perfect shape. No setup required.
                      </p>
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

export default ComponentThree;
