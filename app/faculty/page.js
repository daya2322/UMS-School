"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function FacultyPage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const facultyMembers = [
    {
      id: 1,
      name: "Mr. Himanshu Singh",
      designation: "Principal",
      image: "/faculty1.jpg",
      description:
        "With 20+ years of experience in education, He has led the institution towards academic excellence and holistic growth.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Mr. Ajay Dubey",
      designation: "Mathematics Lecturer",
      image: "/faculty2.jpg",
      description:
        "He specializes in Mathematics, inspiring students with innovative teaching methods.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Mo. Shah Alam",
      designation: "Chemistry Lecturer",
      image: "/faculty4.jpg",
      description:
        "He brings a passion for Chemistry, making complex concepts accessible and engaging.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Our Faculty</h1>
        <p className="lead">
          Meet our highly qualified and experienced faculty members who inspire
          and guide our students.
        </p>
      </div>

      {/* Faculty Section */}
      <div className="container my-5">
        <div className="row g-4">
          {facultyMembers.map((faculty) => (
            <div className="col-md-4" key={faculty.id}>
              <div className="card shadow h-100 text-center">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={300}
                  height={300}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: "200px", height: "200px", objectFit: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{faculty.name}</h5>
                  <p className="text-muted">{faculty.designation}</p>
                  <p className="card-text">{faculty.description}</p>
                </div>
                <div className="card-footer bg-white">
                  <div className="d-flex justify-content-center gap-3">
                    <Link href={faculty.social.facebook} className="text-primary">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href={faculty.social.twitter} className="text-info">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href={faculty.social.linkedin} className="text-primary">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link href={faculty.social.instagram} className="text-danger">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
