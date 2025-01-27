"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Project3 = () => {
  const items = [
    { icon: "/img/icons/SERVICE 1_1.png", title: "CI/CD Pipeline Security", description: "Managing cloud infrastructure." },
    { icon: "/img/icons/SERVICE 1_2.png", title: "Security as Code", description: "Monitoring and maintaining network health." },
    { icon: "/img/icons/SERVICE 1_3.png", title: "Continuous Compliance Monitoring", description: "Monitoring application performance." },
    { icon: "/img/icons/SERVICE 1_4.png", title: "Identity & Access Management (IAM)", description: "Secure data backup and disaster recovery." },
    { icon: "/img/icons/SERVICE 1_5.png", title: "Runtime Application Self-Protection (RASP)", description: "Remote endpoint security management." },
    { icon: "/img/icons/SERVICE 1_6.png", title: "•	Cloud Security & Data Protection", description: "End-user support and troubleshooting." },
    { icon: "/img/icons/SERVICE 1_7.png", title: "Patch Management", description: "Regular updates and patches." },
    { icon: "/img/icons/SERVICE 1_8.png", title: "IT Asset Management", description: "Managing IT hardware and software." },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(12, 20, 31)",
    padding: "20px",
    overflow: "hidden",
    boxSizing: "border-box",
    height: "100%", // Adjust for all devices
  };

  const headerStyle = {
    marginBottom: "40px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#BCFF00",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Adjust columns for responsiveness
    gap: "24px",
    width: "100%",
    maxWidth: "1200px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>PROJECT</h1>
      <div style={gridStyle}>
        {items.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BCFF00", // Non-hover color
    color: "#000",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%", // Ensures proper resizing on smaller screens
    height: "250px", // Fixed height for uniformity
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#BCFF00", // Same color as non-hover to ensure consistency
  };

  const hiddenContentStyle = {
    display: hover ? "none" : "flex", // Hide original content on hover
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const overlayStyle = {
    display: hover ? "flex" : "none", // Show overlay content on hover
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        ...cardStyle,
        ...(hover ? cardHoverStyle : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={hiddenContentStyle}>
        <Image src={icon} alt={title} width={100} height={100} />
        <h3>{title}</h3>
      </div>
      <div style={overlayStyle}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project3;
