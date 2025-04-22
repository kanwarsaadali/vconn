import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import IdeasSection1 from "@components/sections/Ideas1";
import Projects1 from "@components/sections/Projects1";
const CybersecuritySlider = dynamic(() => import("@components/sliders/Cybersecurity"), { ssr: false });
const DevopsSlider = dynamic(() => import("@components/sliders/Devops"), { ssr: false });

import HowWeWork1 from "@components/sections/HowWeWork1";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import Image from "next/image";

const ProjectsMasonry = dynamic(() => import("@components/ProjectsMasonry"), { ssr: false });

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
    default: "Projects",
  },
  description: AppData.settings.siteDescription,
};

async function Projects() {
  const projects = await getAllProjects();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "rgb(12, 20, 31)",
    color: "white",
    boxSizing: "border-box",
    flexWrap: "wrap",
    fontFamily: "'Lato', sans-serif",
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
    display: "inline-block",
    marginTop: "20px",
  };

  const imageWrapperStyle = {
    flex: "1 1 40%",
    minWidth: "300px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "70%",
    height: "auto",
    marginTop: "50px",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "50px",
    margin: "20px 0",
    color: "rgb(12, 20, 31)",
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(12, 20, 31)",
        }}
      >
        {/* Header */}
        <Header layout={"default"} />

        {/* Banner Section */}
        <div style={containerStyle}>
          {/* Text Section */}
          <div style={textStyle}>
            <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white", fontFamily: "'Lato', sans-serif" }}>
              Discover Our Projects to Maximize Your Business Growth
            </h1>

            <a href="/contact" style={buttonStyle}>
              Book a Free Consultation
            </a>
          </div>

          {/* Image Section */}
          <div style={imageWrapperStyle}>
            <Image
              src="/img/Project/Project.svg"
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
            flex: 1,
            width: "100%",
          }}
        >
          <Projects1 />
          <HowWeWork1 />
          <DevopsSlider />
        </div>

        {/* Footer */}
        <Footer layout={"default"} />
      </div>
    </>
  );
}

export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
