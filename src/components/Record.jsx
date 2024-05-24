import TabLogo from "../../public/TabLogo.png";
import SNG from "../../public/SNG.png";
import CDN from "../../public/CDN.png";
import Dental from "../../public/Dental.png";

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
                  <div>
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
                  </div>
                  <div>
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

                <div className="pt-12">
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    <div className="flex justify-center items-center">
                      <img
                        src={TabLogo}
                        alt=""
                        className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={SNG}
                        alt=""
                        className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={Dental}
                        alt=""
                        className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={CDN}
                        alt=""
                        className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                      />
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

export default Record;
