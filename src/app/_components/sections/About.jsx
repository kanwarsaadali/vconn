// "use client";
// import React from 'react';
// import useMediaQuery from '../../hooks/useMediaQuery';

// const AboutSection = () => {
//   const isScreenAbove1440 = useMediaQuery("(min-width: 1440px)");
//   const isScreenBelow769 = useMediaQuery("(max-width: 769px)");
//   return (
//     <div className="row justify-content-center">
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
//                   <span style={styles.highlight}>10+ years of expertise</span> <span></span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7" style={styles.rightColumn}>
//             <h1 style={styles.heading}>ONE SOLUTION TO YOUR IT CHALLENGES</h1>
//             <p style={styles.paragraph}>
//             From hardware failure to software compatibility and more, your business faces tremendous challenges. Let our professional IT architects help you in:
//             </p>
//             <div style={styles.grid}>
//               {gridData.map((item, index) => (
//                 <div key={index} style={styles.gridItem}>
//                   <div style={styles.iconBox}>
//                     <img src={item.icon} alt={item.title} style={styles.icon} />
//                   </div>
//                   <span style={{backgroundColor:"rgb(188, 255, 0)",height:"70px", width:"150px", borderRadius:"10px", alignItems:"center", justifyContent:"center" }}>{item.title}</span>
//                 </div>
//               ))}
//             </div>
//             <p style={styles.footerText}>
//               These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//             </p>
//             <div style={styles.cta}>
//               <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
//               {/* <span style={styles.arrow,styles.iconBox}>→</span> */}
//               <span style={{ ...styles.arrow, ...styles.iconBox }}>→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/about1.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/img/icons/about2.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/img/icons/about3.png' },
//   { title: 'Maintaining Uptime', icon: '/img/icons/about4.png' },
//   { title: 'Compliance Pressure', icon: '/img/icons/about5.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/img/icons/about6.png' },
// ];

// const styles = {
//   container: {
//     backgroundColor: "rgb(248, 248, 248)",
//     padding: '2rem',
//   },
//   flexContainer: {
//     display: 'flex',
//     flexDirection: 'column', // Stacks content vertically on smaller screens
//     justifyContent: 'center',
//   },
//   leftColumnWrapper: {
//     position: 'relative',
//     flex: 1,
//     maxWidth: '100%', // Prevents shrinking of the image
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
//     objectFit: 'cover', // Ensures the image stays fully covered without shrinking
//   },
//   tagline: {
//     position: 'absolute',
//     bottom: '10px',
//     left: '10px',
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
//     display: 'flex',
//     flexDirection: 'column', // Ensures the content is aligned vertically
//     justifyContent: 'center',
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
//     // backgroundColor:"rgb(188, 255, 0)"
//   },
//   iconBox: {
//     // backgroundColor: 'rgb(188, 255, 0)',
//     // backgroundColor:"#17283E",
//     padding: '0.5rem',
//     // borderRadius: '30%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '64px',
//     height: '64px',
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
//       height: '250px', // Set a fixed height for the image on small screens
//       objectFit: 'cover', // Prevents shrinking and distorting of the image
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


// "use client";
// import React from 'react';
// import useMediaQuery from '../../hooks/useMediaQuery';

// const AboutSection = () => {
//   const isScreenAbove1440 = useMediaQuery("(min-width: 1440px)");
//   const isScreenBelow769 = useMediaQuery("(max-width: 769px)");

//   return (
//     <div className="row justify-content-center" style={styles.outerContainer}>
//       <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
//         <div className="d-flex flex-column flex-md-row" style={styles.flexContainer}>
//           <div className="col-md-5 px-4" style={styles.leftColumnWrapper}>
//             <div className="h-100 w-100" style={styles.leftColumn}>
//               <img
//                 src="/img/photo/vr1.webp"
//                 alt="Digital Transformation"
//                 style={styles.image}
//               />
//               <div style={styles.taglineWrapper}>
//                 <span style={styles.tagline}>DECADE OF SUCCESSFUL WORK</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7" style={styles.rightColumn}>
//             <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
//             <p style={styles.paragraph}>
//               In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability.
//             </p>
//             <div style={styles.grid}>
//               {gridData.map((item, index) => (
//                 <div key={index} style={styles.gridItem}>
//                   <div style={styles.iconBox}>
//                     <img src={item.icon} alt={item.title} style={styles.icon} />
//                   </div>
//                   <span style={styles.gridTitle}>{item.title}</span>
//                 </div>
//               ))}
//             </div>
//             <p style={styles.footerText}>
//               Discover how our expert solutions can help your business thrive in the face of these challenges.
//             </p>
//             <div style={styles.cta}>
//               <span style={styles.ctaText}>DISCOVER OUR SERVICES</span>
//               <span style={styles.arrow}>→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'MANAGE IT ECOSYSTEMS', icon: '/img/icons/about1.png' },
//   { title: 'CYBERSECURITY THREATS RISING', icon: '/img/icons/about2.png' },
//   { title: 'DISRUPTIVE CLOUD MIGRATIONS', icon: '/img/icons/about3.png' },
//   { title: 'MAINTAINING UPTIME', icon: '/img/icons/about4.png' },
//   { title: 'COMPLIANCE PRESSURE', icon: '/img/icons/about5.png' },
//   { title: 'LACK OF REAL-TIME INSIGHTS', icon: '/img/icons/about6.png' },
// ];

// const styles = {
//   outerContainer: {
//     backgroundColor: "rgb(240, 240, 240)",
//   },
//   container: {
//     backgroundColor: "rgb(248, 248, 248)",
//     padding: '2rem',
//     borderRadius: '10px',
//   },
//   flexContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   leftColumnWrapper: {
//     position: 'relative',
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
//   taglineWrapper: {
//     position: 'absolute',
//     bottom: '10px',
//     left: '10px',
//     backgroundColor: '#BCFF00',
//     padding: '0.5rem 1rem',
//     borderRadius: '5px',
//   },
//   tagline: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     color: '#17283E',
//   },
//   rightColumn: {
//     flex: 1,
//     padding: '0 1.5rem',
//     display: 'flex',
//     flexDirection: 'column',
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
//     padding: '1rem',
//     borderRadius: '10px',
//     backgroundColor: 'rgb(188, 255, 0)',
//     textAlign: 'center',
//   },
//   gridTitle: {
//     fontSize: '0.9rem',
//     fontWeight: 'bold',
//     color: '#17283E',
//   },
//   iconBox: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     width: '48px',
//     height: '48px',
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
//   ctaText: {
//     color: "#17283E",
//   },
//   arrow: {
//     fontSize: '1.5rem',
//     color: '#BCFF00',
//   },
// };

// export default AboutSection;


// "use client";
// import React from 'react';
// import useMediaQuery from '../../hooks/useMediaQuery';

// const AboutSection = () => {
//   const isScreenAbove1440 = useMediaQuery("(min-width: 1440px)");
//   const isScreenBelow769 = useMediaQuery("(max-width: 769px)");
//   return (
//     <div className="row justify-content-center">
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
//                   <span style={styles.highlight}>10+ years of expertise</span> <span></span>
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
//               <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
//               <span style={{ ...styles.arrow, ...styles.iconBox , backgroundColor:"#17283E", width:"30px" }}>→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const gridData = [
//   { title: 'Complex IT Ecosystems', icon: '/img/icons/about1.png' },
//   { title: 'Rising Cybersecurity Threats', icon: '/img/icons/about2.png' },
//   { title: 'Disruptive Cloud Migrations', icon: '/img/icons/about3.png' },
//   { title: 'Ensuring continuous availability', icon: '/img/icons/about4.png' },
//   { title: 'Adhering regulatory demands', icon: '/img/icons/about5.png' },
//   { title: 'Lack of Real-Time Insights', icon: '/img/icons/about6.png' },
// ];

// const styles = {
//   container: {
//     backgroundColor: "rgb(248, 248, 248)",
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
//     tagline: {
//       fontSize: '1rem',
//     },
//     cta: {
//       flexDirection: 'column',
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
//       height: '250px',
//       objectFit: 'cover',
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
      </div>
    </div>
  );
};

const styles = {
  container: {
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
  },
};

export default AboutSection;
