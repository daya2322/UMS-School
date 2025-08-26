"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsPage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // ✅ Sample news data
  const newsList = [
    {
      id: 1,
      title: "School Annual Fest 2025 Announced",
      category: "Events",
      date: "August 20, 2025",
      image: "/news/fest.jpg",
      description:
        "Our school proudly announces the Annual Fest 2025 with cultural, sports, and academic competitions.",
    },
    {
      id: 2,
      title: "New Science Lab Inauguration",
      category: "Infrastructure",
      date: "August 15, 2025",
      image: "/news/science-lab.jpg",
      description:
        "A state-of-the-art science laboratory has been inaugurated to enhance hands-on learning for students.",
    },
    {
      id: 3,
      title: "Inter-School Sports Championship",
      category: "Sports",
      date: "August 10, 2025",
      image: "/news/sports.jpg",
      description:
        "Our students participated in the inter-school sports championship and won multiple gold medals.",
    },
    {
      id: 4,
      title: "Digital Library Launch",
      category: "Education",
      date: "August 1, 2025",
      image: "/news/library.jpg",
      description:
        "The new digital library provides access to thousands of e-books and research materials for students.",
    },
  ];

  const categories = ["All", "Events", "Infrastructure", "Sports", "Education"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews =
    selectedCategory === "All"
      ? newsList
      : newsList.filter((news) => news.category === selectedCategory);

  return (
    <div>
      {/* Banner / Hero Section */}
      <div className="bg-light text-center py-5">
        <h1>Latest News & Updates</h1>
        <p className="lead">
          Stay updated with the latest happenings, events, and announcements.
        </p>
      </div>

      {/* Category Filter */}
      <div className="container my-4">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News List */}
      <div className="container my-5">
        <div className="row g-4">
          {filteredNews.map((news) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
              <div className="card h-100 shadow-sm">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">
                    {news.category}
                  </span>
                  <h5 className="card-title">{news.title}</h5>
                  <p className="text-muted small">{news.date}</p>
                  <p className="card-text">{news.description}</p>
                  <Link href={`/news/${news.id}`} className="btn btn-outline-primary btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
