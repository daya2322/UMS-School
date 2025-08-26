"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function GalleryPage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // ✅ Sample gallery images
  const galleryImages = [
    { id: 1, src: "/gallery/img1.jpg", caption: "Annual Fest Celebration" },
    { id: 2, src: "/gallery/img2.jpg", caption: "Science Exhibition" },
    { id: 3, src: "/gallery/img3.jpg", caption: "Sports Day 2025" },
    { id: 4, src: "/gallery/img4.jpg", caption: "Cultural Dance Program" },
    { id: 5, src: "/gallery/img5.jpg", caption: "Art Competition" },
    { id: 6, src: "/gallery/img6.jpg", caption: "Prize Distribution" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-light text-center py-5">
        <h1>Photo Gallery</h1>
        <p className="lead">A glimpse of our events, activities, and achievements</p>
      </div>

      {/* Gallery Grid */}
      <div className="container my-5">
        <div className="row g-4">
          {galleryImages.map((img) => (
            <div key={img.id} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card shadow-sm border-0"
                data-bs-toggle="modal"
                data-bs-target={`#modal${img.id}`}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={400}
                  height={300}
                  className="card-img-top rounded"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body p-2 text-center">
                  <small className="text-muted">{img.caption}</small>
                </div>
              </div>

              {/* Modal for Image Preview */}
              <div
                className="modal fade"
                id={`modal${img.id}`}
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        width={800}
                        height={600}
                        className="img-fluid rounded"
                      />
                      <p className="mt-2">{img.caption}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

