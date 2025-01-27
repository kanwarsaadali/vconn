// import React from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
//     { icon: "/img/icons/SERVICE 1_9.png", title: "Box 9", description: "Scalable Governance System" },
//   ];

//   const containerStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)", // 3 boxes per row
//     gap: "20px",
//     padding: "20px",
//     backgroundColor: "#111", // Dark background color
//   };

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "rgb(188, 255, 0)", // Card background color
//     color: "black", // Text color
//     padding: "20px",
//     borderRadius: "8px",
//     textAlign: "center",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   };

//   const titleStyle = {
//     margin: "10px 0 5px",
//   };

//   const descriptionStyle = {
//     margin: "0",
//     fontSize: "14px",
//     fontWeight: "300",
//   };

//   return (
//     <div style={containerStyle}>
//       {items.map((item, index) => (
//         <div key={index} style={cardStyle}>
//           <Image src={item.icon} alt={item.title} width={64} height={64} />
//           <h3 style={titleStyle}>{item.title}</h3>
//           <p style={descriptionStyle}>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Project1;


// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
//     { icon: "/img/icons/SERVICE 1_9.png", title: "Box 9", description: "Scalable Governance System" },
//   ];

//   const containerStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)", // 3 boxes per row
//     gap: "24px", // Increased gap for better spacing
//     padding: "40px",
//     backgroundColor: "rgb(12, 20, 31)", // Darker background color for contrast
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "#BCFF00", // Neon green background
//     color: "#000", // Dark text for readability
//     padding: "30px 20px",
//     borderRadius: "12px", // Rounded corners
//     textAlign: "center",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Better shadow for depth
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     height:"300px",
//     width:"500px"
//   };

//   const cardHoverStyle = {
//     transform: "scale(1.05)", // Slight zoom on hover
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
//   };

//   const titleStyle = {
//     margin: "15px 0 8px",
//     fontSize: "18px",
//     fontWeight: "600",
//   };

//   const descriptionStyle = {
//     margin: "0",
//     fontSize: "14px",
//     fontWeight: "400",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       {items.map((item, index) => (
//         <Card
//           key={index}
//           icon={item.icon}
//           title={item.title}
//           description={item.description}
//           cardStyle={cardStyle}
//           cardHoverStyle={cardHoverStyle}
//           titleStyle={titleStyle}
//           descriptionStyle={descriptionStyle}
//         />
//       ))}
//     </div>
//   );
// };

// // Separate Card Component
// const Card = ({ icon, title, description, cardStyle, cardHoverStyle, titleStyle, descriptionStyle }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       style={{
//         ...cardStyle,
//         ...(hover ? cardHoverStyle : {}),
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Image src={icon} alt={title} width={64} height={64} />
//       <h3 style={titleStyle}>{title}</h3>
//       <p style={descriptionStyle}>{description}</p>
//     </div>
//   );
// };

// export default Project1;


// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
//     { icon: "/img/icons/SERVICE 1_9.png", title: "Box 9", description: "Scalable Governance System" },
//   ];

//   const containerStyle = {
//     display: "flex", // Use Flexbox for layout
//     justifyContent: "center", // Center horizontally
//     alignItems: "center", // Center vertically
//     height: "100vh", // Full viewport height
//     backgroundColor: "rgb(12, 20, 31)", // Dark background color
//     padding: "20px", // Optional padding for spacing
//     overflow: "hidden", // Prevent overflow behavior
//     boxSizing: "border-box",
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid columns
//     gap: "24px", // Gap between cards
//     maxWidth: "1200px", // Limit grid width
//     width: "100%", // Ensure full grid fits container
//   };

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center", // Center content vertically
//     alignItems: "center", // Center content horizontally
//     backgroundColor: "#BCFF00", // Neon green
//     color: "#000", // Text color
//     padding: "20px",
//     borderRadius: "12px", // Rounded corners
//     textAlign: "center",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Box shadow for depth
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     maxWidth: "100%", // Ensure card stays responsive
//     boxSizing: "border-box",
//   };

//   const cardHoverStyle = {
//     transform: "scale(1.05)", // Slight zoom on hover
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
//   };

//   const titleStyle = {
//     margin: "15px 0 8px",
//     fontSize: "18px",
//     fontWeight: "600",
//   };

//   const descriptionStyle = {
//     margin: "0",
//     fontSize: "14px",
//     fontWeight: "400",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={gridStyle}>
//         {items.map((item, index) => (
//           <Card
//             key={index}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//             cardStyle={cardStyle}
//             cardHoverStyle={cardHoverStyle}
//             titleStyle={titleStyle}
//             descriptionStyle={descriptionStyle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Separate Card Component
// const Card = ({ icon, title, description, cardStyle, cardHoverStyle, titleStyle, descriptionStyle }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       style={{
//         ...cardStyle,
//         ...(hover ? cardHoverStyle : {}),
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Image src={icon} alt={title} width={100} height={100} />
//       <h3 style={titleStyle}>{title}</h3>
//       <p style={descriptionStyle}>{description}</p>
//     </div>
//   );
// };

// export default Project1;


// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
//     { icon: "/img/icons/SERVICE 1_9.png", title: "Box 9", description: "Scalable Governance System" },
//   ];

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column", // Align content vertically
//     justifyContent: "center",
//     alignItems: "center",
//     height: "120vh", // Full viewport height
//     backgroundColor: "rgb(12, 20, 31)", // Dark background color
//     padding: "20px",
//     overflow: "hidden", // Prevent unwanted scrollbars
//     boxSizing: "border-box",
//   };

//   const headerStyle = {
//     marginBottom: "40px", // Spacing between the heading and the cards
//     fontSize: "36px", // Large heading size
//     fontWeight: "bold",
//     color: "#BCFF00", // Neon green heading color
//     textAlign: "center",
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid columns
//     gap: "24px",
//     maxWidth: "1200px",
//     width: "100%",
//   };

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#BCFF00", // Neon green
//     color: "#000", // Text color
//     padding: "20px",
//     borderRadius: "12px",
//     textAlign: "center",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     maxWidth: "100%",
//     boxSizing: "border-box",
//   };

//   const cardHoverStyle = {
//     transform: "scale(1.05)", // Slight zoom on hover
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
//   };

//   const titleStyle = {
//     margin: "15px 0 8px",
//     fontSize: "18px",
//     fontWeight: "600",
//   };

//   const descriptionStyle = {
//     margin: "0",
//     fontSize: "14px",
//     fontWeight: "400",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Heading */}
//       <h1 style={headerStyle}>PROJECT</h1>

//       {/* Card Grid */}
//       <div style={gridStyle}>
//         {items.map((item, index) => (
//           <Card
//             key={index}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//             cardStyle={cardStyle}
//             cardHoverStyle={cardHoverStyle}
//             titleStyle={titleStyle}
//             descriptionStyle={descriptionStyle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Separate Card Component
// const Card = ({ icon, title, description, cardStyle, cardHoverStyle, titleStyle, descriptionStyle }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       style={{
//         ...cardStyle,
//         ...(hover ? cardHoverStyle : {}),
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Image src={icon} alt={title} width={100} height={100} />
//       <h3 style={titleStyle}>{title}</h3>
//       <p style={descriptionStyle}>{description}</p>
//     </div>
//   );
// };

// export default Project1;



// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
//     // { icon: "/img/icons/SERVICE 1_9.png", title: "Box 9", description: "Scalable Governance System" },
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

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#BCFF00",
//     color: "#000",
//     padding: "20px",
//     borderRadius: "12px",
//     textAlign: "center",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     boxSizing: "border-box",
//     width: "100%", // Ensures proper resizing on smaller screens
//   };

//   const cardHoverStyle = {
//     transform: "scale(1.05)",
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
//   };

//   const titleStyle = {
//     margin: "15px 0 8px",
//     fontSize: "18px",
//     fontWeight: "600",
//   };

//   const descriptionStyle = {
//     margin: "0",
//     fontSize: "14px",
//     fontWeight: "400",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headerStyle}>PROJECT</h1>
//       <div style={gridStyle}>
//         {items.map((item, index) => (
//           <Card
//             key={index}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//             cardStyle={cardStyle}
//             cardHoverStyle={cardHoverStyle}
//             titleStyle={titleStyle}
//             descriptionStyle={descriptionStyle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, description, cardStyle, cardHoverStyle, titleStyle, descriptionStyle }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       style={{
//         ...cardStyle,
//         ...(hover ? cardHoverStyle : {}),
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Image src={icon} alt={title} width={100} height={100} />
//       <h3 style={titleStyle}>{title}</h3>
//       <p style={descriptionStyle}>{description}</p>
//     </div>
//   );
// };

// export default Project1;



// "use client"; // Mark this as a Client Component

// import React, { useState } from "react";
// import Image from "next/image";

// const Project1 = () => {
//   const items = [
//     { icon: "/img/icons/SERVICE 1_1.png", title: "DevShield", description: "Secure CI/CD Pipeline Accelerator" },
//     { icon: "/img/icons/SERVICE 1_2.png", title: "CodeGrid", description: "Automated Infrastructure-as-Code Framework" },
//     { icon: "/img/icons/SERVICE 1_3.png", title: "ComplianceSphere", description: "ISO 27001 Governance Hub" },
//     { icon: "/img/icons/SERVICE 1_4.png", title: "SentinelShield", description: "Unified Threat Detection and Response" },
//     { icon: "/img/icons/SERVICE 1_5.png", title: "MalwareVision", description: "Advanced Threat Prevention Hub" },
//     { icon: "/img/icons/SERVICE 1_6.png", title: "NetSecure 24x7", description: "Intelligent Network Defense" },
//     { icon: "/img/icons/SERVICE 1_7.png", title: "Box 7", description: "Additional Feature Hub" },
//     { icon: "/img/icons/SERVICE 1_8.png", title: "Box 8", description: "Custom Defense Mechanism" },
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
//     height: "330px", // Fixed height for uniformity
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
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//       <div style={overlayStyle}>
//         <p>Explore {title}!</p>
//       </div>
//     </div>
//   );
// };

// export default Project1;





"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Project2 = () => {
  const items = [
    { icon: "/img/icons/SERVICE 1_1.png", title: "Threat Detection and Response", description: "Real-time threat identification and mitigation." },
    { icon: "/img/icons/SERVICE 1_2.png", title: "Penetration Testing", description: "Simulated attacks to find vulnerabilities." },
    { icon: "/img/icons/SERVICE 1_3.png", title: "Advanced Malware Protection", description: "Protection against sophisticated malware." },
    { icon: "/img/icons/SERVICE 1_4.png", title: "Data Protection Services", description: "Encryption and secure data handling." },
    { icon: "/img/icons/SERVICE 1_5.png", title: "SOC as a Service", description: "Security monitoring and incident response." },
    { icon: "/img/icons/SERVICE 1_6.png", title: "Cybersecurity Implementation", description: "Deploying security measures and tools." },
    { icon: "/img/icons/SERVICE 1_7.png", title: "Dark Web Monitoring", description: "Scanning for exposed data on the dark web." },
    { icon: "/img/icons/SERVICE 1_8.png", title: "Red vs Blue Team Exercises", description: "Attack and defense simulation to test security." },
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

export default Project2;
