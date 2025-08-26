"use client"; 
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="section-padding py-5 bg-light">
      <div className="container">
        {/* About Section */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4 animated-border">About Evergreen Academy</h2>
            <p className="lead mb-4">
              Founded in 1995, Evergreen Academy has been at the forefront of providing 
              exceptional education that prepares students for success in an ever-changing world.
            </p>
            <p className="mb-4">
              Our state-of-the-art facilities, dedicated faculty, and innovative curriculum 
              create an environment where students can thrive academically, socially, and personally.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                  <span>STEM-focused Curriculum</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                  <span>Sports & Arts Programs</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                  <span>College Preparation</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                  <span>Global Perspective</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Images */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="row g-4">
              <div className="col-6">
                <Image 
                  src="/images/about1.png"
                  alt="Students in science lab"
                  width={300}
                  height={220}
                  className="img-fluid rounded-3 shadow"
                />
              </div>
              <div className="col-6">
                <Image 
                  src="/images/about2.png"
                  alt="School library"
                  width={300}
                  height={220}
                  className="img-fluid rounded-3 shadow"
                />
              </div>
              <div className="col-6">
                <Image 
                  src="/images/about3.png"
                  alt="Sports activities"
                  width={300}
                  height={220}
                  className="img-fluid rounded-3 shadow"
                />
              </div>
              <div className="col-6">
                <Image 
                  src="/images/about4.png"
                  alt="Art class"
                  width={300}
                  height={220}
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Director Section */}
        <div className="row align-items-center mt-5 pt-5 border-top">
          <div className="col-lg-4 text-center">
            <Image 
              src="/images/director.png"
              alt="School Director"
              width={300}
              height={300}
              className="rounded-circle shadow-lg img-fluid"
            />
          </div>
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">Message from Our Director</h3>
            <p className="lead">
              At Ujjwal Model School, our mission is not only to impart knowledge but also to 
              nurture creativity, leadership, and character. We believe in developing well-rounded 
              individuals who can adapt, innovate, and lead with integrity in the modern world.
            </p>
            <p>
              With over 9 years of academic excellence, our academy continues to evolve, blending 
              tradition with innovation. We are committed to creating a safe, inclusive, and 
              inspiring learning environment for every student.
            </p>
            <h5 className="mt-3">Mrs. Sunita Singh</h5>
            <span className="text-muted">Director, Ujjwal Model School</span>
          </div>
        </div>
      </div>
    </section>
  );
}
