

import React from 'react';
import { FaQuoteRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Clients() {
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
              Testimonial
            </p>
            <h1 className="display-5 mb-5">What Our Clients Say!</h1>
          </div>
          {/* Swiper Slider */}
          <Swiper
            // modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                  <div className="btn-square bg-white border rounded-circle">
                    
                    <FaQuoteRight className="fa fa-quote-right fa-2x text-primary"/>

                  </div>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                  dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                  tempor diam tempor erat.
                </div>
                <img
                  className="rounded-circle mb-3"
                  src="/img/testimonial-1.jpg"
                  alt="Client 1"
                />
                <h4>Client Name</h4>
                <span>Profession</span>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                  <div className="btn-square bg-white border rounded-circle">
                  <FaQuoteRight className="fa fa-quote-right fa-2x text-primary"/>
                  </div>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                  dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                  tempor diam tempor erat.
                </div>
                <img
                  className="rounded-circle mb-3"
                  src="/img/testimonial-2.jpg"
                  alt="Client 2"
                />
                <h4>Client Name</h4>
                <span>Profession</span>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                  <div className="btn-square bg-white border rounded-circle">
                  <FaQuoteRight className="fa fa-quote-right fa-2x text-primary"/>
                  </div>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                  dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                  tempor diam tempor erat.
                </div>
                <img
                  className="rounded-circle mb-3"
                  src="/img/testimonial-3.jpg"
                  alt="Client 3"
                />
                <h4>Client Name and name</h4>
                <span>Profession</span>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                  <div className="btn-square bg-white border rounded-circle">
                    <i className="fa fa-quote-right fa-2x text-primary" />
                  </div>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                  dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                  tempor diam tempor erat.
                </div>
                <img
                  className="rounded-circle mb-3"
                  src="/img/testimonial-4.jpg"
                  alt="Client 4"
                />
                <h4>Client Name</h4>
                <span>Profession</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
