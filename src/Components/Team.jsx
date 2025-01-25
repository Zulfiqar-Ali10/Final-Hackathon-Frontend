import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Team() {
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
        Our Team
      </p>
      <h1 className="display-5 mb-5">Exclusive Team</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item">
          <img className="img-fluid rounded" src="img/team-1.jpg" alt="" />
          <div className="team-text">
            <h4 className="mb-0">Kate Winslet</h4>
            <div className="team-social d-flex">
              <a className="btn btn-square rounded-circle mx-1" href="">
               
                <FaFacebookF className="fab fa-facebook-f" />

              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
                
                <FaTwitter className="fab fa-twitter" />

              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
               
                <FaInstagram className="fab fa-instagram"/>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item">
          <img className="img-fluid rounded" src="img/team-2.jpg" alt="" />
          <div className="team-text">
            <h4 className="mb-0">Jac Jacson</h4>
            <div className="team-social d-flex">
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaFacebookF className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaTwitter className="fab fa-twitter" />
              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaInstagram className="fab fa-instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item">
          <img className="img-fluid rounded" src="img/team-3.jpg" alt="" />
          <div className="team-text">
            <h4 className="mb-0">Doris Jordan</h4>
            <div className="team-social d-flex">
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaFacebookF className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaTwitter className="fab fa-twitter" />
              </a>
              <a className="btn btn-square rounded-circle mx-1" href="">
              <FaInstagram className="fab fa-instagram"/>
              </a>
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
