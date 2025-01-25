
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";
import { TbClockHour4Filled } from "react-icons/tb";
import { useLocation } from "react-router-dom";

export default function Contact() {
    const location = useLocation(); 
    const noBgImgRoutes = ["/"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input changes and set values in state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      formIsValid = false;
      formErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      formIsValid = false;
      formErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      formIsValid = false;
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      formErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      formIsValid = false;
      formErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{1,3}?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,4}$/.test(formData.phone)) {
      formIsValid = false;
      formErrors.phone = "Phone number is invalid";
    }

    if (!formData.subject) {
      formIsValid = false;
      formErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      formIsValid = false;
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Add your form submission logic here
    } else {
      alert("Please fix the errors before submitting the form.");
    }
  };

  return (
    <>
      <section className="contact-section" style={
     noBgImgRoutes.includes(location.pathname) ? {}
      :
     {marginTop: "150px" }
    }>
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>
              Get in touch with our expert team for professional financial guidance
              and support.
            </p>
          </div>
          <div className="contact-info">
            {/* Location Box */}
            <div className="info-box">
              <div className="icon">
                <FaFacebookF className="fas fa-map-marker-alt" />
              </div>
              <h3>Our Location</h3>
              <p>123 Finance Street, New York, NY 10001</p>
            </div>
            {/* Phone Box */}
            <div className="info-box">
              <div className="icon">
                <FaPhoneAlt className="fas fa-phone-alt" />
              </div>
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 765-4321</p>
            </div>
            {/* Email Box */}
            <div className="info-box">
              <div className="icon">
                <BiSolidMessageDots className="fas fa-envelope" />
              </div>
              <h3>Email Address</h3>
              <p>info@financehub.com</p>
              <p>support@financehub.com</p>
            </div>
            {/* Hours Box */}
            <div className="info-box">
              <div className="icon">
                <TbClockHour4Filled className="fas fa-clock" />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00AM - 6:00PM</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
          <div className="contact-form">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
