import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection1 from "@components/sections/Services1";
import HowWeWork1 from "@components/sections/HowWeWork1";

const ServicesPage = () => {

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
    fontFamily: "'Lato', sans-serif",
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
    fontFamily: "'Lato', sans-serif",
  };

  const imageWrapperStyle = {
    flex: "1 1 40%", // Takes up 40% of the width
    minWidth: "300px", // Ensures the image always has enough space
    textAlign: "center", // Centers the image
  };

  const imageStyle = {
    width: "90%", // Ensures the image takes the full width of its container
    height: "auto", // Maintains aspect ratio
    marginTop:"50px"
  };

  const headingStyle = {
    textAlign: "center", // Centers the heading text
    fontSize: "50px", // Adjusts the font size as needed
    margin: "20px 0", // Adds some margin above and below the heading
    color: "rgb(12, 20, 31)",
    fontFamily: "'Lato', sans-serif",
  };
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
      

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white", fontFamily: "'Lato', sans-serif" }}>
          CRAFTING THE FUTURE OF
          INNOVATION
          </h1>
       
        </div>

        {/* Image Section */}
        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/service.svg" // Update with the actual image path
            alt="Devsecops"
            width={0}
            height={500}
            style={imageStyle}
          />
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
        {/* <IdeasSection /> */}
        {/* <HowWeWork1 /> */}
      </div>

      {/* Footer */}
      <Footer layout={"default"} />
    </div>
  );
};

export default ServicesPage;
