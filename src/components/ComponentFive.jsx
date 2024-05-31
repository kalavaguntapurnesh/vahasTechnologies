const ComponentFive = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-2 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Our Products
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500 md:block hidden"></div>
                  </div>
                </div>
                <div className="text-center pb-8">
                  <p>
                    At Vahas Technologies, We focus on quickly teaching you
                    real-world IT skills you can use immediately. Seasoned
                    experts and constantly updated courseware combine with
                    real-world lab exercises to challenge your understanding of
                    the technology. We don't rely on mindless click-to-complete
                    labs or rote memorization. Our labs present you with real
                    problems you'll be faced with on the job. They incorporate
                    real variables and challenge your problem solving
                    capabilities. You get the most realistic experience possible
                    so you'll be ready to tackle similar issues back at the
                    office.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl h-80">
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
                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl h-80">
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

                  <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl h-80">
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

export default ComponentFive;
