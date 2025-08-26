"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Ujjwal Model School</h5>
            <p>
              Providing exceptional education since 2016. Committed to academic
              excellence, character development, and preparing students for success.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Programs</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Faculty</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">News</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white text-decoration-none">Admissions</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Calendar</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Parent Portal</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Library</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Newsletter</h6>
            <p>Subscribe to stay updated with school news and events.</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-top pt-3 mt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0">© 2025 Ujjwal Model School. All rights reserved.</p>
          <div>
            <Link href="#" className="text-white me-3">Privacy Policy</Link>
            <Link href="#" className="text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
