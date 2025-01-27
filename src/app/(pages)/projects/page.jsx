import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import IdeasSection1 from "@components/sections/Ideas1";
import Project1 from "@components/sections/Projects1";
const CybersecuritySlider = dynamic( () => import("@components/sliders/Cybersecurity"), { ssr: false } );
const DevopsecopsSlider1 = dynamic( () => import("@components/sliders/Devsecops1"), { ssr: false } );

import HowWeWork1 from "@components/sections/HowWeWork1";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";

const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
		default: "Projects",
	},
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      {/* <Header layout={"default"} /> */}
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            <span style={{ color: "white" }}>CRAFTING THE </span>{" "}
            <span style={{ color: "rgb(188, 255, 0)" }}>FUTURE</span>{" "}
            <span style={{ color: "white" }}>OF</span>
          </h1>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
           INNOVATION
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
        {/* <ServicesSection1 /> */}
        {/* <IdeasSection1 /> */}
        <Project1/>
        <HowWeWork1 />
      <DevopsecopsSlider1/>

      </div>

      {/* Footer */}
      <Footer layout={"default"} />
    </div>      
    </>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}