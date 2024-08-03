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
      button: "Journey Starts here",
    },
    {
      image: Two,
      heading: "Vahas Technolgies Technical Support.",
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
      button: "Collaborate with us",
    },
  ];

  return (
    <div className="w-full bg-white lg:pt-16 pt-8 lg:h-[75vh] h-auto animate-slidein [--slidein-delay:500ms] opacity-0">
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
                // className="w-full lg:h-[550px] h-[450px] lg:object-cover object-center"
                className="w-full h-[500px] lg:object-cover object-center"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-center text-3xl font-bold animate-bounce delay-500 duration-1000">
                  {img.heading}
                </h2>
                <div className="mt-8">
                  <a
                    href="/careers"
                    className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-white transition duration-1000 ease-out border-2 border-black bg-black rounded-3xl group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease-in-out">
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
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                      Explore about us &#8594;
                    </span>
                    <span className="relative invisible">Button Text</span>
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
