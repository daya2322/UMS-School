"use client";

import Image from "next/image";

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Our Programs</h1>
        <p className="lead">
          Explore the wide range of academic and extracurricular programs we
          offer for holistic student development.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Program 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <Image
                src="/programs/primary.jpg"
                className="card-img-top"
                alt="Primary School"
                width={500}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">Primary School</h5>
                <p className="card-text">
                  Our primary school program builds strong foundations in
                  literacy, numeracy, and critical thinking with engaging
                  activities.
                </p>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <Image
                src="/programs/middle.jpg"
                className="card-img-top"
                alt="Middle School"
                width={500}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">Middle School</h5>
                <p className="card-text">
                  Our middle school focuses on academic excellence, leadership,
                  and extracurricular opportunities to nurture talent.
                </p>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <Image
                src="/programs/high.jpg"
                className="card-img-top"
                alt="High School"
                width={500}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">High School</h5>
                <p className="card-text">
                  Our high school program prepares students for college and
                  careers with a balance of academics and life skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extracurricular Programs */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Extracurricular Activities</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>Sports</h5>
              <p>
                We offer a wide variety of sports activities such as football,
                basketball, athletics, and more to promote fitness and teamwork.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>Arts & Culture</h5>
              <p>
                Students can participate in music, dance, theater, and visual
                arts programs to foster creativity and self-expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Programs FAQ</h2>
        <div className="accordion" id="programsFAQ">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                What age groups are eligible for the primary program?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              data-bs-parent="#programsFAQ"
            >
              <div className="accordion-body">
                The primary school program is for students aged 5 to 10 years.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                Do you offer career counseling in high school?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#programsFAQ"
            >
              <div className="accordion-body">
                Yes, our high school students receive career counseling,
                college prep, and skill development guidance.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                Are extracurricular activities compulsory?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#programsFAQ"
            >
              <div className="accordion-body">
                Participation is encouraged but not mandatory. However, we
                highly recommend it for holistic growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
