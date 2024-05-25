const Final = () => {
  return (
    <div className="bg-white ">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <div className="mt-2 mb-2 flex md:justify-start justify-center items-center">
                      <h1 className="text-3xl font-semibold">
                        Your journey starts here
                      </h1>
                    </div>
                    <div className="mt-2 mb-2">
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
                          href="/contact"
                          className="py-2 px-8 border-black border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition ease-in-out duration-1000"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F1F5F8] rounded-lg md:h-56 h-40">
                      <div className="pt-3 pb-3 h-[30%] flex justify-center items-end">
                        <h1 className="text-center text-xl font-semibold">
                          Start your journey
                        </h1>
                      </div>
                      <div className="md:pt-2 pt-1 md:pb-2 pb-1 px-2 h-[30%] flex justify-center items-start">
                        <p className="text-center md:text-base text-sm text-gray-800">
                          Get your hands on the product and test out Zuora for
                          free.
                        </p>
                      </div>
                      <div className="flex justify-center items-center h-[40%]">
                        <p className="text-sm font-semibold mb-4">
                          Learn More &#8594;
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#F1F5F8] rounded-lg md:h-56 h-40">
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
                        <p className="text-sm font-semibold mb-4">
                          Learn More &#8594;
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
    </div>
  );
};

export default Final;
