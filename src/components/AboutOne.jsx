const AboutOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-28 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-2 mb-8 flex flex-col flex-wrap items-center">
                  <div className=" max-w-[800px]">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Our core values guide and enable our company to deliver
                      our shared mission as one team.
                    </h1>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
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

export default AboutOne;
