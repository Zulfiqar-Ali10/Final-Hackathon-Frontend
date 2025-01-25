import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




export default function Footer() {
  return (
    <>
    <div
  className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Our Office</h4>
        <p className="mb-2">
          
          <FaLocationDot className="fa fa-map-marker-alt me-3" />

          123 Street, New York, USA
        </p>
        <p className="mb-2">
       
          <FaPhoneAlt className="fa fa-phone-alt me-3" />

          +012 345 67890
        </p>
        <p className="mb-2">
         
          <RiMessage2Fill  className="fa fa-envelope me-3"/>

          info@example.com
        </p>
        <div className="d-flex pt-2">
          <a
            className="btn btn-square btn-outline-light rounded-circle me-2"
            href=""
          >
            <FaTwitter className="fab fa-twitter" />

          </a>
          <a
            className="btn btn-square btn-outline-light rounded-circle me-2"
            href=""
          >
            <FaFacebookF className="fab fa-facebook-f"/>

          </a>
          <a
            className="btn btn-square btn-outline-light rounded-circle me-2"
            href=""
          >
            
            <FaYoutube className="fab fa-youtube" />

          </a>
          <a
            className="btn btn-square btn-outline-light rounded-circle me-2"
            href=""
          >
          
            <FaLinkedinIn className="fab fa-linkedin-in"  />

          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Services</h4>
        <a className="btn btn-link" href="">
          Financial Planning
        </a>
        <a className="btn btn-link" href="">
          Cash Investment
        </a>
        <a className="btn btn-link" href="">
          Financial Consultancy
        </a>
        <a className="btn btn-link" href="">
          Business Loans
        </a>
        <a className="btn btn-link" href="">
          Business Analysis
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Quick Links</h4>
        <a className="btn btn-link" href="">
          About Us
        </a>
        <a className="btn btn-link" href="">
          Contact Us
        </a>
        <a className="btn btn-link" href="">
          Our Services
        </a>
        <a className="btn btn-link" href="">
          Terms &amp; Condition
        </a>
        <a className="btn btn-link" href="">
          Support
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative w-100">
          <input
            className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
