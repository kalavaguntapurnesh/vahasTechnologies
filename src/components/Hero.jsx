// import Lottie from "lottie-react";
// import HeaderLottie from "../assets/lotties/Header.json";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";

const Hero = () => {
  const images = [
    "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  return (
    <div className="w-full bg-white lg:pt-16 pt-8 lg:h-[75vh] h-auto">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-center text-3xl font-bold">
                  Upgrade with technological support.
                </h2>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="py-2 px-10 border-black border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition ease-in-out duration-1000"
                  >
                    Collaborate with us &#8594;
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
