"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Projects4 = () => {
  const items = [
    { icon: "/img/icons/I_1.svg", title: "GRC Management", description: "Align operations with regulatory standards and manage risks." },
    { icon: "/img/icons/I_2.svg", title: "Data Prevention", description: "Protect sensitive data from breaches and unauthorized access." },
    { icon: "/img/icons/I_3.svg", title: "Security Design", description: "Build secure, scalable infrastructure tailored to business needs." },
    { icon: "/img/icons/I_4.svg", title: "Security Training", description: "Equip employees to identify and respond to cyber threats." },
    { icon: "/img/icons/I_5.svg", title: "Stay Operational", description: "Ensure resilience with strategic planning and rapid recovery." },
    { icon: "/img/icons/I_6.svg", title: "IAM Management", description: "Secure access control and identity governance to reduce risks." },
    { icon: "/img/icons/I_7.svg", title: "SIEM Integration", description: "Gain real-time threat visibility with centralized log management." },
    { icon: "/img/icons/I_8.svg", title: "Audit Support", description: "Achieve certifications like ISO 27001, SOC 2, and PCI-DSS with expert guidance." },
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
    fontFamily: "'Lato', sans-serif", // Apply Lato font globally
  };

  const headerStyle = {
    marginBottom: "40px",
    fontSize: "40px",
    fontWeight: "700",
    color: "#BCFF00",
    textAlign: "center",
    fontFamily: "'Lato', sans-serif", // Apply Lato font to header
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
    fontFamily: "'Lato', sans-serif", // Apply Lato font to the card
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
    fontFamily: "'Lato', sans-serif", // Apply Lato font to overlay text
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
      </div>
      <h3 style={{ fontFamily: "'Lato', sans-serif" }}>{title}</h3> {/* Apply Lato font to title */}

      <div style={overlayStyle}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Projects4;
