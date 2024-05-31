import WorldMap from "../assets/Social.png";

const ComponentOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
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
                          className="py-2 px-10 border-black border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition ease-in-out duration-1000"
                        >
                          Explore about us &#8594;
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
