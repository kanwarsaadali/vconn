
// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project2 = () => {
//   const items = [
//     { icon: "/img/icons/Service2_1.png", title: "CI/CD Pipeline Security", description: "Real-time threat identification and mitigation." },
//     { icon: "/img/icons/Service2_2.png", title: "Security as Code", description: "Simulated attacks to find vulnerabilities." },
//     { icon: "/img/icons/Service2_3.png", title: "Continuous Compliance Monitoring", description: "Protection against sophisticated malware." },
//     { icon: "/img/icons/Service2_4.png", title: "Identity & Access Management (IAM)", description: "Encryption and secure data handling." },
//     { icon: "/img/icons/Service2_5.png", title: "Runtime Application Self-Protection (RASP)", description: "Security monitoring and incident response." },
//     { icon: "/img/icons/Service2_6.png", title: "Cloud Security & Data Protection", description: "Deploying security measures and tools." },
//     { icon: "/img/icons/Service2_7.png", title: "Container Vulnerability Scanning", description: "Scanning for exposed data on the dark web." },
//     { icon: "/img/icons/Service2_8.png", title: "DevSecOps Maturity Assessment", description: "Attack and defense simulation to test security." },
//   ];

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "20px",
//     overflow: "hidden",
//     boxSizing: "border-box",
//     height: "100%", // Adjust for all devices
//   };

//   const headerStyle = {
//     marginBottom: "40px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#BCFF00",
//     textAlign: "center",
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Adjust columns for responsiveness
//     gap: "24px",
//     width: "100%",
//     maxWidth: "1200px",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headerStyle}>PROJECT</h1>
//       <div style={gridStyle}>
//         {items.map((item, index) => (
//           <Card key={index} icon={item.icon} title={item.title} description={item.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, description }) => {
//   const [hover, setHover] = useState(false);

//   const cardStyle = {
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#BCFF00", // Non-hover color
//     color: "#000",
//     padding: "20px",
//     borderRadius: "12px",
//     textAlign: "center",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     boxSizing: "border-box",
//     width: "100%", // Ensures proper resizing on smaller screens
//     height: "250px", // Fixed height for uniformity
//   };

//   const cardHoverStyle = {
//     transform: "scale(1.05)",
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
//     backgroundColor: "#BCFF00", // Same color as non-hover to ensure consistency
//   };

//   const hiddenContentStyle = {
//     display: hover ? "none" : "flex", // Hide original content on hover
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const overlayStyle = {
//     display: hover ? "flex" : "none", // Show overlay content on hover
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#000",
//     fontSize: "18px",
//     fontWeight: "bold",
//   };

//   return (
//     <div
//       style={{
//         ...cardStyle,
//         ...(hover ? cardHoverStyle : {}),
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <div style={hiddenContentStyle}>
//         <Image src={icon} alt={title} width={100} height={100} />
//         {/* <h3>{title}</h3> */}
//       </div>
//       <h3>{title}</h3>

//       <div style={overlayStyle}>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Project2;


"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Project2 = () => {
  const items = [
    { icon: "/img/icons/d1.svg", title: "DevOps Integration", description: "Automating DevOps and security best practices across the SDLC." },
    { icon: "/img/icons/d2.svg", title: "CI/CD Security", description: "Securing CI/CD pipelines by embedding security into code and infrastructure." },
    { icon: "/img/icons/d3.svg", title: "Auto Compliance", description: "Ensuring real-time compliance with regulatory standards and identifying risks." },
    { icon: "/img/icons/d4.svg", title: "IAM Management", description: "Managing access controls and identities to protect systems and data." },
    { icon: "/img/icons/d5.svg", title: "Data Security", description: "Securing data across multi-cloud and hybrid infrastructures." },
    { icon: "/img/icons/d6.svg", title: "Secure Scan", description: "Scanning containers and securing applications with RASP and vulnerability protection." },
    { icon: "/img/icons/d7.svg", title: "DevSecOps Plan", description: "Evaluating security practices and providing a DevSecOps maturity roadmap." },
    { icon: "/img/icons/d8.svg", title: "Threat Protection", description: "Monitoring and defending applications against real-time threats." },
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
    fontFamily: "'Lato', sans-serif",
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
      <h1 style={headerStyle}>SERVICES</h1>
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
    fontFamily: "'Lato', sans-serif",
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
    fontFamily: "'Lato', sans-serif",
    textAlign: "center",
    padding: "10px",
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
       <h3 style={{ fontFamily: "'Lato', sans-serif" }}>{title}</h3>

      <div style={overlayStyle}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project2;
