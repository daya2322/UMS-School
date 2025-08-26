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
      name: "Dr. Anita Sharma",
      designation: "Principal & Director",
      image: "/faculty/principal.jpg",
      description:
        "With 20+ years of experience in education, Dr. Sharma has led the institution towards academic excellence and holistic growth.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      designation: "Head of Science Department",
      image: "/faculty/rajesh.jpg",
      description:
        "Prof. Rajesh specializes in Physics and Chemistry, inspiring students with innovative teaching methods.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Ms. Priya Nair",
      designation: "Head of Arts Department",
      image: "/faculty/priya.jpg",
      description:
        "Ms. Priya encourages creativity and cultural awareness, guiding students in literature, fine arts, and music.",
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
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
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
