import Globe from "../../public/globe.svg";
import Computer from "../../public/Computer.svg";
import Server from "../../public/Server.svg";
import Cloud from "../../public/Cloud.svg";
import Thunder from "../../public/Thunder.svg";
import Document from "../../public/Document.svg";

const Benefits = () => {
  return (
    <div className="bg-white ">
      <div className="relative pt-4 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
                      Core Key Benefits
                    </h1>
                    <div className="bg-[#2fe8d1] h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-8">
                  <div className="flex flex-col justify-center items-start ">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Globe} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            Offer a great booking experience
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start ">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Server} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            No double bookings
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Cloud} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            Scale your booking process
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start ">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Computer} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            Save development time
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Thunder} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            User Interface Element
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div>
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <img src={Document} alt="" className="w-11 h-11" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-medium">
                            Enable self-scheduling
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[#35393b]">
                          Send external invitees – candidates for example – a
                          booking link to let them book the time slot that works
                          best for them.
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

export default Benefits;
