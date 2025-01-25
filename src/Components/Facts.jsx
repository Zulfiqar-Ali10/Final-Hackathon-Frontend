import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";





export default function Facts() {
  return (
    <>
    <div className="container-fluid facts my-5 py-5">
  <div className="container py-5">
    <div className="row g-5">
      <div
        className="col-sm-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.1s"
      >
        <i  />
        <FaUserFriends className="fa fa-users fa-3x text-white mb-3" style={{fontSize: "50px"}}/>

        <h1 className="display-4 text-white" data-toggle="counter-up">
          1234
        </h1>
        <span className="fs-5 text-white">Happy Clients</span>
        <hr className="bg-white w-25 mx-auto mb-0" />
      </div>
      <div
        className="col-sm-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.3s"
      >
        
        <FaCheck  className="fa fa-check fa-3x text-white mb-3" style={{fontSize: "50px"}}/>

        <h1 className="display-4 text-white" data-toggle="counter-up">
          1234
        </h1>
        <span className="fs-5 text-white">Projects Completed</span>
        <hr className="bg-white w-25 mx-auto mb-0" />
      </div>
      <div
        className="col-sm-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.5s"
      >
        
        <FaUsersCog  className="fa fa-users-cog fa-3x text-white mb-3" style={{fontSize: "50px"}} />

        <h1 className="display-4 text-white" data-toggle="counter-up">
          1234
        </h1>
        <span className="fs-5 text-white">Dedicated Staff</span>
        <hr className="bg-white w-25 mx-auto mb-0" />
      </div>
      <div
        className="col-sm-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.7s"
      >
        
        <GiAchievement className="fa fa-award fa-3x text-white mb-3"  style={{fontSize: "50px"}}/>

        <h1 className="display-4 text-white" data-toggle="counter-up">
          1234
        </h1>
        <span className="fs-5 text-white">Awards Achieved</span>
        <hr className="bg-white w-25 mx-auto mb-0" />
      </div>
    </div>
  </div>
</div>

    </>
  )
}
