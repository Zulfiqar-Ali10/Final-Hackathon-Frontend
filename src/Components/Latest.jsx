
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Latest() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Our Projects
            </p>
            <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
          </div>
          {/* Swiper Slider */}
          <Swiper
            // modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                  <img className="img-fluid rounded" src="/img/service-1.jpg" alt="Service 1" />
                  <a href="#">
                    <i className="fa fa-link fa-3x text-primary" />
                  </a>
                </div>
                <div className="project-title">
                  <h4 className="mb-0">Financial Planning</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                  <img className="img-fluid rounded" src="/img/service-2.jpg" alt="Service 2" />
                  <a href="#">
                    <i className="fa fa-link fa-3x text-primary" />
                  </a>
                </div>
                <div className="project-title">
                  <h4 className="mb-0">Cash Investment</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                  <img className="img-fluid rounded" src="/img/service-3.jpg" alt="Service 3" />
                  <a href="#">
                    <i className="fa fa-link fa-3x text-primary" />
                  </a>
                </div>
                <div className="project-title">
                  <h4 className="mb-0">Financial Consultancy</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                  <img className="img-fluid rounded" src="/img/service-4.jpg" alt="Service 4" />
                  <a href="#">
                    <i className="fa fa-link fa-3x text-primary" />
                  </a>
                </div>
                <div className="project-title">
                  <h4 className="mb-0">Business Loans</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
