import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import IdeasSection1 from "@components/sections/Ideas1";
import ServicesSection1 from "@components/sections/Services1";
import HowWeWork1 from "@components/sections/HowWeWork1";

const ServicesPage = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // Ensure the page covers the full viewport height
        overflowX: "hidden", // Prevent horizontal scrolling
        display: "flex",
        flexDirection: "column", // Stack content vertically
      }}
    >
      {/* Header */}
      <Header layout={"default"} />

      {/* Hero Section with Background Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh", // Adjusted height to occupy 80% of the viewport
          backgroundImage: "url('/img/covers/image1.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Gray Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent gray
            zIndex: 1,
          }}
        ></div>

        {/* Overlay Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            <span style={{ color: "white" }}>Empowering</span>{" "}
            <span style={{ color: "rgb(188, 255, 0)" }}>Solutions</span>
            <span style={{ color: "white" }}>Elevating</span>
          </h1>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
           Experiences
          </h1>
        </div>
      </div>

      {/* Main Content Sections */}
      <div
        style={{
          flex: 1, // Ensure sections grow and fill the remaining space
          width: "100%",
        }}
      >
        <ServicesSection1 />
        <IdeasSection1 />
        <HowWeWork1 />
      </div>

      {/* Footer */}
      <Footer layout={"default"} />
    </div>
  );
};

export default ServicesPage;
