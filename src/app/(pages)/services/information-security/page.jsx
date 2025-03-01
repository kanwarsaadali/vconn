"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Projects4 from "@components/sections/Projects4";
import Project1 from "@components/sections/Projects1";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
const ClientSlider = dynamic(() => import("@/src/app/_components/sliders/Client"), { ssr: false });
const DevopsSlider = dynamic(() => import("@components/sliders/Devops"), { ssr: false });
import Casestudies3 from "@components/sections/Casestudies3";
import Footer from "@layouts/footers/Index";


const InformationSecurity = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "rgb(12, 20, 31)", // Dark background
    color: "white", // Text color
    boxSizing: "border-box",
    flexWrap: "wrap", // Allows content to wrap for smaller screens
    fontFamily: "'Lato', sans-serif", // Apply Lato font globally
  };

  const textStyle = {
    flex: "1 1 50%", // Takes up 50% of the width
    minWidth: "300px", // Ensures text always has enough space
    padding: "20px",
    fontFamily: "'Lato', sans-serif", // Lato applied to text
  };

  const buttonStyle = {
    backgroundColor: "#BCFF00", // Bright green color
    color: "rgb(12, 20, 31)", // Dark text color
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.3s ease",
    fontFamily: "'Lato', sans-serif", // Lato applied to button text
  };

  const imageWrapperStyle = {
    flex: "1 1 40%", // Takes up 40% of the width
    minWidth: "300px", // Ensures the image always has enough space
    textAlign: "center", // Centers the image
  };

  const imageStyle = {
    width: "100%", // Ensures the image takes the full width of its container
    height: "auto", // Maintains aspect ratio
  };

  const headingStyle = {
    textAlign: "center", // Centers the heading text
    fontSize: "50px", // Adjusts the font size as needed
    margin: "20px 0", // Adds some margin above and below the heading
    color: "rgb(12, 20, 31)",
    fontFamily: "'Lato', sans-serif", // Lato applied to the heading
  };

  return (
<<<<<<< HEAD
    <div style={{backgroundColor:"rgb(12, 20, 31)"}}>
=======
    <div style={{ backgroundColor: "rgb(12, 20, 31)", fontFamily: "'Lato', sans-serif" }}>
>>>>>>> 2d17da2 (update code)
      <Header layout={"default"} />

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
<<<<<<< HEAD
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color:"white" }}>Outsmart Hackers 24/7 through Adaptive Security Measures Before, During, and After Incidents</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
          We proactively monitor your systems, encrypt sensitive data, and ensure its integrity against threats round the clock.
=======
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white", fontFamily: "'Lato', sans-serif" }}>
            Outsmart Hackers 24/7 through Adaptive Security Measures Before, During, and After Incidents
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px", fontFamily: "'Lato', sans-serif" }}>
            We proactively monitor your systems, encrypt sensitive data, and ensure its integrity against threats round the clock.
>>>>>>> 2d17da2 (update code)
          </p>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Image Section */}
        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/information.png" // Update with the actual image path
            alt="Devsecops"
            width={400}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>

      <Projects4 />
      {/* <h1 style={headingStyle}>Why Us?</h1> */}
      <img src="/img/Project/whyusinform.png" alt="" style={imageStyle} />
      <ClientSlider />
      <HowWeWork1 />
      <DevopsSlider />
      <Casestudies3 />
    <Footer layout={"default"} />

    </div>
  );
};

export default InformationSecurity;
