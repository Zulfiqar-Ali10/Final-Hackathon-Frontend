
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <div className="container-fluid p-0 mb-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img className="w-100" src="/img/carousel-2.jpg" alt="Image 1" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3">
                    Welcome to Finanza
                  </p>
                  <h1 className="display-1 mb-4">
                    Your Financial Status Is Our Goal
                  </h1>
                  <a href="" className="btn btn-primary py-3 px-5">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img className="w-100" src="/img/carousel-2.jpg" alt="Image 2" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3">
                    Welcome to Finanza
                  </p>
                  <h1 className="display-1 mb-4">
                    True Financial Support For You
                  </h1>
                  <a href="" className="btn btn-primary py-3 px-5">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
