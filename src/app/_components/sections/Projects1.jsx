// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project2 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "Threat Detection and Response", description: "Real-time threat identification and mitigation." },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "Penetration Testing", description: "Simulated attacks to find vulnerabilities." },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "Advanced Malware Protection", description: "Protection against sophisticated malware." },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "Data Protection Services", description: "Encryption and secure data handling." },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "SOC as a Service", description: "Security monitoring and incident response." },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "Cybersecurity Implementation", description: "Deploying security measures and tools." },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Dark Web Monitoring", description: "Scanning for exposed data on the dark web." },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Red vs Blue Team Exercises", description: "Attack and defense simulation to test security." },
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
    { icon: "/img/icons/C1.svg", title: "Threat Detection", description: "Real-time monitoring to stop threats before damage occurs." },
    { icon: "/img/icons/C2.svg", title: "Penetration Testing", description: "Simulated attacks to identify and fix vulnerabilities." },
    { icon: "/img/icons/C3.svg", title: "SOC Service", description: "24/7 support for continuous threat visibility and response." },
    { icon: "/img/icons/C4.svg", title: "Cloud Security", description: "Safeguard cloud infrastructure with tailored controls and compliance." },
    { icon: "/img/icons/C5.svg", title: "Malware Protection", description: "Detect and eliminate threats while securing sensitive data." },
    { icon: "/img/icons/C6.svg", title: "Security Strategy", description: "Comprehensive planning and tools to align security with business goals." },
    { icon: "/img/icons/C7.svg", title: "Unified Solutions", description: "Deploy robust security frameworks, policies, and technologies." },
    { icon: "/img/icons/C8.svg", title: "Team Exercises", description: "Adversarial exercises to test and enhance cyber resilience." },
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
    fontFamily: "'Lato', sans-serif", // Apply Lato font
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
    fontFamily: "'Lato', sans-serif",
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
    backgroundColor: "#BCFF00",
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
      <h3 style={{ fontFamily: "'Lato', sans-serif" }}>{title}</h3>
      <div style={overlayStyle}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project2;
  