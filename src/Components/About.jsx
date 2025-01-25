import React from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import {  useLocation } from "react-router-dom";



export default function About() {
  const location = useLocation(); 
  const noBgImgRoutes = ["/"];
  return (
    <>
    <div className="container-xxl py-5" style={
     noBgImgRoutes.includes(location.pathname) ? {}
      :
     {marginTop: "150px", marginBottom: "100px" }
    }>
  <div className="container">
    <div className="row g-4 align-items-end mb-4">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <img className="img-fluid rounded" src="img/about.jpg" />
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
          About Us
        </p>
        <h1 className="display-5 mb-4">
          We Help Our Clients To Grow Their Business
        </h1>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="border rounded p-4">
          <nav>
            <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <button
                className="nav-link fw-semi-bold active"
                id="nav-story-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-story"
                type="button"
                role="tab"
                aria-controls="nav-story"
                aria-selected="true"
              >
                Story
              </button>
              <button
                className="nav-link fw-semi-bold"
                id="nav-mission-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-mission"
                type="button"
                role="tab"
                aria-controls="nav-mission"
                aria-selected="false"
              >
                Mission
              </button>
              <button
                className="nav-link fw-semi-bold"
                id="nav-vision-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-vision"
                type="button"
                role="tab"
                aria-controls="nav-vision"
                aria-selected="false"
              >
                Vision
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-story"
              role="tabpanel"
              aria-labelledby="nav-story-tab"
            >
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </p>
              <p className="mb-0">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-mission"
              role="tabpanel"
              aria-labelledby="nav-mission-tab"
            >
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </p>
              <p className="mb-0">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-vision"
              role="tabpanel"
              aria-labelledby="nav-vision-tab"
            >
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </p>
              <p className="mb-0">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-4">
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
          <div className="h-100">
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
            
                <HiOutlineXMark className="fa fa-times text-white"  />

              </div>
              <div className="ps-3">
                <h4>No Hidden Cost</h4>
                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
              </div>
              <div className="border-end d-none d-lg-block" />
            </div>
            <div className="border-bottom mt-4 d-block d-lg-none" />
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="h-100">
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                <FaUserFriends  className="fa fa-users text-white" />

              </div>
              <div className="ps-3">
                <h4>Dedicated Team</h4>
                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
              </div>
              <div className="border-end d-none d-lg-block" />
            </div>
            <div className="border-bottom mt-4 d-block d-lg-none" />
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100">
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                <FaPhone className="fa fa-phone text-white" />

              </div>
              <div className="ps-3">
                <h4>24/7 Available</h4>
                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
