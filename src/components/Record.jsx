const Record = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1300px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[1300px] mx-auto space-y-4 ">
                <div className="mt-2 mb-8 flex flex-col flex-wrap items-center">
                  <div className=" max-w-[800px]">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Zuora’s Subscription Economy® billing software. Trusted
                      for over 15 years.
                    </h1>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8">
                  <div className="relative">
                    <div className="flex flex-col">
                      <div className="flex md:justify-start justify-center items-center">
                        <h1 className="md:text-6xl text-5xl font-bold">$96B</h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                        <h1 className="text-xl font-medium">
                          Processed Per Year
                        </h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center">
                        <p className="mt-4 text-gray-600">
                          $96 billion in invoices processed through Zuora
                          Billing last year alone
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-0 bg-[#2fe8d1] top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col">
                      <div className="flex md:justify-start justify-center items-center">
                        <h1 className="md:text-6xl text-5xl font-bold">
                          Leader
                        </h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                        <h1 className="text-xl font-medium">
                          In IDC MarketScape
                        </h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center">
                        <p className="mt-4 text-gray-600">
                          $96 billion in invoices processed through Zuora
                          Billing last year alone
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-0 bg-[#2fe8d1] top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <div className="flex md:justify-start justify-center items-center">
                        <h1 className="md:text-6xl text-5xl font-bold">50%+</h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                        <h1 className="text-xl font-medium">
                          Customers Offering Hybrid Pricing
                        </h1>
                      </div>
                      <div className="flex md:justify-start justify-center items-center">
                        <p className="mt-4 text-gray-600">
                          $96 billion in invoices processed through Zuora
                          Billing last year alone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-8">
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
                      Make a better future &#8594;
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

export default Record;
