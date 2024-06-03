// import Lottie from "lottie-react";
// import HeaderLottie from "../assets/lotties/Header.json";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import One from "../../public/One.jpeg";
import Two from "../../public/Two.jpeg";
import Three from "../../public/Three.webp";
import Four from "../../public/Four.webp";

const Hero = () => {
  const data = [
    {
      image: One,
      heading: "IT Software Solution & Support.",
      button: "Collaborate with us",
    },
    {
      image: Two,
      heading: "Vahas Technolgies Support.",
      button: "Explore with us",
    },
    {
      image: Three,
      heading: "Solid battle tested Infrastructure.",
      button: "Make a better future",
    },
    {
      image: Four,
      heading: "Better User Interface Structure.",
      button: "Journey Starts here",
    },
  ];

  return (
    <div className="w-full bg-white lg:pt-16 pt-8 lg:h-[75vh] h-auto">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
      >
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={img.image}
                alt={`slide-${index + 1}`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-center text-3xl font-bold animate-bounce delay-500 duration-1000">
                  {img.heading}
                </h2>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="py-2 px-10 border-black border-2 rounded-3xl font-semibold bg-black text-white transition ease-in-out duration-1000"
                  >
                    {img.button} &#8594;
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
