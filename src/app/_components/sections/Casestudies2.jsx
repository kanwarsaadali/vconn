"use client"; // Mark this component as a client component

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const services = [
  {
    title: "Cloud Infrastructure Optimization for SaaS Provider",
    description:
      "Optimized cloud infrastructure for cost efficiency and improved performance by 30%..",
    image: "/img/covers/Information.png", // Replace with the actual path
    path: "/services/cybersecurity", // Add the path for the detailed page
  },
  {
    title: "Proactive Network Management",
    description:
      "Ensured 99.9% network uptime with proactive monitoring.",
    image: "/img/covers/Information.png", // Replace with the actual path
    path: "/services/devsecops", // Add the path for the detailed page
  },
  {
    title: "Application Performance Monitoring",
    description:
      "Improved transaction speed by 15% and reduced downtime by 20% with APM..",
    image: "/img/covers/Information.png", // Replace with the actual path
    path: "/services/managed-services", // Add the path for the detailed page
  },
  {
    title: "Backup and Disaster Recovery Strategy",
    description:
      "Developed a DR strategy that restored systems within 2 hours after a failure.",
    image: "/img/covers/Information.png", // Replace with the actual path
    path: "/services/information-security", // Add the path for the detailed page
  },
];

const Casestudies2 = () => {
  const router = useRouter(); // Initialize the router

  const handleButtonClick = (path) => {
    try {
      console.log("Navigating to:", path); // Debugging log
      router.push(path); // Navigate to the detailed page
    } catch (error) {
      console.error("Navigation error:", error); // Handle navigation error
    }
  };

  return (
    <section
      style={{
        backgroundColor: "rgb(12, 20, 31)",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <h2 style={{ color: "rgb(188, 255, 0)", fontSize: "36px", marginBottom: "40px" }}>
        Case Studies
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Two cards per row
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${service.image})`,
              // `url(${service.image})`
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              height: "550px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
            }}
          >
            {/* Service Content */}
            <div
              style={{
                padding: "20px",
                textAlign: "left",
                background: "rgba(0, 0, 0, 0.6)",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "white" }}>
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "20px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {service.description}
              </p>
              <button
                onClick={() => handleButtonClick(service.path)} // Navigate on button click
                style={{
                  backgroundColor: "rgb(188, 255, 0)",
                  padding: "10px 15px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  border: "none",
                  color: "rgb(23, 40, 62)",
                  cursor: "pointer",
                }}
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Casestudies2;