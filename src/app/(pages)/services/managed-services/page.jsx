"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Project3 from "@components/sections/Projects3";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
import Footer from "@layouts/footers/Index";
import BookConsulation from "@components/sections/BookConsulation";


const ClientSlider = dynamic(() => import("@/src/app/_components/sliders/Client"), { ssr: false });
const DevopsSlider = dynamic(() => import("@components/sliders/Devops"), { ssr: false });
import Casestudies2 from "@components/sections/Casestudies2";
import { useRouter } from "next/navigation";

const Devsecops = () => {
      const router = useRouter();
  
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
    fontFamily: "'Lato', sans-serif", // Apply Lato globally
  };

  const textStyle = {
    flex: "1 1 50%",
    minWidth: "300px",
    padding: "20px",
    fontFamily: "'Lato', sans-serif",
  };

  const buttonStyle = {
    backgroundColor: "#BCFF00",
    color: "rgb(12, 20, 31)",
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
    flex: "1 1 40%",
    minWidth: "300px",
    textAlign: "center",
    fontFamily: "'Lato', sans-serif",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "50px",
    margin: "20px 0",
    color: "rgb(12, 20, 31)",
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <div style={{ backgroundColor: "rgb(12, 20, 31)", fontFamily: "'Lato', sans-serif" }}>
      <Header layout={"default"} />

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white", fontFamily: "'Lato', sans-serif" }}>
            Consider IT done, just the way you’ve always wanted
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px", fontFamily: "'Lato', sans-serif" }}>
            We handle your IT daily grind with 24/7 personalized services, latest tech stack, and resolve issues proactively.
          </p>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => router.push("/contact")}

          >
            Book a Free Consultation
          </a>
        </div>

        {/* Image Section */}
        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/manage.png"
            alt="Devsecops"
            width={400}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>

      <Project3 />

      <img src="/img/Project/whyusmanage.png" alt="Why Us?" style={imageStyle} />

      <ClientSlider />
      <HowWeWork1 />
      <BookConsulation/>
      <DevopsSlider />
      <Casestudies2 />
    <Footer layout={"default"} />

    </div>
  );
};

export default Devsecops;
