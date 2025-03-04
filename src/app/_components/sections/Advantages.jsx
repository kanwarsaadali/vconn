// "use client"; // Add this line at the top of your component

// import React, { useState, useEffect, useRef } from "react";
// import Data from "@data/sections/advantages.json"; // Importing the data

// const AdvantagesSection = () => {
//   const [countedStats, setCountedStats] = useState(
//     Data.map(() => 0) // Initialize all stats to 0
//   );
//   const [isInView, setIsInView] = useState(false); // State to track if the section is in view
//   const sectionRef = useRef(null); // Reference to the section DOM element

//   // IntersectionObserver to detect when the section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setIsInView(true); // The section is in view
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is in view
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Counter effect when the section is in view
//   useEffect(() => {
//     if (isInView) {
//       const intervals = Data.map((_, index) => {
//         const target = Data[index].number;
//         let currentCount = 0;

//         return setInterval(() => {
//           if (currentCount < target) {
//             currentCount++;
//             setCountedStats((prevStats) => {
//               const newStats = [...prevStats];
//               newStats[index] = currentCount;
//               return newStats;
//             });
//           } else {
//             clearInterval(intervals[index]);
//           }
//         }, 150); // Slower interval of 150ms for smoother animation
//       });

//       return () => {
//         intervals.forEach(clearInterval);
//       };
//     }
//   }, [isInView]);

//   // Styles for the section
//   const styles = {
//     businessGrowth: {
//       backgroundColor: "#ffffff",
//       padding: "60px 20px",
//       textAlign: "center",
//       backgroundImage: "url('/img/photo/BGgrayNet.webp')", // Set your background image URL here
//       backgroundSize: "cover", // Ensure the background image covers the whole section
//       backgroundPosition: "center", // Center the image
//       backgroundAttachment: "fixed", // Optional: makes the background image fixed when scrolling
//       marginTop: "40px",
//     },
//     growthHeading: {
//       marginBottom: "30px",
//     },
//     growthHeadingTitle: {
//       fontSize: "55px",
//       fontWeight: 700,
//       color: "#17283E",
//       lineHeight: 1.3,
//       backgroundColor: "transparent", // Make sure the background for the heading is transparent
//     },
//     growthStats: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       background: "#1b2942",
//       borderRadius: "12px",
//       overflow: "hidden",
//       color: "white",
//       padding: "20px",
//       flexWrap: "wrap",  // Allow for wrapping on smaller screens
//     },
//     statItem: {
//       flex: "1 1 250px",  // Ensure each stat item is flexible and takes 250px minimum width, but can grow
//       padding: "20px",
//       textAlign: "center",
//       position: "relative",
//       minWidth: "250px", // Minimum width to avoid too much shrinking
//       marginBottom: "20px", // Add bottom margin for spacing between items in mobile view
//     },
//     statItemHeading: {
//       fontSize: "88px",
//       fontWeight: "bold",
//       color: "#7dc10d",
//       marginBottom: "10px",
//     },
//     statItemParagraph: {
//       fontSize: "22px",
//       lineHeight: 1.5,
//       fontWeight: 500,
//       color: "#f0f0f0",
//     },
//     statItemAfter: {
//       content: "''",
//       position: "absolute",
//       top: "0",
//       right: "0",
//       width: "4px",
//       height: "100%",
//       background: "repeating-linear-gradient(to bottom right, rgb(188, 255, 0), rgb(188, 255, 0) 5px, #1b2942 5px, #1b2942 10px)",
//       transform: "skewX(-45deg)",
//     },
//     servicesHeading: {
//       marginTop: "40px",
//     },
//     servicesHeadingTitle: {
//       fontSize: "18px",
//       fontWeight: 700,
//       textTransform: "uppercase",
//       marginBottom: "10px",
//     },
//     servicesUnderline: {
//       width: "120px",
//       height: "4px",
//       background: "repeating-linear-gradient(to right, rgb(188, 255, 0), rgb(188, 255, 0) 10px, transparent 10px, transparent 20px)",
//       margin: "10px auto",
//     },
//     // Mobile Responsiveness
//     "@media (max-width: 768px)": {
//       businessGrowth: {
//         padding: "40px 15px",
//       },
//       growthHeadingTitle: {
//         fontSize: "36px",
//       },
//       growthStats: {
//         flexDirection: "column", // Stack items vertically on smaller screens
//         padding: "20px 10px",
//       },
//       statItemAfter: {
//         display: "none", // Hide the after pseudo element on mobile
//       },
//       statItem: {
//         padding: "15px",
//         minWidth: "auto",
//         marginBottom: "20px", // Space between stacked items
//       },
//       statItemHeading: {
//         fontSize: "36px", // Smaller font on mobile
//       },
//       statItemParagraph: {
//         fontSize: "14px", // Adjust font size on mobile
//       },
//       servicesHeadingTitle: {
//         fontSize: "16px", // Smaller text on mobile
//       },
//     },

//     "@media (max-width: 576px)": {
//       businessGrowth: {
//         padding: "30px 10px", // Reduce padding further on extra small devices
//       },
//       growthHeadingTitle: {
//         fontSize: "28px", // Further reduce heading size
//       },
//       growthStats: {
//         padding: "15px",
//       },
//       statItemHeading: {
//         fontSize: "32px", // Smaller font size for headings
//       },
//       statItemParagraph: {
//         fontSize: "12px", // Adjust paragraph font size for smaller screens
//       },
//       servicesHeadingTitle: {
//         fontSize: "14px", // Small font size for services on mobile
//       },
//     },

//     "@media (max-width: 992px)": {
//       growthHeadingTitle: {
//         fontSize: "42px", // Slightly smaller heading on medium devices
//       },
//       statItemHeading: {
//         fontSize: "42px", // Adjust heading size for tablets
//       },
//     },
//   };

//   return (
//     <div ref={sectionRef} style={styles.businessGrowth}>
//       <div style={styles.growthHeading}>
//         <h2 style={styles.growthHeadingTitle} className="mil-upper mil-up mil-mb-30">
//         Why Us
//         </h2>
//       </div>    

//       <div style={styles.growthStats}>
//         {Data.map((stat, index) => (
//           <div key={index} style={styles.statItem}>
//             <h3 style={styles.statItemHeading}>
//               {countedStats[index]}
//             </h3>
//             <p style={styles.statItemParagraph}>
//               {stat.title.split("\n").map((line, i) => (
//                 <React.Fragment key={i}>
//                   {line}
//                   <br />
//                 </React.Fragment>
//               ))}
//             </p>
//             {index !== Data.length - 1 && <div style={styles.statItemAfter}></div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdvantagesSection;


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.grid}>
//         {/* First large box */}
//         <div style={{ ...styles.box, ...styles.large }}>
//           <h3>5</h3>
//           <p>Continents Footprints</p>
//         </div>

//         {/* Second box */}
//         <div style={styles.box}>
//           <h3>24</h3>
//           <p>Working Hours</p>
//         </div>

//         {/* Third box */}
//         <div style={styles.box}>
//           <h3>10</h3>
//           <p>Years Experience</p>
//         </div>

//         {/* Fourth large box */}
//         <div style={{ ...styles.box, ...styles.large }}>
//           <h3>99</h3>
//           <p>Billion Cost Impact</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "100vw",
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#1b2942",
//     padding: "40px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "1.5fr 1fr",
//     gridTemplateRows: "1fr 1fr",
//     gap: "24px",
//     width: "100%",
//     maxWidth: "1200px",
//     height: "80vh",
//   },
//   box: {
//     background: "#f5deb3",
//     color: "#1b2942",
//     padding: "40px",
//     borderRadius: "12px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "24px",
//     fontWeight: "bold",
//     textAlign: "center",
//     transition: "transform 0.3s ease-in-out",
//   },
//   large: {
//     gridRow: "span 2",
//     height: "100%",
//   },
// };

// export default AdvantagesSection;


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section
//       style={{
//         backgroundColor: "rgb(12, 20, 31)",
//         color: "#fff",
//         padding: "50px 20px",
//         textAlign: "center",
//         position: "relative",
//       }}
//     >
//       {/* Title */}
//       <h2
//         style={{
//           color: "rgb(188, 255, 0)",
//           fontSize: "2.5rem",
//           fontWeight: "bold",
//           marginBottom: "20px",
//         }}
//       >
//         How we work
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "550px", // Adjust height as needed
//           backgroundImage: 'url("/img/covers/whyus.png")',
//           backgroundSize: "contain", // Ensures the full image is visible
//           backgroundRepeat: "no-repeat", // Prevents repeating the image
//           backgroundPosition: "center", // Centers the image
//         }}
//       ></div>
//     </section>
//   );
// };

// export default AdvantagesSection;


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section
//       style={{
//         backgroundColor: "rgb(12, 20, 31)",
//         color: "#fff",
//         padding: "50px 20px",
//         textAlign: "center",
//         position: "relative",
//         height: "100vh", // Full viewport height
//       }}
//     >
//       {/* Title */}
//       <h2
//         style={{
//           color: "rgb(188, 255, 0)",
//           fontSize: "3rem", // Increased font size for better visibility
//           fontWeight: "bold",
//           marginBottom: "30px", // Increased spacing
//         }}
//       >
//         WHY US
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "100%", // Increased height of the image section to take up more space
//           backgroundImage: 'url("/img/covers/whyus.png")',
//           backgroundSize: "cover", // Ensures the image covers the full section
//           backgroundPosition: "center", // Centers the image
//           backgroundRepeat: "no-repeat", // Prevents repeating the image
//         }}
//       ></div>
//     </section>
//   );
// };

// export default AdvantagesSection;


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section
//       style={{
//         backgroundColor: "rgb(12, 20, 31)",
//         color: "#fff",
//         padding: "50px 20px",
//         textAlign: "center",
//         position: "relative",
//       }}
//     >
//       {/* Title */}
//       <h2
//         style={{
//           color: "rgb(188, 255, 0)",
//           fontSize: "3rem",
//           fontWeight: "bold",
//           marginBottom: "30px",
//         }}
//       >
//         WHY US
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "900px", // Set a fixed height for visibility
//           minHeight: "100px", // Ensures a minimum height
//           backgroundImage: 'url("/img/covers/whyus.png")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div>
//     </section>
//   );
// };

// export default AdvantagesSection;

// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section style={styles.section}>
//       {/* Title */}
//       <h2 style={styles.title}>WHY US</h2>

//       {/* Background Image */}
//       <div className="background-image" style={styles.background}></div>

//       {/* Inline CSS for media queries */}
//       <style>
//         {`
//           .background-image {
//             background-size: contain !important; /* Prevents cropping */
//             background-position: top center !important;
//           }
          
//           @media (max-width: 1200px) {
//             .background-image {
//               height: 75vh !important;
//             }
//           }

//           @media (max-width: 1024px) {
//             .background-image {
//               height: 60vh !important;
//               background-size: contain !important;
//             }
//           }

//           @media (max-width: 768px) {
//             .background-image {
//               height: 50vh !important;
//               background-size: contain !important;
//             }
//           }

//           @media (max-width: 480px) {
//             .background-image {
//               height: 40vh !important;
//               background-size: contain !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// // Styles Object
// const styles = {
//   section: {
//     backgroundColor: "rgb(12, 20, 31)",
//     color: "#fff",
//     padding: "50px 20px",
//     textAlign: "center",
//     position: "relative",
//   },
//   title: {
//     color: "rgb(188, 255, 0)",
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "30px",
//   },
//   background: {
//     width: "100%",
//     height: "85vh", // Ensures visibility on full screen
//     minHeight: "300px", // Minimum visibility for small screens
//     backgroundImage: 'url("/img/covers/whyus.png")',
//     backgroundSize: "cover", // Prevents distortion
//     backgroundPosition: "center", // Centers the image
//     backgroundRepeat: "no-repeat",
//   },
// };

// export default AdvantagesSection;


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         {/* Single Statistic */}
//         <div style={styles.statBox}>
//           <img src=""/>
//           <h2 style={styles.number}>5</h2>
//           <p style={styles.label}>Continents Footprint</p>
//         </div>

//         <div style={styles.statBox}>
//           <h2 style={styles.number}>10+</h2>
//           <p style={styles.label}>Years Experience</p>
//         </div>

//         <div style={styles.statBox}>
//           <h2 style={styles.number}>24/7</h2>
//           <p style={styles.label}>Working Hours</p>
//         </div>

//         {/* New Statistic Box */}
//         <div style={styles.statBox}>
//           <h2 style={styles.number}>99+</h2>
//           <p style={styles.label}>Billion Cost Impact</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   section: {
//     backgroundColor: "rgb(12, 20, 31)", // White background
//     padding: "50px 20px",
//     textAlign: "center",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap",
//     gap: "20px",
//   },
//   statBox: {
//     flex: "1",
//     minWidth: "200px",
//     textAlign: "center",
//     padding: "20px",
//     borderRight: "2px solid #ddd",
//   },
//   number: {
//     fontSize: "4rem",
//     fontWeight: "bold",
//     color: "rgb(188, 255, 0)",
//     marginBottom: "5px",
//   },
//   label: {
//     fontSize: "1rem",
//     color: "white",
//   },
// };

// // Remove last border on small screens
// const mediaQuery = `
//   @media (max-width: 768px) {
//     .statBox {
//       border-right: none !important;
//       border-bottom: 2px solid #ddd;
//     }
//     .statBox:last-child {
//       border-bottom: none;
//     }
//   }
// `;

// export default () => (
//   <>
//     <style>{mediaQuery}</style>
//     <AdvantagesSection />
//   </>
// );


// import React from "react";

// const AdvantagesSection = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         {/* Single Statistic */}
//         <div style={styles.statBox}>
//           <img src="/img/icons/map.png" alt="Continents" style={{width:"100px", height:"50px" ,marginBottom:"10px"}} />
//           <h2 style={styles.number}>5</h2>
//           <p style={styles.label}>Continents Footprint</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/user.png" alt="Experience" style={styles.icon} />
//           <h2 style={styles.number}>10+</h2>
//           <p style={styles.label}>Years Experience</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/clock.png" alt="Working Hours" style={styles.icon} />
//           <h2 style={styles.number}>24/7</h2>
//           <p style={styles.label}>Working Hours</p>
//         </div>

//         {/* New Statistic Box */}
//         <div style={styles.statBox}>
//           <img src="/img/icons/dollar.png" alt="Cost Impact" style={styles.icon} />
//           <h2 style={styles.number}>99+</h2>
//           <p style={styles.label}>Billion Cost Impact</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   section: {
//     backgroundColor: "rgb(12, 20, 31)", // Dark background
//     padding: "50px 20px",
//     textAlign: "center",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap",
//     gap: "20px",
//   },
//   statBox: {
//     flex: "1",
//     minWidth: "200px",
//     textAlign: "center",
//     padding: "20px",
//     // borderRight: "2px solid #ddd",
//   },
//   icon: {
//     width: "50px", // Adjust icon size
//     height: "50px",
//     marginBottom: "10px",
//   },
//   number: {
//     fontSize: "4rem",
//     fontWeight: "bold",
//     color: "rgb(188, 255, 0)",
//     marginBottom: "5px",
//   },
//   label: {
//     fontSize: "1rem",
//     color: "white",
//   },
// };

// // Remove last border on small screens
// const mediaQuery = `
//   @media (max-width: 768px) {
//     .statBox {
//       border-right: none !important;
//       border-bottom: 2px solid #ddd;
//     }
//     .statBox:last-child {
//       border-bottom: none;
//     }
//   }
// `;

// export default () => (
//   <>
//     <style>{mediaQuery}</style>
//     <AdvantagesSection />
//   </>
// );

// import React, { useEffect, useRef } from "react";

// const AdvantagesSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const sectionElement = sectionRef.current;
//     if (sectionElement) {
//       observer.observe(sectionElement);
//     }

//     return () => {
//       if (sectionElement) {
//         observer.unobserve(sectionElement);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} style={styles.section} className="fade-in">
//       <div style={styles.container}>
//         <div style={styles.statBox}>
//           <img src="/img/icons/map.png" alt="Continents" style={{ width: "100px", height: "50px", marginBottom: "10px" }} />
//           <h2 style={styles.number}>5</h2>
//           <p style={styles.label}>Continents Footprint</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/user.png" alt="Experience" style={styles.icon} />
//           <h2 style={styles.number}>10+</h2>
//           <p style={styles.label}>Years Experience</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/clock.png" alt="Working Hours" style={styles.icon} />
//           <h2 style={styles.number}>24/7</h2>
//           <p style={styles.label}>Working Hours</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/dollar.png" alt="Cost Impact" style={styles.icon} />
//           <h2 style={styles.number}>99+</h2>
//           <p style={styles.label}>Billion Cost Impact</p>
//         </div>
//       </div>
//       <style>{fadeInStyles}</style>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//     textAlign: "center",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap",
//     gap: "20px",
//   },
//   statBox: {
//     flex: "1",
//     minWidth: "200px",
//     textAlign: "center",
//     padding: "20px",
//   },
//   icon: {
//     width: "50px",
//     height: "50px",
//     marginBottom: "10px",
//   },
//   number: {
//     fontSize: "4rem",
//     fontWeight: "bold",
//     color: "rgb(188, 255, 0)",
//     marginBottom: "5px",
//   },
//   label: {
//     fontSize: "1rem",
//     color: "white",
//   },
// };

// const fadeInStyles = `
//   .fade-in {
//     opacity: 0;
//     transform: translateY(30px);
//     transition: opacity 1s ease-out, transform 1s ease-out;
//   }
//   .fade-in-visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   @media (max-width: 768px) {
//     .statBox {
//       border-right: none !important;
//       border-bottom: 2px solid #ddd;
//     }
//     .statBox:last-child {
//       border-bottom: none;
//     }
//   }
// `;

// export default AdvantagesSection;


// import React, { useEffect, useRef } from "react";

// const AdvantagesSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const sectionElement = sectionRef.current;
//     if (sectionElement) {
//       observer.observe(sectionElement);
//     }

//     return () => {
//       if (sectionElement) {
//         observer.unobserve(sectionElement);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} style={styles.section} className="fade-in">
//       <div style={styles.container}>
//         <div style={styles.statBox}>
//           <img src="/img/icons/map.png" alt="Continents" style={styles.icon} />
//           <h2 style={styles.number}>5</h2>
//           <p style={styles.label}>Continents Footprint</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/user.png" alt="Experience" style={styles.icon} />
//           <h2 style={styles.number}>10+</h2>
//           <p style={styles.label}>Years Experience</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/clock.png" alt="Working Hours" style={styles.icon} />
//           <h2 style={styles.number}>24/7</h2>
//           <p style={styles.label}>Working Hours</p>
//         </div>

//         <div style={styles.statBox}>
//           <img src="/img/icons/dollar.png" alt="Cost Impact" style={styles.icon} />
//           <h2 style={styles.number}>99+</h2>
//           <p style={styles.label}>Billion Cost Impact</p>
//         </div>
//       </div>
//       <style>{fadeInStyles}</style>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//     textAlign: "center",
//     fontFamily: "Lato, sans-serif",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap",
//     gap: "20px",
//   },
//   statBox: {
//     flex: "1",
//     minWidth: "200px",
//     textAlign: "center",
//     padding: "20px",
//   },
//   icon: {
//     width: "50px",
//     height: "50px",
//     marginBottom: "10px",
//   },
//   number: {
//     fontSize: "4rem",
//     fontWeight: "bold",
//     color: "rgb(188, 255, 0)",
//     marginBottom: "5px",
//     fontFamily: "Lato, sans-serif",
//   },
//   label: {
//     fontSize: "1rem",
//     color: "white",
//     fontFamily: "Lato, sans-serif",
//   },
// };

// const fadeInStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
//   .fade-in {
//     opacity: 0;
//     transform: translateY(30px);
//     transition: opacity 1s ease-out, transform 1s ease-out;
//     font-family: 'Lato', sans-serif;
//   }
//   .fade-in-visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   @media (max-width: 768px) {
//     .statBox {
//       border-right: none !important;
//       border-bottom: 2px solid #ddd;
//     }
//     .statBox:last-child {
//       border-bottom: none;
//     }
//   }
// `;

// export default AdvantagesSection;


import React, { useEffect, useRef } from "react";

const AdvantagesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} style={styles.section} className="fade-in">
      <h2 style={styles.heading}>WHY US</h2> {/* Added heading */}
      <div style={styles.line}></div> {/* Optional underline effect */}
      <div style={styles.container}>
        <div style={styles.statBox}>
          <img src="/img/icons/map.png" alt="Continents" style={styles.icon} />
          <h2 style={styles.number}>5</h2>
          <p style={styles.label}>Continents Footprint</p>
        </div>

        <div style={styles.statBox}>
          <img src="/img/icons/user.png" alt="Experience" style={styles.icon} />
          <h2 style={styles.number}>10+</h2>
          <p style={styles.label}>Years Experience</p>
        </div>

        <div style={styles.statBox}>
          <img src="/img/icons/clock.png" alt="Working Hours" style={styles.icon} />
          <h2 style={styles.number}>24/7</h2>
          <p style={styles.label}>Working Hours</p>
        </div>

        <div style={styles.statBox}>
          <img src="/img/icons/dollar.png" alt="Cost Impact" style={styles.icon} />
          <h2 style={styles.number}>99+</h2>
          <p style={styles.label}>Billion Cost Impact</p>
        </div>
      </div>
      <style>{fadeInStyles}</style>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "rgb(12, 20, 31)",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Lato, sans-serif",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    color: "rgb(188, 255, 0)",
    fontFamily: "'Lato', sans-serif",
    marginBottom: "10px",
  },
  line: {
    width: "80px",
    height: "3px",
    // backgroundColor: "rgb(188, 255, 0)",
    margin: "10px auto 30px auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "20px",
  },
  statBox: {
    flex: "1",
    minWidth: "200px",
    textAlign: "center",
    padding: "20px",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  number: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "rgb(188, 255, 0)",
    marginBottom: "5px",
    fontFamily: "Lato, sans-serif",
  },
  label: {
    fontSize: "1rem",
    color: "white",
    fontFamily: "Lato, sans-serif",
  },
};

const fadeInStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
    font-family: 'Lato', sans-serif;
  }
  .fade-in-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    .statBox {
      border-right: none !important;
      border-bottom: 2px solid #ddd;
    }
    .statBox:last-child {
      border-bottom: none;
    }
  }
`;

export default AdvantagesSection;
