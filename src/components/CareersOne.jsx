const CareersOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-2 mb-8 flex flex-col flex-wrap items-center animate-slidein [--slidein-delay:200ms] opacity-0">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Careers at Vahas Technologies
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500 md:block hidden"></div>
                  </div>
                </div>
                <div className="text-center pb-8 animate-slidein [--slidein-delay:400ms] opacity-0">
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
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 animate-slidein [--slidein-delay:600ms] opacity-0">
                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <img
                        src="https://www.zuora.com/wp-content/uploads/2023/02/icon-subscriber-obsessed.svg"
                        alt=""
                        className="w-20 h-20"
                      />
                    </div>
                    <div className="mt-6">
                      <h1 className="font-semibold text-xl">
                        Subscriber Obsessed
                      </h1>
                    </div>
                    <div className="mt-2">
                      <p className="text-center">
                        ZEOs put subscribers at the center of everything we do.
                        We strive to create an unparalleled experience for our
                        customers and enable them to do the same for theirs.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <img
                        src="https://www.zuora.com/wp-content/uploads/2023/02/icon-build-trust.svg"
                        alt=""
                        className="w-20 h-20"
                      />
                    </div>
                    <div className="mt-6">
                      <h1 className="font-semibold text-xl">Build Trust</h1>
                    </div>
                    <div className="mt-2">
                      <p className="text-center">
                        ZEOs know that trust must be cultivated. We actively
                        nurture partnerships and act with integrity,
                        transparency, and open communication.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <img
                        src="https://www.zuora.com/wp-content/uploads/2023/02/icon-better-together.svg"
                        alt=""
                        className="w-20 h-20"
                      />
                    </div>
                    <div className="mt-6">
                      <h1 className="font-semibold text-xl">Better Together</h1>
                    </div>
                    <div className="mt-2">
                      <p className="text-center">
                        ZEOs combine our individual powers to achieve the
                        impossible. We create inclusive cultures and build high
                        performing teams in pursuit of our shared purpose and
                        goals.
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

export default CareersOne;
