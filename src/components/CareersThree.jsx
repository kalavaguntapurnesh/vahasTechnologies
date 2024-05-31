import CareersOne from "../assets/CareersOne.jpg";
import CareersTwo from "../assets/CareersTwo.jpg";
import CareersThreeImage from "../assets/CareersThree.jpg";

const CareersThree = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-4 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1200px]">
            <div className="justify-center w-full pb-8">
              <div className="w-full max-w-[1200px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-6">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://marvel-b1-cdn.bc0a.com/f00000000004333/www.zuora.com/wp-content/uploads/2021/08/Holi.jpg"
                      alt=""
                      className="rounded-full w-80 h-80"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={CareersTwo}
                      alt=""
                      className="rounded-full w-80 h-80"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={CareersThreeImage}
                      alt=""
                      className="rounded-full w-80 h-80"
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

export default CareersThree;
