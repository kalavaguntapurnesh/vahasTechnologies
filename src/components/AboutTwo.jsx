import One from "../../public/One.jpg";

const AboutTwo = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="relative pt-4 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <div className="flex flex-col flex-wrap">
                      <h1 className="uppercase text-2xl font-medium">
                        Vahas Technologies Private Limited.
                      </h1>
                      <div className="bg-[#2fe8d1] w-[10%] h-[2px] mt-1"></div>
                    </div>
                    <div className="mt-8">
                      <p>
                        Vahas Technologies are committed to your success with
                        Industry Standard IT solutions. We’re here to help you
                        throughout the entire solution lifecycle — from strategy
                        and consulting to implementation and management — with
                        unsurpassed depth of expertise and breadth of services
                        offerings to deliver real business results with
                        confidence.
                      </p>
                      <p className="mt-4">
                        Plan for success, and achieve better business agility
                        from strategy to execution with Project Portfolio
                        Management solutions from Noetic IT Solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={One}
                      alt=""
                      className="lg:w-10/12 w-11/12 lg:h-80 h-92 rounded-sm"
                    />
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

export default AboutTwo;
