"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Contact Us</h1>
        <p className="lead">We’d love to hear from you. Reach out to us anytime!</p>
      </div>

      {/* Contact Info + Form */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <h3>Get in Touch</h3>
            <p>
              Have questions or want to know more about our school?  
              Feel free to contact us via phone, email, or visit us directly.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                Kadipur-Harikesh, Mehmauni Road, Kaptanganj, Azamgarh, Uttar Pradesh 276141
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                +91 9695918171
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                info@yourschool.com
              </li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-primary fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-primary fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-primary fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-primary fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <h3>Send Us a Message</h3>
            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container-fluid px-0">
        <iframe
          src="https://www.google.com/maps?q=Ujjwal%20Model%20School,%20Kadipur-Harikesh,%20Mehmauni%20Road,%20Kaptanganj,%20Azamgarh,%20Uttar%20Pradesh%20276141&output=embed"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

