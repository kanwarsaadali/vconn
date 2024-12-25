// "use client";

// import { useState } from 'react';
// import Data from "@data/sections/about.json";
// import Link from "next/link";

// import ModalVideo from 'react-modal-video'
// import 'react-modal-video/css/modal-video.css'

// const AboutSection = () => {
//     const [isOpen, setOpen] = useState(false);

//     return (
//         <>
//             {/* about */}
//             <section className='py-5' style={{background:"#F8F8F8", marginTop:"-60px" }}>
//                 <div className="container  mil-p-0-30">
//                     <div className="mil-background-grid mil-softened" />

//                     <div className="row justify-content-between align-items-center flex-sm-row-reverse">
//                         <div className="col-lg-5">

//                             <div className="mil-mb-90">
//                                 {/* <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} /> */}
//                                 <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}}/>
//                                 <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
//                                 <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description1}} />
//                                 <a onClick={() => setOpen(true)} className="mil-link mil-upper mil-up has-popup-video" style={{ "cursor" : "pointer" }}>
//                                     {Data.button.label} 
//                                     <span className="mil-arrow"><img src="/img/icons/2.svg" alt="arrow" /></span>
//                                 </a>
//                             </div>

//                         </div>
//                         <div className="col-lg-6">

//                             <div className="mil-illustration mil-up mil-mb-90">
//                                 <div className="mil-image-frame">
//                                     <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
//                                 </div>
//                                 <div className="mil-about-counter">
//                                     {/* <h1 className="mil-counter mil-right mil-mb-10" data-number={Data.number.value}>0</h1> */}
//                                     <h5 className="mil-upper mil-right" dangerouslySetInnerHTML={{__html : Data.number.label}} />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.button.link.replace("https://www.youtube.com/watch?v=", "")} onClose={() => setOpen(false)} />
//             {/* about end */}
//         </>
//     );
//     const styles = {
//         container: {
//             display: "flex",
//             width: "100%", // Ensures the container spans the full width of the viewport
//             maxWidth: "none", // Removes the max-width restriction
//             margin: "0", // Removes margin to span full width
//             backgroundColor: "#fff",
//             padding: "40px 20px", // Adjust padding for more spacing
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//         },
//         leftSection: {
//             flex: 1,
//             padding: "20px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             borderRight: "1px solid #ddd",
//         },
//         leftTitle: {
//             fontSize: "28px", // Slightly larger font for titles
//             color: "#444",
//             marginBottom: "20px",
//         },
//         leftText: {
//             fontSize: "20px",
//             lineHeight: "1.6",
//             color: "#333",
//         },
//         highlight: {
//             color: "#007bff",
//             fontWeight: "bold",
//         },
//         rightSection: {
//             flex: 1,
//             padding: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//         },
//         service: {
//             marginBottom: "15px",
//         },
//         serviceTitle: {
//             fontSize: "20px",
//             color: "#007bff",
//             marginBottom: "10px",
//         },
//         serviceText: {
//             fontSize: "16px",
//             color: "#555",
//             marginBottom: "10px",
//         },
//         link: {
//             fontSize: "14px",
//             textDecoration: "none",
//             color: "#007bff",
//             fontWeight: "bold",
//             transition: "color 0.3s",
//         },
//     };


// };

// export default AboutSection;

// "use client";

// import Link from "next/link";

// const AboutSection = () => {
//     return (
//         <section style={styles.section}>
//             <div style={styles.container}>
//                 <div style={styles.row}>
//                     {/* Left Column - Image */}
//                     <div style={styles.imageCol}>
//                         <div style={styles.imageWrapper}>
//                             <img
//                                 src="/img/photo/vr1.png" // Update the path to your image
//                                 alt="Innovative Solutions"
//                                 style={styles.image}
//                             />
//                             <div style={styles.highlightBox}>
//                                 <h3 style={styles.highlightText}>
//                                     DECADE OF <br /> SUCCESSFUL WORK
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Content */}
//                     <div style={styles.contentCol}>
//                         <h1 style={styles.title}>
//                             TRANSFORMING DIGITAL GOALS INTO REALITY
//                         </h1>
//                         <p style={styles.description}>
//                             In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//                         </p>
//                         <ul style={styles.list}>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>📜</span> Compliance Pressure
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
//                             </li>
//                         </ul>
//                         <p style={styles.description}>
//                             These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//                         </p>
//                         <Link href="/services" style={styles.button}>
//                             DISCOVER OUR SERVICES →
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const styles = {
//     section: {
//         padding: "60px 20px",
//         backgroundColor: "#F8F8F8",
//         marginTop: "-40px"
//     },
//     container: {
//         maxWidth: "1200px",
//         margin: "0 auto",
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-start", // Align items to the top for better spacing
//         justifyContent: "space-between",
//         gap: "40px", // Add some gap between the columns
//     },
//     imageCol: {
//         flex: "1",
//         position: "relative",
//         marginBottom: "20px", // Margin to separate from the content column
//     },
//     imageWrapper: {
//         position: "relative",
//         textAlign: "center",
//         overflow: "hidden", // Ensure the image fits inside the container without spilling
//     },
//     image: {
//         width: "100%",
//         borderRadius: "8px",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//     highlightBox: {
//         position: "absolute",
//         bottom: "1%", // Position the text near the bottom (10% from the bottom of the image)
//         left: "84%",
//         transform: "translateX(-50%)", // Centers the text horizontally
//         // backgroundColor: "#FFFF00",
//         backgroundColor: "rgb(188, 255, 0)",
//         padding: "20px 40px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     highlightText: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         textTransform: "uppercase",
//         color: "#000",
//         margin: 0,
//         lineHeight: "1.4",
//     },
//     contentCol: {
//         flex: "1",
//         paddingLeft: "20px",
//         marginTop: "20px", // Ensure some space between the image and the content text
//     },
//     title: {
//         fontSize: "36px",
//         fontWeight: "700",
//         color: "#000",
//         marginBottom: "20px",
//         lineHeight: "1.4",
//     },
//     description: {
//         fontSize: "16px",
//         color: "#333",
//         marginBottom: "20px",
//         lineHeight: "1.8",
//     },
//     list: {
//         padding: "0",
//         margin: "20px 0",
//         listStyleType: "none",
//     },
//     listItem: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "16px",
//         color: "#000",
//         marginBottom: "12px",
//         lineHeight: "1.6",
//     },
//     iconBox: {
//         display: "inline-block",
//         width: "24px",
//         height: "24px",
//         marginRight: "12px",
//         backgroundColor: "#00FF00",
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: "24px",
//         borderRadius: "4px",
//     },
//     button: {
//         display: "inline-block",
//         padding: "12px 24px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#000",
//         backgroundColor: "rgb(188, 255, 0)",
//         borderRadius: "4px",
//         textDecoration: "none",
//         textTransform: "uppercase",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         transition: "all 0.3s ease",
//     },
// };

// export default AboutSection;



// "use client";

// import Link from "next/link";

// const AboutSection = () => {
//     return (
//         <section style={styles.section}>
//             <div style={styles.container}>
//                 <div style={styles.row}>
//                     {/* Left Column - Image */}
//                     <div style={styles.imageCol}>
//                         <div style={styles.imageWrapper}>
//                             <img
//                                 src="/img/photo/vr1.png" // Update the path to your image
//                                 alt="Innovative Solutions"
//                                 style={styles.image}
//                             />
//                             <div style={styles.highlightBox}>
//                                 <h3 style={styles.highlightText}>
//                                     DECADE OF <br /> SUCCESSFUL WORK
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Content */}
//                     <div style={styles.contentCol}>
//                         <h1 style={styles.title}>
//                             TRANSFORMING DIGITAL GOALS INTO REALITY
//                         </h1>
//                         <p style={styles.description}>
//                             In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//                         </p>
//                         <ul style={styles.list}>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>📜</span> Compliance Pressure
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
//                             </li>
//                         </ul>
//                         <p style={styles.description}>
//                             These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//                         </p>
//                         <Link href="/services" style={styles.button}>
//                             DISCOVER OUR SERVICES →
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const styles = {
//     section: {
//         padding: "60px 20px",
//         backgroundColor: "#F8F8F8",
//         marginTop: "-40px"
//     },
//     container: {
//         maxWidth: "1200px",
//         margin: "0 auto",
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-start", // Align items to the top for better spacing
//         justifyContent: "space-between",
//         gap: "40px", // Add some gap between the columns
//         flexWrap: "wrap", // Allow content to wrap on smaller screens
//     },
//     imageCol: {
//         flex: "1 1 45%", // Ensure the image takes up to 45% on larger screens
//         position: "relative",
//         marginBottom: "20px", // Margin to separate from the content column
//     },
//     imageWrapper: {
//         position: "relative",
//         textAlign: "center",
//         overflow: "hidden", // Ensure the image fits inside the container without spilling
//     },
//     image: {
//         width: "100%",
//         borderRadius: "8px",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//     highlightBox: {
//         position: "absolute",
//         bottom: "1%", // Position the text near the bottom (1% from the bottom of the image)
//         left: "80%", // Position the box in the center
//         transform: "translateX(-50%)", // Centers the text horizontally
//         backgroundColor: "rgb(188, 255, 0)",
//         padding: "20px 40px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     highlightText: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         textTransform: "uppercase",
//         color: "#000",
//         margin: 0,
//         lineHeight: "1.4",
//     },
//     contentCol: {
//         flex: "1 1 50%", // Ensure the content takes up 50% on larger screens
//         paddingLeft: "20px",
//         marginTop: "20px", // Ensure some space between the image and the content text
//     },
//     title: {
//         fontSize: "36px",
//         fontWeight: "700",
//         color: "#000",
//         marginBottom: "20px",
//         lineHeight: "1.4",
//     },
//     description: {
//         fontSize: "16px",
//         color: "#333",
//         marginBottom: "20px",
//         lineHeight: "1.8",
//     },
//     list: {
//         padding: "0",
//         margin: "20px 0",
//         listStyleType: "none",
//     },
//     listItem: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "16px",
//         color: "#000",
//         marginBottom: "12px",
//         lineHeight: "1.6",
//     },
//     iconBox: {
//         display: "inline-block",
//         width: "24px",
//         height: "24px",
//         marginRight: "12px",
//         backgroundColor: "#00FF00",
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: "24px",
//         borderRadius: "4px",
//     },
//     button: {
//         display: "inline-block",
//         padding: "12px 24px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#000",
//         backgroundColor: "rgb(188, 255, 0)",
//         borderRadius: "4px",
//         textDecoration: "none",
//         textTransform: "uppercase",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         transition: "all 0.3s ease",
//     },

//     // Media Queries for Responsiveness

//     "@media (max-width: 1200px)": {
//         row: {
//             flexDirection: "column", // Stack the image and content for medium to small screens
//             gap: "20px",
//         },
//         title: {
//             fontSize: "28px", // Adjust font size for tablets and smaller devices
//         },
//         description: {
//             fontSize: "14px", // Adjust description font size for better readability
//         },
//         highlightBox: {
//             bottom: "10%", // Adjust position for smaller screens
//             padding: "10px 20px", // Reduce padding for smaller screens
//         },
//         highlightText: {
//             fontSize: "14px", // Smaller font for mobile
//         },
//         button: {
//             padding: "10px 20px", // Adjust button size for mobile screens
//             fontSize: "14px", // Smaller button text
//         },
//     },

//     "@media (max-width: 768px)": {
//         section: {
//             padding: "40px 15px", // Adjust padding for small screens
//         },
//         title: {
//             fontSize: "24px", // Reduce title size for smaller screens
//         },
//         description: {
//             fontSize: "14px", // Smaller font size for mobile devices
//         },
//         imageCol: {
//             flex: "1 1 100%", // Ensure image takes full width on small screens
//             marginBottom: "20px",
//         },
//         contentCol: {
//             flex: "1 1 100%", // Ensure content takes full width on mobile
//             paddingLeft: "0", // Remove padding for smaller screens
//         },
//     },

//     "@media (max-width: 480px)": {
//         highlightBox: {
//             padding: "10px 15px", // Even smaller padding for very small devices
//             fontSize: "12px", // Further reduce font size for very small devices
//         },
//         button: {
//             padding: "8px 16px", // Even smaller button for mobile screens
//             fontSize: "12px",
//         },
//     },
// };

// export default AboutSection;





// "use client";

// import Link from "next/link";

// const AboutSection = () => {
//     return (
//         <section style={styles.section}>
//             <div style={styles.container}>
//                 <div style={styles.row}>
//                     {/* Left Column - Image */}
//                     <div style={styles.imageCol}>
//                         <div style={styles.imageWrapper}>
//                             <img
//                                 src="/img/photo/vr1.png" // Update the path to your image
//                                 alt="Innovative Solutions"
//                                 style={styles.image}
//                             />
//                             <div style={styles.highlightBox}>
//                                 <h3 style={styles.highlightText}>
//                                     DECADE OF <br /> SUCCESSFUL WORK
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Content */}
//                     <div style={styles.contentCol}>
//                         <h1 style={styles.title}>
//                             TRANSFORMING DIGITAL GOALS INTO REALITY
//                         </h1>
//                         <p style={styles.description}>
//                             In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//                         </p>
//                         <ul style={styles.list}>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>📜</span> Compliance Pressure
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
//                             </li>
//                         </ul>
//                         <p style={styles.description}>
//                             These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//                         </p>
//                         <Link href="/services" style={styles.button}>
//                             DISCOVER OUR SERVICES →
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const styles = {
//     section: {
//         padding: "60px 20px",
//         backgroundColor: "#F8F8F8",
//         marginTop: "-40px",
//     },
//     container: {
//         maxWidth: "1200px",
//         margin: "0 auto",
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-start", 
//         justifyContent: "space-between",
//         gap: "40px",
//         flexWrap: "wrap",
//     },
//     imageCol: {
//         flex: "1 1 45%",
//         position: "relative",
//         marginBottom: "20px",
//     },
//     imageWrapper: {
//         position: "relative",
//         textAlign: "center",
//         overflow: "hidden",
//         transition: "transform 0.3s ease-in-out",
//     },
//     imageWrapperHover: {
//         ":hover": {
//             transform: "scale(1.05)", 
//         },
//     },
//     image: {
//         width: "100%",
//         borderRadius: "8px",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//     highlightBox: {
//         position: "absolute",
//         bottom: "1%",
//         left: "75%",
//         transform: "translateX(-50%)",
//         backgroundColor: "rgb(188, 255, 0)",
//         padding: "20px 40px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     highlightText: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         textTransform: "uppercase",
//         color: "#000",
//         margin: 0,
//         lineHeight: "1.4",
//     },
//     contentCol: {
//         flex: "1 1 50%",
//         paddingLeft: "20px",
//         marginTop: "20px",
//     },
//     title: {
//         fontSize: "36px",
//         fontWeight: "700",
//         color: "#000",
//         marginBottom: "20px",
//         lineHeight: "1.4",
//     },
//     description: {
//         fontSize: "16px",
//         color: "#333",
//         marginBottom: "20px",
//         lineHeight: "1.8",
//     },
//     list: {
//         padding: "0",
//         margin: "20px 0",
//         listStyleType: "none",
//     },
//     listItem: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "16px",
//         color: "#000",
//         marginBottom: "12px",
//         lineHeight: "1.6",
//     },
//     iconBox: {
//         display: "inline-block",
//         width: "24px",
//         height: "24px",
//         marginRight: "12px",
//         // backgroundColor: "#00FF00",
//         backgroundColor: "rgb(188, 255, 0)",
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: "24px",
//         borderRadius: "4px",
//     },
//     button: {
//         display: "inline-block",
//         padding: "12px 24px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#000",
//         backgroundColor: "rgb(188, 255, 0)",
//         borderRadius: "4px",
//         textDecoration: "none",
//         textTransform: "uppercase",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         transition: "all 0.3s ease",
//     },

//     // Media Queries for Responsiveness

//     "@media (max-width: 1200px)": {
//         row: {
//             flexDirection: "column",
//             gap: "20px",
//         },
//         title: {
//             fontSize: "28px", 
//         },
//         description: {
//             fontSize: "14px",
//         },
//         highlightBox: {
//             bottom: "10%",
//             padding: "10px 20px",
//         },
//         highlightText: {
//             fontSize: "14px", 
//         },
//         button: {
//             padding: "10px 20px", 
//             fontSize: "14px",
//         },
//     },

//     "@media (max-width: 768px)": {
//         section: {
//             padding: "40px 15px", 
//         },
//         title: {
//             fontSize: "24px", 
//         },
//         description: {
//             fontSize: "14px", 
//         },
//         imageCol: {
//             flex: "1 1 100%", 
//             marginBottom: "20px",
//         },
//         contentCol: {
//             flex: "1 1 100%", 
//             paddingLeft: "0",
//         },
//     },

//     "@media (max-width: 480px)": {
//         highlightBox: {
//             padding: "10px 15px", 
//             fontSize: "12px", 
//         },
//         button: {
//             padding: "8px 16px", 
//             fontSize: "12px",
//         },
//     },
// };

// export default AboutSection;









// import React from 'react';

// import Link from "next/link";
// import { he } from 'date-fns/locale';

// const AboutSection = () => {
//   return (
//     <div className="row justify-content-center">
//       <div className="col-md-8 mt-5 pt-5 pb-5"  style={styles.container}>
//       <div className='d-flex row '>
//         <div className="col-md-5 px-4">
//         <div className='h-100 w-100' style={styles.leftColumn}>
//         <img
//           src="/img/photo/vr1.png"
//           alt="Digital Transformation"
//           style={styles.image}
//           // className='w-100 h-100'
//         />
//         <div className='d-flex justify-content-center align-items-center' style={styles.tagline}>
//           <span style={{textAlign:"center"}}>
//           <span style={styles.highlight}>DECADE</span> <span>OF SUCCESSFUL WORK</span>
//           </span>
 
//         </div>
//       </div>
//         </div>
//    <div className="col-md-7">
//    <div className='px-5' style={styles.rightColumn}>
//         <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
//         <p style={styles.paragraph}>
//           In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//         </p>
//         <div style={styles.grid}>
//           {gridData.map((item, index) => (
//             <div key={index} style={styles.gridItem}>
//               <div style={styles.iconBox}>
//                 <img src={item.icon} alt={item.title} style={styles.icon} />
//               </div>
//               <span>{item.title}</span>
//             </div>
//           ))}
//         </div>
//         <p style={styles.footerText}>
//           These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//         </p>
//         <div style={styles.cta}>
//           <span style={{color:"#17283E"}}>DISCOVER OUR SERVICES</span>
//           <span style={styles.arrow}>→</span>
//         </div>
//       </div>
//    </div>
      
//     </div>
//       </div>
//     </div>

//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/it-ecosystems.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/icons/cybersecurity.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/icons/cloud-migration.png' },
//   { title: 'Maintaining Uptime', icon: '/icons/uptime.png' },
//   { title:  'Compliance Pressure', icon: '/icons/compliance.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/icons/real-time.png' },
// ];

// const styles = {
//   container: {
//     // display: 'flex',
//     // gap: '2rem',
//     // padding: '2rem',
//     // alignItems: 'center',
//     backgroundColor: "rgb(248, 248, 248)"
//   },
//   leftColumn: {
//     // flex: 1,
//     // left: "180px"
//     position: 'relative',
//   },
//   image: {
//     // width: '75%',
//     // left: "75%",
//     // borderRadius: '10px',
//     height:"100%",
//     width:"100%",

//   },
//   tagline: {
//     position: 'absolute',
//     bottom: '0px',
//     right:"0px",
//     height:"200px",
//     width:"200px",
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     // borderRadius: '5px',
//   },
//   highlight: {
//     color: '#17283E', // Neon green highlight color
//   },
//   rightColumn: {
//     flex: 1,
//   },
//   heading: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem',
//     color:"#17283E"
//     // left: "70px"
//   },
//   paragraph: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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
//     // backgroundColor: '#D4FF00', // Neon green box
//     padding: '0.5rem',
//     borderRadius: '5px',
//   },
//   iconBox: {
//     backgroundColor: 'white',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '24px',
//     height: '24px',
//   },
//   footerText: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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
//     color: '#D4FF00', // Neon green arrow
//   },
// };

// export default AboutSection;



// import React from 'react';

// const AboutSection = () => {
//   return (
//     <div className="row justify-content-center">
//       <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
//         <div className="d-flex flex-column flex-md-row">
//           <div className="col-md-5 px-4">
//             <div className="h-100 w-100" style={styles.leftColumn}>
//               <img
//                 src="/img/photo/vr1.png"
//                 alt="Digital Transformation"
//                 style={styles.image}
//               />
//               <div className="d-flex justify-content-center align-items-center" style={styles.tagline}>
//                 <span style={{ textAlign: "center" }}>
//                   <span style={styles.highlight}>DECADE</span> <span>OF SUCCESSFUL WORK</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7">
//             <div className="px-5" style={styles.rightColumn}>
//               <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
//               <p style={styles.paragraph}>
//                 In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//               </p>
//               <div style={styles.grid}>
//                 {gridData.map((item, index) => (
//                   <div key={index} style={styles.gridItem}>
//                     <div style={styles.iconBox}>
//                       <img src={item.icon} alt={item.title} style={styles.icon} />
//                     </div>
//                     <span>{item.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <p style={styles.footerText}>
//                 These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//               </p>
//               <div style={styles.cta}>
//                 <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
//                 <span style={styles.arrow}>→</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/it-ecosystems.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/icons/cybersecurity.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/icons/cloud-migration.png' },
//   { title: 'Maintaining Uptime', icon: '/icons/uptime.png' },
//   { title: 'Compliance Pressure', icon: '/icons/compliance.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/icons/real-time.png' },
// ];

// const styles = {
//   container: {
//     backgroundColor: "rgb(248, 248, 248)",
//     padding: '2rem',
//   },
//   leftColumn: {
//     position: 'relative',
//     width: '100%',
//     height: 'auto',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '10px',
//   },
//   tagline: {
//     position: 'absolute',
//     bottom: '0px',
//     right: "0px",
//     height: "auto",
//     width: "auto",
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//   },
//   highlight: {
//     color: '#17283E',
//   },
//   rightColumn: {
//     flex: 1,
//     padding: '0 1.5rem',
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem',
//     color: "#17283E",
//   },
//   paragraph: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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
//   },
//   iconBox: {
//     backgroundColor: 'white',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '24px',
//     height: '24px',
//   },
//   footerText: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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

//   // Media Queries for responsiveness
//   '@media (max-width: 768px)': {
//     container: {
//       padding: '1rem',
//     },
//     heading: {
//       fontSize: '1.8rem',
//     },
//     grid: {
//       gridTemplateColumns: '1fr',
//     },
//     gridItem: {
//       flexDirection: 'column', // Stack items vertically on small screens
//       alignItems: 'flex-start', // Align to the left
//     },
//     tagline: {
//       fontSize: '1rem',
//     },
//   },
//   '@media (max-width: 992px)': {
//     heading: {
//       fontSize: '2.2rem',
//     },
//     grid: {
//       gridTemplateColumns: '1fr 1fr',
//     },
//   },
// };

// export default AboutSection;


// import React from 'react';

// const AboutSection = () => {
//   return (
//     <div className="row justify-content-center">
//       <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
//         <div className="d-flex flex-column flex-md-row">
//           <div className="col-md-5 px-4" style={styles.leftColumnWrapper}>
//             <div className="h-100 w-100" style={styles.leftColumn}>
//               <img
//                 src="/img/photo/vr1.png"
//                 alt="Digital Transformation"
//                 style={styles.image}
//               />
//               <div className="d-flex justify-content-center align-items-center" style={styles.tagline}>
//                 <span style={{ textAlign: "center" }}>
//                   <span style={styles.highlight}>DECADE</span> <span>OF SUCCESSFUL WORK</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7">
//             <div className="px-5" style={styles.rightColumn}>
//               <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
//               <p style={styles.paragraph}>
//                 In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//               </p>
//               <div style={styles.grid}>
//                 {gridData.map((item, index) => (
//                   <div key={index} style={styles.gridItem}>
//                     <div style={styles.iconBox}>
//                       <img src={item.icon} alt={item.title} style={styles.icon} />
//                     </div>
//                     <span>{item.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <p style={styles.footerText}>
//                 These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//               </p>
//               <div style={styles.cta}>
//                 <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
//                 <span style={styles.arrow}>→</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/it-ecosystems.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/icons/cybersecurity.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/icons/cloud-migration.png' },
//   { title: 'Maintaining Uptime', icon: '/icons/uptime.png' },
//   { title: 'Compliance Pressure', icon: '/icons/compliance.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/icons/real-time.png' },
// ];

// const styles = {
//   container: {
//     backgroundColor: "rgb(248, 248, 248)",
//     padding: '2rem',
//   },
//   leftColumnWrapper: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   leftColumn: {
//     position: 'relative',
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '10px',
//     objectFit: 'cover', // Ensure the image covers the area
//   },
//   tagline: {
//     position: 'absolute',
//     bottom: '0px',
//     right: "0px",
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//   },
//   highlight: {
//     color: '#17283E',
//   },
//   rightColumn: {
//     flex: 1,
//     padding: '0 1.5rem',
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem',
//     color: "#17283E",
//   },
//   paragraph: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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
//   },
//   iconBox: {
//     backgroundColor: 'white',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '24px',
//     height: '24px',
//   },
//   footerText: {
//     fontSize: '1rem',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
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

//   // Media Queries for responsiveness
//   '@media (max-width: 768px)': {
//     container: {
//       padding: '1rem',
//     },
//     heading: {
//       fontSize: '1.8rem',
//     },
//     grid: {
//       gridTemplateColumns: '1fr', // Stack grid items on smaller screens
//     },
//     gridItem: {
//       flexDirection: 'column', // Stack items vertically
//       alignItems: 'flex-start', // Align to the left
//     },
//     tagline: {
//       fontSize: '1rem',
//     },
//     cta: {
//       flexDirection: 'column', // Stack cta items vertically
//       alignItems: 'center',
//     },
//   },
//   '@media (max-width: 992px)': {
//     heading: {
//       fontSize: '2.2rem',
//     },
//     grid: {
//       gridTemplateColumns: '1fr 1fr',
//     },
//   },
//   '@media (max-width: 480px)': {
//     image: {
//       objectFit: 'cover',
//       height: '200px', // Set a specific height for small screens to maintain consistency
//     },
//     tagline: {
//       position: 'absolute',
//       bottom: '0px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       fontSize: '0.9rem',
//     },
//     cta: {
//       fontSize: '1rem',
//     },
//   },
// };

// export default AboutSection;


import React from 'react';

const AboutSection = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
        <div className="d-flex flex-column flex-md-row" style={styles.flexContainer}>
          <div className="col-md-5 px-4" style={styles.leftColumnWrapper}>
            <div className="h-100 w-100" style={styles.leftColumn}>
              <img
                src="/img/photo/vr1.png"
                alt="Digital Transformation"
                style={styles.image}
              />
              <div className="d-flex justify-content-center align-items-center" style={styles.tagline}>
                <span style={{ textAlign: "center" }}>
                  <span style={styles.highlight}>DECADE</span> <span>OF SUCCESSFUL WORK</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7" style={styles.rightColumn}>
            <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
            <p style={styles.paragraph}>
              In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
            </p>
            <div style={styles.grid}>
              {gridData.map((item, index) => (
                <div key={index} style={styles.gridItem}>
                  <div style={styles.iconBox}>
                    <img src={item.icon} alt={item.title} style={styles.icon} />
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <p style={styles.footerText}>
              These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
            </p>
            <div style={styles.cta}>
              <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
              {/* <span style={styles.arrow,styles.iconBox}>→</span> */}
              <span style={{ ...styles.arrow, ...styles.iconBox }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gridData = [
  { title: 'Complex IT Ecosystems', icon: '/img/icons/about1.png' },
  { title: 'Rising Cybersecurity Threats', icon: '/img/icons/about2.png' },
  { title: 'Disruptive Cloud Migrations', icon: '/img/icons/about3.png' },
  { title: 'Maintaining Uptime', icon: '/img/icons/about4.png' },
  { title: 'Compliance Pressure', icon: '/img/icons/about5.png' },
  { title: 'Lack of Real-Time Insights', icon: '/img/icons/about6.png' },
];

const styles = {
  container: {
    backgroundColor: "rgb(248, 248, 248)",
    padding: '2rem',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column', // Stacks content vertically on smaller screens
    justifyContent: 'center',
  },
  leftColumnWrapper: {
    position: 'relative',
    flex: 1,
    maxWidth: '100%', // Prevents shrinking of the image
    display: 'flex',
    justifyContent: 'center',
  },
  leftColumn: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover', // Ensures the image stays fully covered without shrinking
  },
  tagline: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#17283E',
  },
  rightColumn: {
    flex: 1,
    padding: '0 1.5rem',
    display: 'flex',
    flexDirection: 'column', // Ensures the content is aligned vertically
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: "#17283E",
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    borderRadius: '5px',
  },
  iconBox: {
    // backgroundColor: 'rgb(188, 255, 0)',
    backgroundColor:"#17283E",
    padding: '0.5rem',
    // borderRadius: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  footerText: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  cta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '1.2rem',
    color: '#D4FF00',
  },

  // Media Queries for responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem',
    },
    heading: {
      fontSize: '1.8rem',
    },
    grid: {
      gridTemplateColumns: '1fr', // Stack grid items on smaller screens
    },
    tagline: {
      fontSize: '1rem',
    },
    cta: {
      flexDirection: 'column', // Stack cta items vertically
      alignItems: 'center',
    },
  },
  '@media (max-width: 992px)': {
    heading: {
      fontSize: '2.2rem',
    },
    grid: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  '@media (max-width: 480px)': {
    image: {
      height: '250px', // Set a fixed height for the image on small screens
      objectFit: 'cover', // Prevents shrinking and distorting of the image
    },
    tagline: {
      position: 'absolute',
      bottom: '0px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '0.9rem',
    },
    cta: {
      fontSize: '1rem',
    },
  },
};

export default AboutSection;
