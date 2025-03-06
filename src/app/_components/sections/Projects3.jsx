"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Project3 = () => {
  const items = [
    { icon: "/img/icons/M1.svg", title: "Cloud Management", description: "Embedding security in development." },
    { icon: "/img/icons/M2.svg", title: "Network Management", description: "Managing governance and compliance." },
    { icon: "/img/icons/M3.svg", title: "Help Desk & Support", description: "Preventing unauthorized data access." },
    { icon: "/img/icons/M4.svg", title: "Patch Management", description: "Educating employees on security best practices." },
    { icon: "/img/icons/M5.svg", title: "IT Asset Management", description: "Designing secure system." },
    { icon: "/img/icons/M6.svg", title: "Backup & Disaster Recovery", description: "Ensuring business continuity and recovery." },
    { icon: "/img/icons/M7.svg", title: "Managed Endpoint Security", description: "Managing secure access to data." },
    { icon: "/img/icons/M8.svg", title: "Application Performance Monitoring (APM)", description: "Ensuring privacy compliance." },
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
    height: "100%",
    fontFamily: "'Lato', sans-serif",
  };

  const headerStyle = {
    marginBottom: "40px",
    fontSize: "40px",
    fontWeight: "700",
    color: "#BCFF00",
    textAlign: "center",
    fontFamily: "'Lato', sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
    backgroundColor: "#BCFF00",
    color: "#000",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%",
    height: "250px",
    fontFamily: "'Lato', sans-serif",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
  };

  const hiddenContentStyle = {
    display: hover ? "none" : "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const overlayStyle = {
    display: hover ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "'Lato', sans-serif",
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
      <h3>{title}</h3>

      <div style={overlayStyle}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project3;
