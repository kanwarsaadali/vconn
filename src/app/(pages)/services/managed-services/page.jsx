"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Project3 from "@components/sections/Projects3";
import Project1 from "@components/sections/Projects1";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
const ClientSlider1 = dynamic( () => import("@/src/app/_components/sliders/Client1"), { ssr: false } );
const DevopsecopsSlider = dynamic( () => import("@components/sliders/Devsecops1"), { ssr: false } );
import Casestudies2 from "@components/sections/Casestudies2";


const Devsecops = () => {
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
  };

  const textStyle = {
    flex: "1 1 50%", // Takes up 50% of the width
    minWidth: "300px", // Ensures text always has enough space
    padding: "20px",
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
    color:"rgb(12, 20, 31)"
  };

  return (
    <div style={{backgroundColor:"rgb(12, 20, 31)"}}>
      <Header layout={"default"} />

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color:"white" }}>Managed Services</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
          Maximizing your operational efficiency with our end-to-end managed services, offering continuous monitoring, support, and optimization to keep your IT infrastructure running smoothly.
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
            src="/img/Project/manage.png" // Update with the actual image path
            alt="Devsecops"
            width={500}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>
      <Project3 />
      {/* <h1 style={headingStyle}>Why Us?</h1> */}
      <img src="/img/Project/whyusdevops.png" alt="" style={imageStyle} />
      <ClientSlider1/>
      <HowWeWork1 />
      <DevopsecopsSlider/>
      <Casestudies2 />


    </div>
  );
};

export default Devsecops;