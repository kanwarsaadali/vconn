"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Projects4 = () => {
  const items = [
    { icon: "/img/icons/Service3_1.png", title: "Risk Management", description: "Identifying and managing information risks." },
    { icon: "/img/icons/Service3_2.png", title: "GRC (Governance, Risk, Compliance)", description: "Managing governance and compliance." },
    { icon: "/img/icons/Service3_3.png", title: "Data Loss Prevention (DLP)", description: "Preventing unauthorized data access." },
    { icon: "/img/icons/Service3_4.png", title: "Security Training", description: "Educating employees on security best practices." },
    { icon: "/img/icons/Service3_5.png", title: "Security Architecture", description: "Designing secure systems." },
    { icon: "/img/icons/Service3_6.png", title: "Business Continuity & Disaster Recovery", description: "Ensuring business continuity and recovery." },
    { icon: "/img/icons/Service3_7.png", title: "Access Control", description: "Managing secure access to data." },
    { icon: "/img/icons/Service3_8.png", title: "Privacy Protection", description: "Ensuring privacy compliance." },
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

export default Projects4;
