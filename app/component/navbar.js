"use client"; // ✅ Required for Next.js App Router

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* 🔹 Topbar */}
      <div className="bg-primary text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left side - Links */}
          <div className="d-flex gap-3">
             <Link href="/admin/admin-login" className="text-white text-decoration-none border-end pe-2">
              Admin Login
            </Link>
            <Link href="/staff-login" className="text-white text-decoration-none border-end pe-2">
              Staffs Login
            </Link>
            <Link href="/student-login" className="text-white text-decoration-none border-end pe-2">
              Students Login
            </Link>
           
            <Link href="/contact" className="text-white text-decoration-none">
              Contact Us
            </Link>
          </div>

          {/* Right side - Social Media */}
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/share/g/1DFFVxuRv8/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@wayofsuccessfullyourlife?si=jue8xda22rtDfEm5" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Live Updates Section */}
      <div className="bg-warning text-dark py-2 overflow-hidden">
        <div className="ticker d-flex">
          <p className="m-0 fw-bold">
            🎉 Admission Open 2025 | 🏆 100% Result in Board Exams | ✨ Annual Day Celebration Next Week
          </p>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand">
            <Image src="/logo.png" alt="Logo" width={50} height={50} style={{ borderRadius: "50%", marginLeft: "30px" }} />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/programs" className={`nav-link ${pathname === "/programs" ? "active" : ""}`}>
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faculty" className={`nav-link ${pathname === "/faculty" ? "active" : ""}`}>
                  Faculty
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/news" className={`nav-link ${pathname === "/news" ? "active" : ""}`}>
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔹 Custom CSS for ticker */}
      <style jsx>{`
        .ticker {
          white-space: nowrap;
          animation: ticker 15s linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
