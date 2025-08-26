"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #3a8dde, #22c1c3)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6 text-white">
              <h1 className="fw-bold display-5">
                Shaping <br />
                Tomorrow&apos;s <br />
                Leaders Today
              </h1>
              <h3 className="mt-3">
                At <span className="text-warning">Ujjwal Model School</span>, we
                provide a nurturing environment that fosters academic
                excellence, character development, and lifelong learning.
              </h3>

              <div className="mt-4">
                <Link href="/programs" className="btn btn-light me-3 fw-semibold">
                  Explore Programs
                </Link>
                <Link href="/tour" className="btn btn-outline-light fw-semibold">
                  Virtual Tour
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div
                className="bg-light rounded shadow"
                style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
              >
                <Image
                  src="/ums.jpg" // replace with your image
                  alt="School Campus"
                  width={600}
                  height={400}
                  className="rounded img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="py-5 text-white" style={{ backgroundColor: "#0d6efd" }}>
        <div className="container">
          <div className="row text-center">
            {/* Graduation Rate */}
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold">
                <CountUp end={95} duration={3} enableScrollSpy />%
              </h2>
              <p>Graduation Rate</p>
            </div>

            {/* Programs Offered */}
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold">
                <CountUp end={25} duration={3} enableScrollSpy />+
              </h2>
              <p>Programs Offered</p>
            </div>

            {/* Certified Teachers */}
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold">
                <CountUp end={50} duration={3} enableScrollSpy />+
              </h2>
              <p>Certified Teachers</p>
            </div>

            {/* Happy Students */}
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold">
                <CountUp end={1500} duration={3} enableScrollSpy />+
              </h2>
              <p>Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6">
              <h2 className="fw-bold">About Ujjwal Model School</h2>
              <p className="mt-3">
                Founded in 2016, Ujjwal Model School has been at the forefront
                of providing exceptional education that prepares students for
                success in an ever-changing world.
              </p>
              <p>
                Our state-of-the-art facilities, dedicated faculty, and
                innovative curriculum create an environment where students can
                thrive academically, socially, and personally.
              </p>

              {/* Features */}
              <div className="row mt-3">
                <div className="col-md-6">
                  <p>✔ STEM-Focused Curriculum</p>
                  <p>✔ Sports & Arts Programs</p>
                </div>
                <div className="col-md-6">
                  <p>✔ College Preparation</p>
                  <p>✔ Global Perspective</p>
                </div>
              </div>

              <Link href="/about" className="btn btn-primary mt-3">
                Learn More About Us
              </Link>
            </div>

            {/* Right Side - Images */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="row g-3">
                {["about1.jpg", "about2.jpg", "about3.jpg", "about4.jpg"].map(
                  (img, i) => (
                    <div className="col-6" key={i}>
                      <Image
                        src={`/${img}`}
                        alt={`About Image ${i + 1}`}
                        width={400}
                        height={300}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Academic Programs ================= */}
      <section className=" py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Academic Programs</h2>
          <p>Comprehensive curriculum designed to meet diverse learning needs</p>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <Image
                src="/program1.jpg"
                alt="Elementary School"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h5 className="mt-2">Elementary School</h5>
              <p>
                Foundational learning with emphasis on literacy, numeracy, and
                social development.
              </p>
              <Link href="/programs" className="btn btn-sm btn-outline-primary">
                Learn More
              </Link>
            </div>
            <div className="col-md-4">
              <Image
                src="/program2.jpg"
                alt="Middle School"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h5 className="mt-2">Middle School</h5>
              <p>
                Transitional program focusing on critical thinking and
                preparation for high school.
              </p>
              <Link href="/programs" className="btn btn-sm btn-outline-primary">
                Learn More
              </Link>
            </div>
            <div className="col-md-4">
              <Image
                src="/program3.jpg"
                alt="High School"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h5 className="mt-2">High School</h5>
              <p>
                College preparatory curriculum with AP courses, STEM focus, and
                career readiness.
              </p>
              <Link href="/programs" className="btn btn-sm btn-outline-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Faculty Section ================= */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Meet Our Faculty</h2>
          <p>Dedicated educators committed to student success</p>
          <div className="row g-4 mt-4">
            {[
              { name: "Dr. Sarah Chen", dept: "Mathematics Department" },
              { name: "Prof. Michael Rodriguez", dept: "Science Department" },
              { name: "Ms. Emily Watson", dept: "English Department" },
              { name: "Mr. David Kim", dept: "Social Studies" },
            ].map((teacher, i) => (
              <div className="col-md-3" key={i}>
                <Image
                  src={`/faculty${i + 1}.jpg`}
                  alt={teacher.name}
                  width={300}
                  height={300}
                  className="rounded-circle img-fluid shadow"
                />
                <h6 className="mt-2">{teacher.name}</h6>
                <p>{teacher.dept}</p>
              </div>
            ))}
          </div>
          <Link href="/faculty" className="btn btn-primary mt-3">
            View All Faculty
          </Link>
        </div>
      </section>

      {/* ================= News & Events ================= */}
      <section className=" py-5">
        <div className="container text-center">
          <h2 className="fw-bold">School News & Events</h2>
          <p>Stay updated with the latest happenings at Ujjwal Model School</p>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <Image
                src="/news1.jpg"
                alt="Science Fair"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h6 className="mt-2">Annual Science Fair Winners</h6>
              <p>
                Celebrating our students’ achievements in innovative projects.
              </p>
              <Link href="/news" className="btn btn-sm btn-outline-primary">
                Read More
              </Link>
            </div>
            <div className="col-md-4">
              <Image
                src="/news2.jpg"
                alt="Basketball Team"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h6 className="mt-2">Basketball Team Wins Championship</h6>
              <p>Our Eagles triumph in an unforgettable season finale!</p>
              <Link href="/news" className="btn btn-sm btn-outline-primary">
                Read More
              </Link>
            </div>
            <div className="col-md-4">
              <Image
                src="/news3.jpg"
                alt="College Acceptances"
                width={400}
                height={250}
                className="img-fluid rounded shadow"
              />
              <h6 className="mt-2">Class of 2024 College Acceptances</h6>
              <p>95% of graduates accepted into their first-choice colleges!</p>
              <Link href="/news" className="btn btn-sm btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Campus Gallery ================= */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Campus Gallery</h2>
          <p>Explore our beautiful campus and student life</p>
          <div className="row g-3 mt-4">
            {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map(
              (img, i) => (
                <div className="col-md-3" key={i}>
                  <Image
                    src={`/${img}`}
                    alt={`Campus ${i + 1}`}
                    width={300}
                    height={200}
                    className="img-fluid rounded shadow"
                  />
                </div>
              )
            )}
          </div>
          <Link href="/gallery" className="btn btn-primary mt-3">
            View Full Gallery
          </Link>
        </div>
      </section>

     {/* ================= Testimonials ================= */}
<section className="py-5" style={{ backgroundColor: "#007bff" }}>
  <div className="container text-center text-white">
    <h2 className="fw-bold">What Parents & Students Say</h2>
    <p className="mb-4">Hear from our school community</p>
    <div className="row g-4">
      
      {/* Testimonial 1 */}
      <div className="col-md-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <div className="mb-2 text-warning">★★★★★</div>
            <p>
              Ujjwal Model School provides a nurturing environment where
              my child has grown academically and socially.
            </p>
            <div className="d-flex align-items-center mt-3">
              <Image
                src="/user1.jpg" // replace with actual user image
                alt="User 1"
                width={40}
                height={40}
                className="rounded-circle me-2"
              />
              <div>
                <h6 className="mb-0">Parent 1</h6>
                <small className="text-muted">Student Grade 4</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-md-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <div className="mb-2 text-warning">★★★★★</div>
            <p>
              The teachers are dedicated and supportive, ensuring every
              student reaches their full potential.
            </p>
            <div className="d-flex align-items-center mt-3">
              <Image
                src="/user2.jpg"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-circle me-2"
              />
              <div>
                <h6 className="mb-0">Parent 2</h6>
                <small className="text-muted">Student Grade 5</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="col-md-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <div className="mb-2 text-warning">★★★★★</div>
            <p>
              We are impressed with the school’s focus on academics as
              well as extra-curricular activities.
            </p>
            <div className="d-flex align-items-center mt-3">
              <Image
                src="/user3.jpg"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-circle me-2"
              />
              <div>
                <h6 className="mb-0">Parent 3</h6>
                <small className="text-muted">Student Grade 6</small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
