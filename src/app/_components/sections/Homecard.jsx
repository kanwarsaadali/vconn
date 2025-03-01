// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/cybersecurity.png",
//     title: "Private: Mount St",
//     description:
//       "A majestic beauty with an eruptive history, Mt. St. Helens is one of our region’s most breathtaking wonders.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "Wine Country",
//     description:
//       "Experience the full flavor of Oregon wine country. Take a tasting trip to world-renowned vineyards breathtaking wonders.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "Explore the PNW",
//     description:
//       "Explore the majestic beauty of the Pacific Northwest from the air to world-renowned vineyards breathtaking wonders ",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "Custom Tours",
//     description:
//       "What does the perfect trip look like for you? Explore the Pacific Northwest on your terms to world-renowned vineyards",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <div style={styles.cardGrid}>
//           {cardData.map((card, index) => (
//             <div key={card.id} style={styles.card}>
//               <img src={card.image} alt={card.title} style={styles.cardImage} />
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>
//                   0{index + 1}. {card.title}
//                 </h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More →
//                 </a>
//               </div>
//               <div style={styles.cardOverlay}></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px", // Increased width for larger cards
//     margin: "0 auto",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)", // 4 cards in one row
//     gap: "30px", // Increased spacing between cards
//   },
//   card: {
//     position: "relative",
//     borderRadius: "12px",
//     overflow: "hidden",
//     boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease-in-out",
//   },
//   cardImage: {
//     width: "100%",
//     height: "300px", // Increased image height
//     objectFit: "cover",
//   },
//   cardContent: {
//     padding: "25px", // Increased padding for more space
//     position: "relative",
//     textAlign: "left",
//     zIndex: 2,
//   },
//   cardTitle: {
//     fontSize: "1.3rem", // Slightly larger text
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "20px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1rem",
//   },
//   cardOverlay: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: "40px", // Slightly larger bottom overlay
//     transform: "skewY(-5deg)",
//     transformOrigin: "bottom left",
//     zIndex: 1,
//   },
// };

// // Responsive Styles
// styles["@media (max-width: 1024px)"] = {
//   cardGrid: {
//     gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row on tablets
//   },
// };
// styles["@media (max-width: 768px)"] = {
//   cardGrid: {
//     gridTemplateColumns: "repeat(1, 1fr)", // 1 card per row on mobile
//   },
// };

// export default Homecard;


// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/cybersecurity.png",
//     title: "Private: Mount St",
//     description:
//       "A majestic beauty with an eruptive history, Mt. St. Helens is one of our region’s most breathtaking wonders.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "Wine Country",
//     description:
//       "Experience the full flavor of Oregon wine country. Take a tasting trip to world-renowned vineyards breathtaking wonders.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "Explore the PNW",
//     description:
//       "Explore the majestic beauty of the Pacific Northwest from the air to world-renowned vineyards breathtaking wonders ",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "Custom Tours",
//     description:
//       "What does the perfect trip look like for you? Explore the Pacific Northwest on your terms to world-renowned vineyards",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <div style={styles.cardGrid}>
//           {cardData.map((card, index) => (
//             <div key={card.id} style={styles.card}>
//               <img src={card.image} alt={card.title} style={styles.cardImage} />
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>
//                   0{index + 1}. {card.title}
//                 </h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More →
//                 </a>
//               </div>
//               <div style={styles.cardOverlay}></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1600px", // Increased width for larger cards
//     margin: "0 auto",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)", // 4 cards in one row
//     gap: "40px", // Increased spacing between cards
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px", // Slightly larger border radius
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Larger box shadow for more depth
//     transition: "transform 0.3s ease-in-out",
//   },
//   cardImage: {
//     width: "100%",
//     height: "350px", // Increased image height
//     objectFit: "cover",
//   },
//   cardContent: {
//     padding: "30px", // Increased padding for more space
//     position: "relative",
//     textAlign: "left",
//     zIndex: 2,
//   },
//   cardTitle: {
//     fontSize: "1.5rem", // Larger title font size
//     fontWeight: "bold",
//     marginBottom: "15px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1.1rem", // Larger description font size
//     color: "white",
//     marginBottom: "20px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem", // Increased link font size
//   },
//   cardOverlay: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: "50px", // Larger bottom overlay
//     transform: "skewY(-5deg)",
//     transformOrigin: "bottom left",
//     zIndex: 1,
//   },
// };

// // Responsive Styles
// styles["@media (max-width: 1024px)"] = {
//   cardGrid: {
//     gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row on tablets
//   },
//   card: {
//     width: "100%", // Make sure the card takes full width on smaller screens
//   },
// };

// styles["@media (max-width: 768px)"] = {
//   cardGrid: {
//     gridTemplateColumns: "repeat(1, 1fr)", // 1 card per row on mobile
//   },
//   card: {
//     width: "100%", // Full-width cards on mobile
//   },
//   cardImage: {
//     height: "250px", // Smaller images on mobile
//   },
// };

// export default Homecard;


// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/cybersecurity.png",
//     title: "Private: Mount St",
//     description:
//       "A majestic beauty with an eruptive history, Mt. St. Helens is one of our region’s most breathtaking wonders.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "Wine Country",
//     description:
//       "Experience the full flavor of Oregon wine country. Take a tasting trip to world-renowned vineyards breathtaking wonders.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "Explore the PNW",
//     description:
//       "Explore the majestic beauty of the Pacific Northwest from the air to world-renowned vineyards breathtaking wonders.",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "Custom Tours",
//     description:
//       "What does the perfect trip look like for you? Explore the Pacific Northwest on your terms to world-renowned vineyards.",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <div style={styles.cardGrid}>
//           {cardData.map((card, index) => (
//             <div key={card.id} style={styles.card}>
//               <img src={card.image} alt={card.title} style={styles.cardImage} />
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>
//                   0{index + 1}. {card.title}
//                 </h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Inline styles for responsiveness
// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "30px",
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease-in-out",
//     // backgroundColor: "#1b2735",
//     textAlign: "left",
//   },
//   cardImage: {
//     width: "100%",
//     height: "350px",
//     objectFit: "cover",
//   },
//   cardContent: {
//     padding: "20px",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "15px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   // Hover effect
//   "@media (hover: hover)": {
//     card: {
//       transition: "transform 0.3s ease-in-out",
//     },
//     cardHover: {
//       transform: "translateY(-5px)",
//     },
//   },
//   // Responsive Design
//   "@media (max-width: 1024px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//     cardImage: {
//       height: "300px",
//     },
//   },
//   "@media (max-width: 768px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(1, 1fr)",
//     },
//     cardImage: {
//       height: "250px",
//     },
//     cardContent: {
//       padding: "15px",
//     },
//     cardTitle: {
//       fontSize: "1.3rem",
//     },
//   },
// };

// export default Homecard;


// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/cybersecurity.png",
//     title: "Private: Mount St",
//     description:
//       "A majestic beauty with an eruptive history, Mt. St. Helens is one of our region’s most breathtaking wonders.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "Wine Country",
//     description:
//       "Experience the full flavor of Oregon wine country. Take a tasting trip to world-renowned vineyards.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "Explore the PNW",
//     description:
//       "Explore the majestic beauty of the Pacific Northwest from the air to world-renowned vineyards.",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "Custom Tours",
//     description:
//       "What does the perfect trip look like for you? Explore the Pacific Northwest on your terms.",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <div style={styles.cardGrid}>
//           {cardData.map((card, index) => (
//             <div key={card.id} style={styles.card}>
//               <div style={styles.imageContainer}>
//                 <img src={card.image} alt={card.title} style={styles.cardImage} />
//               </div>
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>
//                   0{index + 1}. {card.title}
//                 </h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles for responsiveness and slanted images
// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "30px",
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     // backgroundColor: "#1b2735",
//     textAlign: "left",
//   },
//   imageContainer: {
//     position: "relative",
//     width: "100%",
//     height: "300px", // Adjust image height
//     overflow: "hidden",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // Slanted bottom effect
//   },
//   cardContent: {
//     padding: "20px",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "15px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   // Responsive Styles
//   "@media (max-width: 1024px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//     imageContainer: {
//       height: "250px",
//     },
//   },
//   "@media (max-width: 768px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(1, 1fr)",
//     },
//     imageContainer: {
//       height: "200px",
//     },
//   },
// };

// export default Homecard;


// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/Cybersecurity.png",
//     title: "CYBERSECURITY",
//     description:
//       "Secure your business from potential threats, malwares, and hackers via proven defensive and offensive strategy.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "DEVSECOPS",
//     description:
//       "Assess risks, monitor attacks, and implement Test-Driven Security (TDS) for quality software production.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "COMPLIANCE",
//     description:
//       "Protect your business top-secret information from unauthorized access, ensure business continuity with reduced financial losses.",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "MANAGED SERVICES",
//     description:
//       "Avoid downtime, communication challenges, reduced operational costs, with proactive support.",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         {/* Add the "OUR SERVICES" heading here */}
//         {/* <h2 style={styles.sectionHeading}>OUR SERVICES</h2> */}
//         <h2 style={styles.sectionHeadingh1}>WHAT WE DO</h2>

//         <div style={styles.cardGrid}>
//           {cardData.map((card, index) => (
//             <div key={card.id} style={styles.card}>
//               <div style={styles.imageContainer}>
//                 <img src={card.image} alt={card.title} style={styles.cardImage} />
//               </div>
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>
//                    {card.title}
//                 </h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More <span className="mil-arrow"><img src="img/icons/1.svg" className="img3" alt="arrow" /></span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// };

// // Styles for responsiveness and slanted images
// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   },
//   sectionHeading: {
//     color: "rgb(188, 255, 0)",
//     fontSize: "2rem",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   sectionHeadingh1: {
//     color: "rgb(188, 255, 0)",
//     fontSize: "3rem",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "30px",
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     textAlign: "left",
//   },
//   imageContainer: {
//     position: "relative",
//     width: "100%",
//     height: "300px", // Adjust image height
//     overflow: "hidden",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // Slanted bottom effect
//   },
//   cardContent: {
//     padding: "20px",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "15px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   // Responsive Styles
//   "@media (max-width: 1024px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//     imageContainer: {
//       height: "250px",
//     },
//   },
//   "@media (max-width: 768px)": {
//     cardGrid: {
//       gridTemplateColumns: "repeat(1, 1fr)",
//     },
//     imageContainer: {
//       height: "200px",
//     },
//   },
// };

// export default Homecard;


// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/Cybersecurity.png",
//     title: "CYBERSECURITY",
//     description:
//       "Secure your business from potential threats, malwares, and hackers via proven defensive and offensive strategy.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "DEVSECOPS",
//     description:
//       "Assess risks, monitor attacks, and implement Test-Driven Security (TDS) for quality software production.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "COMPLIANCE",
//     description:
//       "Protect your business top-secret information from unauthorized access, ensure business continuity with reduced financial losses.",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "MANAGED SERVICES",
//     description:
//       "Avoid downtime, communication challenges, reduced operational costs, with proactive support.",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionHeadingh1}>WHAT WE DO</h2>

//         <div style={styles.cardGrid}>
//           {cardData.map((card) => (
//             <div key={card.id} style={styles.card}>
//               <div style={styles.imageContainer}>
//                 <img src={card.image} alt={card.title} style={styles.cardImage} />
//               </div>
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>{card.title}</h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More <span className="mil-arrow">
//                     <img src="img/icons/1.svg" className="img3" alt="arrow" />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Centered Button */}
//         <div style={styles.buttonContainer}>
//           <button style={styles.button}>More Services</button>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// // Styles for responsiveness and slanted images
// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   },
//   sectionHeadingh1: {
//     color: "rgb(188, 255, 0)",
//     fontSize: "3rem",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "30px",
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     textAlign: "left",
//   },
//   imageContainer: {
//     position: "relative",
//     width: "100%",
//     height: "300px",
//     overflow: "hidden",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
//   },
//   cardContent: {
//     padding: "20px",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "15px",
//   },
//   cardLink: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "50px",
//   },
//   button: {
//     backgroundColor: "rgb(188, 255, 0)",
//     color: "black",
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     padding: "12px 24px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background 0.3s ease",
//   },
//   buttonHover: {
//     backgroundColor: "#aaff00",
//   },
// };

// export default Homecard;


<<<<<<< HEAD
=======
// import React from "react";

// const cardData = [
//   {
//     id: 1,
//     image: "/img/covers/Cybersecurity.png",
//     title: "CYBERSECURITY",
//     description:
//       "Secure your business from potential threats, malwares, and hackers via proven defensive and offensive strategy.",
//   },
//   {
//     id: 2,
//     image: "/img/covers/Devsecops.png",
//     title: "DEVSECOPS",
//     description:
//       "Assess risks, monitor attacks, and implement Test-Driven Security (TDS) for quality software production.",
//   },
//   {
//     id: 3,
//     image: "/img/covers/Manage.png",
//     title: "COMPLIANCE",
//     description:
//       "Protect your business top-secret information from unauthorized access, ensure business continuity with reduced financial losses.",
//   },
//   {
//     id: 4,
//     image: "/img/covers/Information.png",
//     title: "MANAGED SERVICES",
//     description:
//       "Experience uninterrupted IT operations without downtime, reduced operational costs, with proactive support.",
//   },
// ];

// const Homecard = () => {
//   return (
//     <section style={styles.cardSection}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionHeadingh1}>WHAT WE DO</h2>

//         <div style={styles.cardGrid}>
//           {cardData.map((card) => (
//             <div key={card.id} style={styles.card}>
//               <div style={styles.imageContainer}>
//                 <img src={card.image} alt={card.title} style={styles.cardImage} />
//               </div>
//               <div style={styles.cardContent}>
//                 <h3 style={styles.cardTitle}>{card.title}</h3>
//                 <p style={styles.cardDescription}>{card.description}</p>
//                 <a href="#" style={styles.cardLink}>
//                   Learn More{" "}
//                   <span style={styles.greenArrow}>&gt;</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Centered Button */}
//         <div style={styles.buttonContainer}>
//           <button style={styles.button}>MORE SERVICES</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles for responsiveness and slanted images
// const styles = {
//   cardSection: {
//     backgroundColor: "rgb(12, 20, 31)",
//     padding: "50px 20px",
//   },
//   container: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   },
//   sectionHeadingh1: {
//     color: "rgb(188, 255, 0)",
//     fontSize: "3rem",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   cardGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "30px",
//   },
//   card: {
//     position: "relative",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     textAlign: "left",
//   },
//   imageContainer: {
//     position: "relative",
//     width: "100%",
//     height: "300px",
//     overflow: "hidden",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
//   },
//   cardContent: {
//     padding: "20px",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "12px",
//     color: "white",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "white",
//     marginBottom: "15px",
//   },
//   cardLink: {
//     color: "rgb(38, 144, 193)",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   greenArrow: {
//     color: "rgb(188, 255, 0)", // Matches the button color
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "50px",
//   },
//   button: {
//     backgroundColor: "rgb(188, 255, 0)",
//     color: "black",
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     padding: "12px 24px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background 0.3s ease",
//   },
//   buttonHover: {
//     backgroundColor: "#aaff00",
//   },
// };

// export default Homecard;
import { color } from "framer-motion";
>>>>>>> 2d17da2 (update code)
import React from "react";

const cardData = [
  {
    id: 1,
    image: "/img/covers/Cybersecurity.png",
    title: "CYBERSECURITY",
    description:
<<<<<<< HEAD
      "Secure your business from potential threats, malwares, and hackers via proven defensive and offensive strategy.",
=======
      "Secure your business from potential threats, malwares, and hackers...",
>>>>>>> 2d17da2 (update code)
  },
  {
    id: 2,
    image: "/img/covers/Devsecops.png",
    title: "DEVSECOPS",
    description:
<<<<<<< HEAD
      "Assess risks, monitor attacks, and implement Test-Driven Security (TDS) for quality software production.",
=======
      // "Assess risks, monitor attacks, and implement Test-Driven Security (TDS) for quality software production.",
      "Assess risks, monitor attacks, and implement Test-Driven Security..."
>>>>>>> 2d17da2 (update code)
  },
  {
    id: 3,
    image: "/img/covers/Manage.png",
    title: "COMPLIANCE",
    description:
<<<<<<< HEAD
      "Protect your business top-secret information from unauthorized access, ensure business continuity with reduced financial losses.",
=======
      "Protect your business top-secret information from unauthorized access...",
>>>>>>> 2d17da2 (update code)
  },
  {
    id: 4,
    image: "/img/covers/Information.png",
    title: "MANAGED SERVICES",
    description:
<<<<<<< HEAD
      "Experience uninterrupted IT operations without downtime, reduced operational costs, with proactive support.",
=======
      "Experience uninterrupted IT operations without downtime, reduced ...",
>>>>>>> 2d17da2 (update code)
  },
];

const Homecard = () => {
  return (
    <section style={styles.cardSection}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeadingh1}>WHAT WE DO</h2>

        <div style={styles.cardGrid}>
          {cardData.map((card) => (
            <div key={card.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={card.image} alt={card.title} style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDescription}>{card.description}</p>
                <a href="#" style={styles.cardLink}>
                  Learn More{" "}
                  <span style={styles.greenArrow}>&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div style={styles.buttonContainer}>
          <button style={styles.button}>MORE SERVICES</button>
        </div>
      </div>
<<<<<<< HEAD
=======
      <style>{fontStyles}</style>
>>>>>>> 2d17da2 (update code)
    </section>
  );
};

// Styles for responsiveness and slanted images
const styles = {
  cardSection: {
    backgroundColor: "rgb(12, 20, 31)",
<<<<<<< HEAD
    padding: "50px 20px",
=======
    padding: "64px 24px",
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
<<<<<<< HEAD
  },
  sectionHeadingh1: {
    color: "rgb(188, 255, 0)",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
=======
    fontFamily: "Lato, sans-serif",
  },
  sectionHeadingh1: {
    color: "rgb(188, 255, 0)",
    fontSize: "40px",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
<<<<<<< HEAD
    gap: "30px",
=======
    gap: "32px",
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  card: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
<<<<<<< HEAD
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
  },
=======
    // background: "rgb(25, 40, 55)",
    background: "rgb(16, 30, 42)",
    // Alternative: background: "rgba(255, 255, 255, 0.05)", for subtle transparency
    textAlign: "left",
    fontFamily: "Lato, sans-serif",
    // padding: "20px", // Optional: Adjust padding for better spacing
}
,
>>>>>>> 2d17da2 (update code)
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "300px",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  },
  cardContent: {
    padding: "20px",
<<<<<<< HEAD
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "white",
=======
    fontFamily: "Lato, sans-serif",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
},
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "6px",
    color: "white",
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  cardDescription: {
    fontSize: "1rem",
    color: "white",
    marginBottom: "15px",
<<<<<<< HEAD
=======
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  cardLink: {
    color: "rgb(38, 144, 193)",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
<<<<<<< HEAD
=======
    fontFamily: "Lato, sans-serif",
>>>>>>> 2d17da2 (update code)
  },
  greenArrow: {
    color: "rgb(188, 255, 0)", // Matches the button color
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  button: {
    backgroundColor: "rgb(188, 255, 0)",
    color: "black",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
<<<<<<< HEAD
  },
  buttonHover: {
    backgroundColor: "#aaff00",
  },
};

=======
    fontFamily: "Lato, sans-serif",
  },
};

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
`;

>>>>>>> 2d17da2 (update code)
export default Homecard;
