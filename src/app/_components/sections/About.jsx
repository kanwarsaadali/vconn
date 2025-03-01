// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const items = [
//     "Fragmented IT Ecosystem",
//     "Evolving Cyber Threats",
//     "Complex Cloud Migrations",
//     "Service Downtime Risks",
//     "Regulatory Compliance Gaps",
//     "Lack of Actionable Insights",
//   ];

//   // Define positions for the floating boxes
//   const positions = [
//     { top: "15%", left: "20%" },
//     { top: "15%", right: "20%" },
//     { bottom: "15%", left: "20%" },
//     { bottom: "15%", right: "20%" },
//     { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
//     { top: "5%", left: "50%", transform: "translateX(-50%)" },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Central Animated GIF */}
//       <motion.img
//         src="/icon1.gif" // Update with your actual GIF path
//         alt="Signal Animation"
//         style={styles.gif}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       />

//       {/* Positioned Floating Items with Lines */}
//       <div style={styles.overlay}>
//         {items.map((text, index) => (
//           <div key={index} style={{ ...styles.boxContainer, ...positions[index] }}>
//             {/* Animated Connecting Line */}
//             <motion.div
//               style={{
//                 ...styles.line,
//                 height: positions[index].top ? "100px" : "80px", // Adjust line length dynamically
//               }}
//               initial={{ opacity: 0, scaleY: 0 }}
//               animate={{ opacity: 1, scaleY: 1 }}
//               transition={{ delay: index * 0.2, duration: 1 }}
//             />
//             {/* Floating Box */}
//             <motion.div
//               style={styles.box}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               {text}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0C141F",
//     padding: "80px 20px",
//     minHeight: "600px",
//     position: "relative",
//   },
//   overlay: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },
//   gif: {
//     width: "150px",
//     height: "150px",
//     zIndex: 10,
//     position: "relative",
//   },
//   boxContainer: {
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: "16px",
//     textAlign: "center",
//     borderRadius: "12px",
//     padding: "15px 20px",
//     maxWidth: "220px",
//     whiteSpace: "nowrap",
//     position: "relative",
//   },
//   line: {
//     position: "absolute",
//     width: "2px",
//     background: "linear-gradient(to bottom, green, transparent)",
//     transformOrigin: "top center",
//     left: "50%",
//     top: "-50px",
//     animation: "glow 1.5s infinite alternate",
//   },
// };

// export default AboutSection;




// "use client";
// import React, { useState, useEffect } from "react";

// const Leaderboard = () => {
//   const data = [
//     {
//       name: "Fragmented IT Ecosystem",
//       score: "99.9%",
//       description:
//         "Check Point achieves the highest threat prevention rates across all categories in Miercom’s 2025 Enterprise and Hybrid Mesh Firewall Security Report.",
//     },
//     {
//       name: "Evolving Cyber Threats",
//       score: "90.9%",
//       description:
//         "Zscaler provides advanced cloud security solutions with strong malware prevention capabilities.",
//     },
//     {
//       name: "Complex Cloud Migrations",
//       score: "87.7%",
//       description:
//         "Fortinet offers integrated security solutions with a focus on firewall protection and secure networking.",
//     },
//     {
//       name: "Service Downtime Risks",
//       score: "67.1%",
//       description:
//         "Cisco delivers enterprise-grade security solutions, emphasizing network security and threat intelligence.",
//     },
//     {
//       name: "Regulatory Compliance Gaps",
//       score: "62.7%",
//       description:
//         "Palo Alto Networks focuses on next-generation firewall protection and AI-driven threat prevention.",
//     },
//   ];

//   const [selectedCompany, setSelectedCompany] = useState(data[0]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setSelectedCompany(data[activeIndex]);
//   }, [activeIndex]);

//   return (
//     <div style={styles.container}>
//       {/* Left - Leaderboard Section */}
//       <div style={styles.leaderboard}>
//         {data.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.item,
//               backgroundColor: index === activeIndex ? "rgb(38, 144, 193)" : "#D3D3D3",
//               color: index === activeIndex ? "#fff" : "#333",
//               fontSize: index === activeIndex ? "22px" : "18px",
//               borderTopRightRadius: "40px",
//               borderBottomRightRadius: "40px",
//               padding: index === activeIndex ? "20px 40px" : "15px 35px",
//             }}
//             onMouseEnter={() => setActiveIndex(index)}
//           >
//             <span style={{ fontWeight: "bold" }}>{item.name}</span>
//             <span style={styles.score}>{item.score}</span>
//           </div>
//         ))}
//       </div>

//       {/* Right - Dynamic Content */}
//       <div style={styles.content}>
//         <h2 style={styles.heading}>{selectedCompany.name}</h2>
//         <p style={styles.paragraph}>{selectedCompany.description}</p>
//         {/* <button style={styles.button}>VIEW MIERCOM REPORT</button> */}
//       </div>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "50px",
//     backgroundColor: "rgb(12, 20, 31)",
//     flexWrap: "wrap",
//   },
//   leaderboard: {
//     width: "60%", // ✅ Increased width for better spacing
//     maxWidth: "600px", // ✅ Adjusted max width for better responsiveness
//   },
//   item: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "12px",
//     borderRadius: "8px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease-in-out",
//     cursor: "pointer",
//     boxShadow: "2px 4px 6px rgba(0,0,0,0.1)",
//     width: "100%", // ✅ Increased width for full stretch
//   },
//   score: {
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
//   content: {
//     width: "40%",
//     maxWidth: "500px",
//   },
//   heading: {
//     fontSize: "26px",
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   paragraph: {
//     fontSize: "16px",
//     color: "#ccc",
//     lineHeight: "1.5",
//   },
//   button: {
//     backgroundColor: "rgb(230, 0, 90)",
//     color: "white",
//     border: "none",
//     padding: "12px 20px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "20px",
//     borderRadius: "30px",
//     transition: "background 0.3s ease-in-out",
//   },
// };

// export default Leaderboard;

<<<<<<< HEAD
// "use client";
// import React from 'react';
// import useMediaQuery from '../../hooks/useMediaQuery';

// const AboutSection = () => {
//   const isScreenAbove1440 = useMediaQuery("(min-width: 1440px)");
//   const isScreenBelow769 = useMediaQuery("(max-width: 769px)");
//   return (
//     <div className="row justify-content-center" style={{backgroundColor:"rgb(12, 20, 31)"}}>
//       <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
//         <div className="d-flex flex-column flex-md-row" style={styles.flexContainer}>
//           <div className="col-md-5 px-4" style={styles.leftColumnWrapper}>
//             <div className="h-100 w-100" style={styles.leftColumn}>
//               <img
//                 src="/img/photo/vr1.webp"
//                 alt="Digital Transformation"
//                 style={styles.image}
//               />
//               <div className="d-flex justify-content-center align-items-center" style={styles.tagline}>
//                 <span style={{ textAlign: "center" }}>
//                   <span style={styles.highlight}>10+ years of expertise</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7" style={styles.rightColumn}>
//             <h1 style={styles.heading}>ONE SOLUTION TO YOUR IT CHALLENGES</h1>
//             <p style={styles.paragraph}>
//               From hardware failure to software compatibility and more, your business faces tremendous challenges. Let our professional IT architects help you in:
//             </p>
//             <div style={styles.grid}>
//               {gridData.map((item, index) => (
//                 <div key={index} style={styles.gridItem}>
//                   <div style={styles.iconBox}>
//                     <img src={item.icon} alt={item.title} style={styles.icon} />
//                   </div>
//                   <span style={styles.highlightedText}>{item.title}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={styles.cta}>
//               <span style={{ color: "white"  }} className=''>DISCOVER OUR SERVICES</span>
//               <span style={{ ...styles.arrow, ...styles.iconBox, backgroundColor: "", width: "60px" }}>→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/about1 1.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/img/icons/about2 1.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/img/icons/about3 1.png' },
//   { title: 'Ensuring continuous availability', icon: '/img/icons/about4 1.png' },
//   { title: 'Adhering regulatory demands', icon: '/img/icons/about5 1.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/img/icons/about6 1.png' },
// ];

// const styles = {
//   container: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: '2rem',
//   },
//   flexContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   leftColumnWrapper: {
//     position: 'relative',
//     flex: 1,
//     maxWidth: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   leftColumn: {
//     position: 'relative',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '10px',
//     objectFit: 'cover',
//   },
//   tagline: {
//     position: 'absolute',
//     bottom: '10px',
//     left: '10px',
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
//   highlight: {
//     color: '#17283E',
//   },
//   rightColumn: {
//     flex: 1,
//     padding: '0 1.5rem',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem',
//     color: "white",
//   },
//   paragraph: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
//     color:"white"
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '1rem',
//     marginBottom: '1.5rem',
//   },
//   gridItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     padding: '0.5rem',
//     borderRadius: '5px',
//     justifyContent: 'center',
//   },
//   iconBox: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '64px',
//     height: '64px',
//   },
//   highlightedText: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: "rgb(188, 255, 0)",
//     padding: '0.5rem',
//     borderRadius: '5px',
//     height:"100px",
//     display:"flex",
//     alignItems:"center"
//   },
//   cta: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//   },
//   arrow: {
//     fontSize: '1.2rem',
//     color: '#D4FF00',
//   },
//   // Media Queries
//   '@media (max-width: 768px)': {
//     flexContainer: {
//       flexDirection: 'column',
//     },
//     grid: {
//       gridTemplateColumns: '1fr',
//     },
//     heading: {
//       fontSize: '1.8rem',
//     },
//     image: {
//       height: '250px',
//       objectFit: 'cover',
//     },
//     tagline: {
//       fontSize: '1rem',
//       bottom: '5px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       padding: '0.5rem',
//     },
//   },
//   '@media (max-width: 480px)': {
//     image: {
//       height: '200px',
//     },
//     heading: {
//       fontSize: '1.5rem',
//     },
//     grid: {
//       gridTemplateColumns: '1fr',
//     },
//     tagline: {
//       fontSize: '0.9rem',
//       padding: '0.4rem',
//     },
//     cta: {
//       flexDirection: 'column',
//       fontSize: '0.9rem',
//     },
//   },
// };

// export default AboutSection;


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const items = [
//     "Fragmented IT Ecosystem",
//     "Evolving Cyber Threats",
//     "Complex Cloud Migrations",
//     "Service Downtime Risks",
//     "Regulatory Compliance Gaps",
//     "Lack of Actionable Insights",
//   ];

//   // Define positions around the central animation
//   const positions = [
//     { top: "30%", left: "20%" }, // Top-left
//     { top: "30%", left: "50%", transform: "translateX(-50%)" }, // Top-center
//     { top: "30%", right: "20%" }, // Top-right
//     { bottom: "30%", left: "20%" }, // Bottom-left
//     { bottom: "30%", left: "50%", transform: "translateX(-50%)" }, // Bottom-center
//     { bottom: "30%", right: "20%" }, // Bottom-right
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#0C141F",
//         padding: "80px 20px",
//         minHeight: "600px",
//         position: "relative",
//       }}
//     >
//       {/* Central Animated GIF */}
//       <motion.img
//         src="/icon1.gif"
//         alt="Signal Animation"
//         style={{
//           width: "150px",
//           height: "150px",
//           zIndex: 10,
//           position: "relative",
//         }}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       />

//       {/* Positioned Floating Items */}
//       <div style={{ position: "absolute", width: "100%", height: "100%" }}>
//         {items.map((text, index) => (
//           <motion.div
//             key={index}
//             style={{
//               position: "absolute",
//               backgroundColor: "#A3E635",
//               color: "#000",
//               fontWeight: "bold",
//               fontSize: "16px",
//               textAlign: "center",
//               borderRadius: "12px",
//               padding: "15px 20px",
//               boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
//               maxWidth: "220px",
//               whiteSpace: "nowrap",
//               ...positions[index], // Assign predefined positions
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             {text}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const items = [
//     "Fragmented IT Ecosystem",
//     "Evolving Cyber Threats",
//     "Complex Cloud Migrations",
//     "Service Downtime Risks",
//     "Regulatory Compliance Gaps",
//     "Lack of Actionable Insights",
//   ];

//   // Define positions for the floating boxes
//   const positions = [
//     { top: "15%", left: "20%" },
//     { top: "15%", right: "20%" },
//     { bottom: "15%", left: "20%" },
//     { bottom: "15%", right: "20%" },
//     { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
//     { top: "5%", left: "50%", transform: "translateX(-50%)" },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Central Animated Signal */}
//       <motion.div
//         style={styles.signal}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       />

//       {/* Positioned Floating Items with Lines */}
//       <div style={styles.overlay}>
//         {items.map((text, index) => (
//           <div key={index} style={{ ...styles.boxContainer, ...positions[index] }}>
//             {/* Animated Dashed Line */}
//             <motion.div
//               style={styles.dashedLine}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.2, duration: 1 }}
//             />
//             {/* Floating Box */}
//             <motion.div
//               style={styles.box}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               {text}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0C141F",
//     padding: "80px 20px",
//     minHeight: "600px",
//     position: "relative",
//   },
//   overlay: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },
//   signal: {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     background: "radial-gradient(circle, #94ff00 30%, transparent 60%)",
//     position: "relative",
//     zIndex: 10,
//   },
//   boxContainer: {
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     backgroundColor: "#A3E635",
//     color: "#000",
//     fontWeight: "bold",
//     fontSize: "16px",
//     textAlign: "center",
//     borderRadius: "12px",
//     padding: "15px 20px",
//     boxShadow: "0 0 15px #A3E635",
//     maxWidth: "220px",
//     whiteSpace: "nowrap",
//     position: "relative",
//   },
//   dashedLine: {
//     position: "absolute",
//     width: "2px",
//     height: "50px",
//     background: "linear-gradient(to bottom, #A3E635, transparent)",
//     animation: "glow 1.5s infinite alternate",
//   },
// };

// export default AboutSection;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const items = [
//     "Fragmented IT Ecosystem",
//     "Evolving Cyber Threats",
//     "Complex Cloud Migrations",
//     "Service Downtime Risks",
//     "Regulatory Compliance Gaps",
//     "Lack of Actionable Insights",
//   ];

//   // Define positions for the floating boxes
//   const positions = [
//     { top: "15%", left: "20%" },
//     { top: "15%", right: "20%" },
//     { bottom: "15%", left: "20%" },
//     { bottom: "15%", right: "20%" },
//     { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
//     { top: "5%", left: "50%", transform: "translateX(-50%)" },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Central Animated GIF */}
//       <motion.img
//         src="/icon1.gif" // Update with your actual GIF path
//         alt="Signal Animation"
//         style={styles.gif}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       />

//       {/* Positioned Floating Items with Lines */}
//       <div style={styles.overlay}>
//         {items.map((text, index) => (
//           <div key={index} style={{ ...styles.boxContainer, ...positions[index] }}>
//             {/* Animated Dashed Line */}
//             <motion.div
//               style={styles.dashedLine}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.2, duration: 1 }}
//             />
//             {/* Floating Box */}
//             <motion.div
//               style={styles.box}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               {text}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0C141F",
//     padding: "80px 20px",
//     minHeight: "600px",
//     position: "relative",
//   },
//   overlay: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },
//   gif: {
//     width: "150px",
//     height: "150px",
//     zIndex: 10,
//     position: "relative",
//   },
//   boxContainer: {
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // backgroundColor: "#1E1E1E", // Dark color to replace green
//     color: "#FFFFFF", // White text for contrast
//     fontWeight: "bold",
//     fontSize: "16px",
//     textAlign: "center",
//     borderRadius: "12px",
//     padding: "15px 20px",
//     // boxShadow: "0 0 15px #555555",
//     maxWidth: "220px",
//     whiteSpace: "nowrap",
//     position: "relative",
//   },
//   dashedLine: {
//     position: "absolute",
//     width: "2px",
//     height: "50px",
//     background: "linear-gradient(to bottom, #FFF, transparent)",
//     animation: "glow 1.5s infinite alternate",
//   },
// };

// export default AboutSection;


"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const items = [
    "Fragmented IT Ecosystem",
    "Evolving Cyber Threats",
    "Complex Cloud Migrations",
    "Service Downtime Risks",
    "Regulatory Compliance Gaps",
    "Lack of Actionable Insights",
  ];

  // Define positions for the floating boxes
  const positions = [
    { top: "15%", left: "20%" },
    { top: "15%", right: "20%" },
    { bottom: "15%", left: "20%" },
    { bottom: "15%", right: "20%" },
    { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
    { top: "5%", left: "50%", transform: "translateX(-50%)" },
  ];

  return (
    <div style={styles.container}>
      {/* Central Animated GIF */}
      <motion.img
        src="/icon1.gif" // Update with your actual GIF path
        alt="Signal Animation"
        style={styles.gif}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Positioned Floating Items with Lines */}
      <div style={styles.overlay}>
        {items.map((text, index) => (
          <div key={index} style={{ ...styles.boxContainer, ...positions[index] }}>
            {/* Animated Connecting Line */}
            <motion.div
              style={{
                ...styles.line,
                height: positions[index].top ? "100px" : "80px", // Adjust line length dynamically
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            />
            {/* Floating Box */}
            <motion.div
              style={styles.box}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {text}
            </motion.div>
          </div>
        ))}
=======
import { color } from "framer-motion";
import React from "react";

const AboutCompany = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          ABOUT COMPANY
        </h2>
        <div style={styles.line}></div>
        <p style={styles.description}>
     Because we believe the more you need technology to fuel your business, the requirement for potential expertise in the respective domain arises. We have led the effort to enhance the way managed services are provided. VConn has adapted innovative technologies and implemented digital transformation when required to enhance and boost business of our respective clients. This has lead our clients to achieve success and immense customer pleasure.
        </p>
        {/* <button style={styles.button}>Learn More ↗</button> */}
>>>>>>> 2d17da2 (update code)
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "rgb(12, 20, 31)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    textAlign: "center",
  },
  container: {
<<<<<<< HEAD
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C141F",
    padding: "80px 20px",
    minHeight: "600px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  gif: {
    width: "150px",
    height: "150px",
    zIndex: 10,
    position: "relative",
  },
  boxContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "center",
    borderRadius: "12px",
    padding: "15px 20px",
    maxWidth: "220px",
    whiteSpace: "nowrap",
    position: "relative",
  },
  line: {
    position: "absolute",
    width: "2px",
    background: "linear-gradient(to bottom, green, transparent)",
    transformOrigin: "top center",
    left: "50%",
    top: "-50px",
    animation: "glow 1.5s infinite alternate",
=======
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "40px", // Increased from 35px
    fontWeight: "400",
    color: "rgb(188, 255, 0)",
    fontFamily: "'Lato', sans-serif",
  },
  bold: {
    fontWeight: "700",
  },
  line: {
    width: "50px",
    height: "3px",
    margin: "10px auto",
  },
  description: {
    fontSize: "20px", // Increased from 16px
    color: "white",
    lineHeight: "1.8", // Adjusted for better readability
    marginTop: "20px",
    fontFamily: "'Lato', sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "14px 28px", // Slightly bigger button
    fontSize: "18px", // Increased for better visibility
    fontWeight: "bold",
    color: "#333",
    border: "2px solid #333",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
>>>>>>> 2d17da2 (update code)
  },
};


export default AboutCompany;
