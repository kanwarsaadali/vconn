"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Project3 from "@components/sections/Projects3";
import Projects2 from "@components/sections/Projects2";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
const ClientSlider1 = dynamic( () => import("@/src/app/_components/sliders/Client1"), { ssr: false } );
const DevopsecopsSlider = dynamic( () => import("@components/sliders/Devsecops1"), { ssr: false } );
import Casestudies1 from "@components/sections/Casestudies1";


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
    <div style={{background:"rgb(12, 20, 31)"}}>
      <Header layout={"default"} />

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color:"white" }}>Your Impenetrable DevOps Culture for Secured, Threat-Free Deployments, Frictionless Collaboration</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
          With source code, threat modelling, false-positive rates analysis and more, integrate the security checks early in your software’s development pipeline for faster deployments, smooth collaboration
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
            src="/img/Project/devsecops.png" // Update with the actual image path
            alt="Devsecops"
            width={500}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>
      <Projects2 />
      {/* <h1 style={headingStyle}>Why Us?</h1> */}
      <img src="/img/Project/whyusdevops.png" alt="" style={imageStyle} />
      <ClientSlider1/>
      <HowWeWork1 />
      <DevopsecopsSlider/>
      <Casestudies1 />


    </div>
  );
};

export default Devsecops;