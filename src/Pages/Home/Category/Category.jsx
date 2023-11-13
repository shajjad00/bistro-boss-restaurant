import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mb-20"
      >
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide1}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Salad</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide1}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Pizzas</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide2}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Pizzas</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide3}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Soup</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide4}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Deserts</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-xl mx-auto">
            <img
              className="h-64 w-full object-cover "
              src={slide5}
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-50 "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold mt-12">Deserts</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
