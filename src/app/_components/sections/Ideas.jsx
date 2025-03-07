// "use client";

// import { useState, useEffect } from 'react';

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: 'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.',
//       name: 'Mark Wilson',
//       title: 'CEO, Shell',
//       logos: [
//         '/img/client/27.png', // Reference logos from the public directory
//         // '/logos/logo2.png',
//         // '/logos/logo3.png',
//       ],
//     },
//     {
//       text: 'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.',
//       name: 'Jane Smith',
//       title: 'CTO, Unilever',
//       logos: [
//         '/img/client/28.png', // Reference logos from the public directory
//       ],
//     },
//     {
//       text: 'Their approach to improving our hospital operations was revolutionary and efficient.',
//       name: 'Dr. Ahmed Khan',
//       title: 'Director, Indus Hospital',
//       logos: [
//         '/img/client/29.png', // Reference logos from the public directory
//       ],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title} className="mil-suptitle-testimonals">TESTIMONIALS</h2>
//       <h3 style={styles.subtitle}>What Our Clients Say</h3>
//       <div style={styles.carousel}>  
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.slide,
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             <p style={styles.text}>{testimonial.text}</p>
//             <h4 style={styles.name}>{testimonial.name}</h4>
//             <span style={styles.position}>{testimonial.title}</span>
//             <div style={styles.logos}>
//               {testimonial.logos.map((logo, i) => (
//                 <img key={i} src={logo} alt="Logo" style={styles.logo} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={styles.controls}>
//         <button onClick={prevSlide} style={styles.arrow}>&#10094;</button>
//         <button onClick={nextSlide} style={styles.arrow}>&#10095;</button>
//       </div>
//       <div style={styles.dots}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               ...styles.dot,
//               backgroundColor: currentSlide === index ? 'rgb(188, 255, 0)' : '#ccc',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '50px 20px',
//     background: 'url(/img/photo/BGgrayNet.webp) no-repeat center center/cover',  // Updated to use the public directory
//     position: 'relative',
//   },
//   title: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     color: "#17283E",
//     width:"150px"
//     // color: '#444',
//   },
//   subtitle: {
//     fontSize: '28px',
//     fontWeight: '700',
//     color: "#17283E",
//     marginBottom: '30px',
//     textTransform: 'uppercase',
//   },
//   carousel: {
//     display: 'flex',
//     transition: 'transform 0.6s ease-in-out',
//     overflow: 'hidden',
//     position: 'relative',
//     width: '100%',
//   },
//   slide: {
//     flexShrink: 0,
//     width: '100%',
//     textAlign: 'center',
//     padding: '0 20px',
//   },
//   text: {
//     fontSize: '16px',
//     color: '#555',
//     marginBottom: '15px',
//   },
//   name: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginTop: '10px',
//     color: "#17283E",
//   },
//   position: {
//     fontSize: '14px',
//     color: '#17283E',
//     marginBottom: '15px',
//     display: 'block',
//   },
//   logos: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     marginTop: '15px',
//   },
//   logo: {
//     width: '100px',
//     height: 'auto',
//   },
//   controls: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     top: '50%',
//     left: '10px',
//     right: '10px',
//     transform: 'translateY(-50%)',
//   },
//   arrow: {
//     background: 'none',
//     border: 'none',
//     fontSize: '30px',
//     color: '#333',
//     cursor: 'pointer',
//     padding: '5px 10px',
//   },
//   dots: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     marginTop: '20px',
//   },
//   dot: {
//     width: '12px',
//     height: '12px',
//     borderRadius: '50%',
//     backgroundColor: '#ccc',
//     cursor: 'pointer',
//   },
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: "'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.'",
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"], // Reference logos from the public directory
//     },
//     {
//       text: "'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.'",
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"], // Reference logos from the public directory
//     },
//     {
//       text: "'Their approach to improving our hospital operations was revolutionary and efficient.'",
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"], // Reference logos from the public directory
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div style={styles.container}>
//       {/* <h2 style={styles.title} className="mil-suptitle-testimonals"> */}
//       <h2 style={{ ...styles.title, fontSize: "25px" }} className="mil-suptitle-testimonals">

//         TESTIMONIALS
//       </h2>
//       <h3 style={styles.subtitle}>What Our Customers Say</h3>
//       <div style={styles.carousel}>
//         {testimonials?.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.slide,
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             <div style={styles.testimonialBox}>
//               <p style={styles.text}>{testimonial.text}</p>
//               <h4 style={styles.name}>{testimonial.name}</h4>
//               <span style={styles.position}>{testimonial.title}</span>
//               <div style={styles.logos}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={styles.logo} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={styles.controls}>
//         <button onClick={prevSlide} style={styles.arrow}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={styles.arrow}>
//           &#10095;
//         </button>
//       </div>
//       <div style={styles.dots}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               ...styles.dot,
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px 20px",
//     background: "url(/img/photo/BGgrayNet.webp) no-repeat center center/cover", // Updated to use the public directory
//     position: "relative",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#17283E",
//   },
//   subtitle: {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#17283E",
//     marginBottom: "30px",
//     textTransform: "uppercase",
//   },
//   carousel: {
//     display: "flex",
//     transition: "transform 0.6s ease-in-out",
//     overflow: "hidden",
//     position: "relative",
//     width: "100%",
//     paddingBottom:"50px"
//   },
//   slide: {
//     flexShrink: 0,
//     width: "100%",
//     textAlign: "center",
//     padding: "20px",
//   },
//   testimonialBox: {
//     border: "2px solid #000", // Black border
//     borderRadius: "10px", // Rounded corners
//     padding: "20px",
//     // backgroundColor: "#fff",
//     maxWidth: "70%",
//     margin: "0 auto",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional for a slight shadow,
//     position:"relative"
//   },
//   text: {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "15px",
//   },
//   name: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginTop: "10px",
//     color: "#17283E",
//   },
//   position: {
//     fontSize: "14px",
//     color: "#17283E",
//     marginBottom: "28px",
//     display: "block",
//   },
//   logos: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     // marginTop: "15px",
//     position: "absolute",
//     bottom: "-42px",
//     left: "0px",
//     width:"100%",
//     zindex:"9999",
//     padding:"4px"


//   },
//   logo: {
//     width: "160px",
//     height: "auto",
//     border: "2px solid #000", // Black border
//     borderRadius: "4px", // Rounded corners
//     backgroundColor:"white"
//   },
//   controls: {
//     display: "flex",
//     justifyContent: "space-between",
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     right: "10px",
//     transform: "translateY(-50%)",
//   },
//   arrow: {
//     background: "none",
//     border: "none",
//     fontSize: "60px",
//     color: "#333",
//     cursor: "pointer",
//     padding: "5px 10px",
//   },
//   dots: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "58px",
//   },
//   dot: {
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     backgroundColor: "#ccc",
//     cursor: "pointer",
//   },
// };

// export default IdeasSection;

// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: "'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.'",
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: "'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.'",
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: "'Their approach to improving our hospital operations was revolutionary and efficient.'",
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={{ ...styles.title, fontSize: "25px" }} className="mil-suptitle-testimonals">
//         TESTIMONIALS
//       </h2>
//       <h3 style={styles.subtitle}>What Our Customers Say</h3>
//       <div style={styles.carousel}>
//         {testimonials?.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.slide,
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             <div style={styles.testimonialBox}>
//               <p style={styles.text}>{testimonial.text}</p>
//               <h4 style={styles.name}>{testimonial.name}</h4>
//               <span style={styles.position}>{testimonial.title}</span>
//               <div style={styles.logos}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={styles.logo} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={styles.controls}>
//         <button onClick={prevSlide} style={styles.arrow}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={styles.arrow}>
//           &#10095;
//         </button>
//       </div>
//       <div style={styles.dots}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               ...styles.dot,
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px 20px",
//     background: "url(/img/photo/BGgrayNet.webp) no-repeat center center/cover",
//     position: "relative",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#17283E",
//   },
//   subtitle: {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#17283E",
//     marginBottom: "30px",
//     textTransform: "uppercase",
//   },
//   carousel: {
//     display: "flex",
//     transition: "transform 0.6s ease-in-out",
//     overflow: "hidden",
//     position: "relative",
//     width: "100%",
//     paddingBottom: "50px",
//   },
//   slide: {
//     flexShrink: 0,
//     width: "100%",
//     textAlign: "center",
//     padding: "20px",
//   },
//   testimonialBox: {
//     border: "2px solid #000",
//     borderRadius: "10px",
//     padding: "40px 20px",
//     backgroundColor: "#f9f9f9",
//     minHeight: "300px",
//     maxWidth: "60%", // Reduced width to 60%
//     margin: "0 auto",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//   },
//   text: {
//     fontSize: "20px",
//     color: "#555",
//     marginBottom: "15px",
//   },
//   name: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginTop: "10px",
//     color: "#17283E",
//   },
//   position: {
//     fontSize: "14px",
//     color: "#17283E",
//     marginBottom: "28px",
//     display: "block",
//   },
//   logos: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     position: "absolute",
//     bottom: "-42px",
//     left: "0px",
//     width: "100%",
//     zIndex: "9999",
//     padding: "4px",
//   },
//   logo: {
//     width: "160px",
//     height: "auto",
//     border: "2px solid #000",
//     borderRadius: "4px",
//     backgroundColor: "white",
//   },
//   controls: {
//     display: "flex",
//     justifyContent: "space-between",
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     right: "10px",
//     transform: "translateY(-50%)",
//   },
//   arrow: {
//     background: "none",
//     border: "none",
//     fontSize: "60px",
//     color: "#333",
//     cursor: "pointer",
//     padding: "5px 10px",
//   },
//   dots: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "58px",
//   },
//   dot: {
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     backgroundColor: "#ccc",
//     cursor: "pointer",
//   },
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: "'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.'",
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: "'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.'",
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: "'Their approach to improving our hospital operations was revolutionary and efficient.'",
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div style={styles.container}>
//       {/* <h2 style={{ ...styles.title, fontSize: "25px" }} className="mil-suptitle-testimonals">
//         TESTIMONIALS
//       </h2> */}
//       <h3 style={styles.subtitle}>What Our Customers Say</h3>
//       <div style={styles.carousel}>
//         {testimonials?.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.slide,
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             <div style={styles.testimonialBox}>
//               <p style={styles.text}>{testimonial.text}</p>
//               <h4 style={styles.name}>{testimonial.name}</h4>
//               <span style={styles.position}>{testimonial.title}</span>
//               <div style={styles.logos}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={styles.logo} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={styles.controls}>
//         <button onClick={prevSlide} style={styles.arrow}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={styles.arrow}>
//           &#10095;
//         </button>
//       </div>
//       <div style={styles.dots}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               ...styles.dot,
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px 20px",
//     // background: "url(/img/photo/BGgrayNet.webp) no-repeat center center/cover",
//     position: "relative",
//     backgroundColor:"rgb(12, 20, 31)"
//   },
//   title: {
//     fontSize: "25px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "rgb(188, 255, 0)",
//   },
//   subtitle: {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "white",
//     marginBottom: "30px",
//     textTransform: "uppercase",
//   },
//   carousel: {
//     display: "flex",
//     transition: "transform 0.6s ease-in-out",
//     overflow: "hidden",
//     position: "relative",
//     width: "100%",
//     paddingBottom: "50px",
//   },
//   slide: {
//     flexShrink: 0,
//     width: "100%",
//     textAlign: "center",
//     padding: "20px",
//   },
//   testimonialBox: {
//     // border: "2px solid #000",
//     borderRadius: "10px",
//     padding: "40px 20px",
//     backgroundColor: "rgb(12, 20, 31)",
//     minHeight: "300px",
//     maxWidth: "60%",
//     margin: "0 auto",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   text: {
//     fontSize: "25px",
//     color: "white",
//     marginBottom: "15px",
//   },
//   name: {
//     fontSize: "24px",
//     fontWeight: "bold", 
//     marginTop: "10px",
//     color: "white",
//   },
//   position: {
//     fontSize: "21px",
//     color: "white",
//     marginBottom: "28px",
//     display: "block",
//   },
//   logos: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     position: "absolute",
//     bottom: "-42px",
//     left: "0px",
//     width: "100%",
//     zIndex: "9999",
//     padding: "4px",
//   },
//   logo: {
//     width: "170px",
//     height: "auto",
//     // border: "2px solid #000",
//     borderRadius: "4px",
//     // backgroundColor: "white",
//   },
//   controls: {
//     display: "flex",
//     justifyContent: "space-between",
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     right: "10px",
//     transform: "translateY(-50%)",
//   },
//   arrow: {
//     background: "none",
//     border: "none",
//     fontSize: "60px",
//     color: "white",
//     cursor: "pointer",
//     padding: "5px 10px",
//   },
//   dots: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "58px",
//   },
//   dot: {
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     backgroundColor: "#ccc",
//     cursor: "pointer",
//   },
// };

// export default IdeasSection;



// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: "'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.'",
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: "'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.'",
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: "'Their approach to improving our hospital operations was revolutionary and efficient.'",
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>What Our Customers Say</h3>
//       <div style={{ display: "flex", transition: "transform 0.6s ease-in-out", overflow: "hidden", position: "relative", width: "100%", paddingBottom: "50px" }}>
//         {testimonials?.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{ flexShrink: 0, width: "100%", textAlign: "center", padding: "20px", transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             <div style={{ borderRadius: "10px", padding: "40px 20px", backgroundColor: "rgb(12, 20, 31)", minHeight: "300px", maxWidth: "60%", margin: "0 auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
//               <p style={{ fontSize: "30px", color: "white", marginBottom: "15px", whiteSpace: "normal", overflow: "visible", textOverflow: "clip" }}>{testimonial.text}</p>
//               <h4 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px", color: "white" }}>{testimonial.name}</h4>
//               <span style={{ fontSize: "21px", color: "white", marginBottom: "28px", display: "block" }}>{testimonial.title}</span>
//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", position: "absolute", bottom: "-42px", left: "0px", width: "100%", zIndex: "9999", padding: "4px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "170px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10094;</button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10095;</button>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc", cursor: "pointer" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;

// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>What Our Customers Say</h3>
//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px" }}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div style={{ borderRadius: "10px", padding: "40px 20px", backgroundColor: "rgb(12, 20, 31)", minHeight: "300px", maxWidth: "60%", margin: "0 auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
//               <p style={{ fontSize: "40px",  color: "white", marginBottom: "15px" }}>{testimonial.text}</p>
//               <h4 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px", color: "white" }}>{testimonial.name}</h4>
//               <span style={{ fontSize: "21px", color: "white", marginBottom: "28px", display: "block" }}>{testimonial.title}</span>
//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "170px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10094;</button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10095;</button>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc", cursor: "pointer" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;

// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>What Our Customers Say</h3>
//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px" }}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div style={{ borderRadius: "10px", padding: "40px 20px", backgroundColor: "rgb(12, 20, 31)", minHeight: "300px", maxWidth: "60%", margin: "0 auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
//               <p style={{ fontSize: "40px", color: "white", marginBottom: "15px", fontStyle:"italic", lineHeight: "1.2", padding: "10px" }}>{testimonial.text}</p>
//               <h4 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "10px", color: "white" }}>{testimonial.name}</h4>
//               <span style={{ fontSize: "25px", color: "white", marginBottom: "28px", display: "block" }}>{testimonial.title}</span>
//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "250px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10094;</button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>&#10095;</button>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc", cursor: "pointer" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;

// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>
//         What Our Customers Say
//       </h3>

//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px" }}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "10px",
//                 padding: "40px 10px",
//                 backgroundColor: "rgb(12, 20, 31)",
//                 minHeight: "300px",
//                 maxWidth: "80%",
//                 margin: "0 auto",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 textAlign: "justify",
//                 lineHeight: "1.4",
//               }}
//             >
//               <p style={{ fontSize: "40px", color: "white", marginBottom: "15px", fontStyle: "italic", padding: "10px" }}>
//                 {testimonial.text}
//               </p>
              
//               {/* Centering Name & Title */}
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h4 style={{ fontSize: "30px", fontWeight: "bold", color: "white", marginBottom: "5px" }}>
//                   {testimonial.name}
//                 </h4>
//                 <span style={{ fontSize: "25px", color: "white", display: "block" }}>
//                   {testimonial.title}
//                 </span>
//               </div>

//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px", marginTop: "20px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "250px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10095;
//         </button>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               width: "12px",
//               height: "12px",
//               borderRadius: "50%",
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>
//         What Our Customers Say
//       </h3>

//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px" }}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "10px",
//                 padding: "40px 10px",
//                 backgroundColor: "rgb(12, 20, 31)",
//                 minHeight: "320px", // 🔹 Ensuring Equal Heights
//                 maxWidth: "80%",
//                 margin: "0 auto",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between", // 🔹 Keeps content balanced
//                 alignItems: "center",
//                 textAlign: "justify",
//                 lineHeight: "1.4",
//               }}
//             >
//               <p style={{ fontSize: "40px", color: "white", flex: "1", display: "flex", alignItems: "center", textAlign: "center", marginBottom: "15px", fontStyle: "italic", padding: "10px", minHeight: "100px" }}>
//                 {testimonial.text}
//               </p>
              
//               {/* Centering Name & Title */}
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h4 style={{ fontSize: "30px", fontWeight: "bold", color: "white", marginBottom: "5px" }}>
//                   {testimonial.name}
//                 </h4>
//                 <span style={{ fontSize: "25px", color: "white", display: "block" }}>
//                   {testimonial.title}
//                 </span>
//               </div>

//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px", marginTop: "20px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "250px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10095;
//         </button>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               width: "12px",
//               height: "12px",
//               borderRadius: "50%",
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;

// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative" }}>
//       <h3 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "30px", textTransform: "uppercase" }}>
//         What Our Customers Say
//       </h3>

//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px", height: "450px" }}> {/* ✅ Set fixed height */}
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//               height: "100%", // ✅ Ensures Full Height Usage
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "10px",
//                 padding: "40px 10px",
//                 backgroundColor: "rgb(12, 20, 31)",
//                 height: "100%", // ✅ Makes sure all slides are the same size
//                 maxWidth: "80%",
//                 margin: "0 auto",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 textAlign: "justify",
//                 lineHeight: "1.4",
//               }}
//             >
//               <p style={{ fontSize: "40px", color: "white", flex: "1", display: "flex", alignItems: "center", textAlign: "center", fontStyle: "italic", padding: "10px" }}>
//                 {testimonial.text}
//               </p>
              
//               {/* Centering Name & Title */}
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h4 style={{ fontSize: "30px", fontWeight: "bold", color: "white", marginBottom: "5px" }}>
//                   {testimonial.name}
//                 </h4>
//                 <span style={{ fontSize: "25px", color: "white", display: "block" }}>
//                   {testimonial.title}
//                 </span>
//               </div>

//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px", marginTop: "20px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "250px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", left: "10px", right: "10px", transform: "translateY(-50%)" }}>
//         <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10094;
//         </button>
//         <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "60px", color: "white", cursor: "pointer", padding: "5px 10px" }}>
//           &#10095;
//         </button>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "58px" }}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               width: "12px",
//               height: "12px",
//               borderRadius: "50%",
//               backgroundColor: currentSlide === index ? "rgb(188, 255, 0)" : "#ccc",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   const prevSlide = () => {
//     setFadeIn(false);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//       setFadeIn(true);
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "rgb(12, 20, 31)", position: "relative", fontFamily: "Lato, sans-serif" }}>
//       <h3 style={{ fontSize: "40px", fontWeight: "400", color: "rgb(188, 255, 0)", marginBottom: "30px", textTransform: "uppercase", fontFamily: "Lato, sans-serif" }}>
//         What Our Customers Say
//       </h3>

//       <div style={{ position: "relative", width: "100%", paddingBottom: "50px", height: "450px" }}> 
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontFamily: "Lato, sans-serif"
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "10px",
//                 padding: "40px 10px",
//                 backgroundColor: "rgb(12, 20, 31)",
//                 height: "100%",
//                 maxWidth: "80%",
//                 margin: "0 auto",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 textAlign: "justify",
//                 lineHeight: "1.4",
//                 fontFamily: "Lato, sans-serif"
//               }}
//             >
//               <p style={{ fontSize: "40px", color: "white", flex: "1", display: "flex", alignItems: "center", textAlign: "center", fontStyle: "italic", padding: "10px", fontFamily: "Lato, sans-serif" }}>
//                 {testimonial.text}
//               </p>
              
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h4 style={{ fontSize: "30px", fontWeight: "bold", color: "white", marginBottom: "5px", fontFamily: "Lato, sans-serif" }}>
//                   {testimonial.name}
//                 </h4>
//                 <span style={{ fontSize: "25px", color: "white", display: "block", fontFamily: "Lato, sans-serif" }}>
//                   {testimonial.title}
//                 </span>
//               </div>

//               <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "4px", marginTop: "20px" }}>
//                 {testimonial.logos.map((logo, i) => (
//                   <img key={i} src={logo} alt="Logo" style={{ width: "250px", height: "auto", borderRadius: "4px" }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div 
//       style={{ 
//         textAlign: "center", 
//         padding: "50px 20px", 
//         backgroundColor: "rgb(12, 20, 31)", 
//         position: "relative", 
//         fontFamily: "Lato, sans-serif" 
//       }}
//     >
//       <h3 
//         style={{ 
//           fontSize: "40px", 
//           fontWeight: "400", 
//           color: "rgb(188, 255, 0)", 
//           marginBottom: "30px", 
//           textTransform: "uppercase", 
//           fontFamily: "Lato, sans-serif" 
//         }}
//       >
//         What Our Customers Say
//       </h3>

//       <div 
//         style={{ 
//           position: "relative", 
//           width: "100%", 
//           paddingBottom: "50px", 
//           height: "450px" 
//         }}
//       > 
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: index === currentSlide && fadeIn ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               position: index === currentSlide ? "relative" : "absolute",
//               width: "100%",
//               textAlign: "center",
//               padding: "20px",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontFamily: "Lato, sans-serif",
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "10px",
//                 padding: "40px 10px",
//                 backgroundColor: "rgb(12, 20, 31)",
//                 height: "100%",
//                 maxWidth: "80%",
//                 margin: "0 auto",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 textAlign: "justify",
//                 lineHeight: "1.4",
//                 fontFamily: "Lato, sans-serif",
//               }}
//             >
//               <p 
//                 style={{ 
//                   fontSize: "40px", 
//                   color: "white", 
//                   flex: "1", 
//                   display: "flex", 
//                   alignItems: "center", 
//                   textAlign: "center", 
//                   fontStyle: "italic", 
//                   padding: "10px", 
//                   fontFamily: "Lato, sans-serif" 
//                 }}
//               >
//                 {testimonial.text}
//               </p>
              
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h4 
//                   style={{ 
//                     fontSize: "30px", 
//                     fontWeight: "bold", 
//                     color: "white", 
//                     marginBottom: "5px", 
//                     fontFamily: "Lato, sans-serif" 
//                   }}
//                 >
//                   {testimonial.name}
//                 </h4>
//                 <span 
//                   style={{ 
//                     fontSize: "25px", 
//                     color: "white", 
//                     display: "block", 
//                     fontFamily: "Lato, sans-serif" 
//                   }}
//                 >
//                   {testimonial.title}
//                 </span>
//               </div>

//               <div 
//                 style={{ 
//                   display: "flex", 
//                   justifyContent: "center", 
//                   gap: "15px", 
//                   padding: "4px", 
//                   marginTop: "20px" 
//                 }}
//               >
//                 {testimonial.logos.map((logo, i) => (
//                   <img 
//                     key={i} 
//                     src={logo} 
//                     alt="Logo" 
//                     style={{ 
//                       width: "250px", 
//                       height: "auto", 
//                       borderRadius: "4px" 
//                     }} 
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeasSection;


// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   const testimonials = [
//     {
//       text: '"Consulting services for all things related to DevOps provided insight into automation and streamlining processes."',
//       name: "Mark Wilson",
//       title: "CEO, Shell",
//       logos: ["/img/ideas/3.png"],
//     },
//     {
//       text: '"Great support and consultancy from the team helped us achieve our automation goals efficiently and on time."',
//       name: "Jane Smith",
//       title: "CTO, Unilever",
//       logos: ["/img/ideas/1.png"],
//     },
//     {
//       text: '"Their approach to improving our hospital operations was revolutionary and efficient."',
//       name: "Dr. Ahmed Khan",
//       title: "Director, Indus Hospital",
//       logos: ["/img/ideas/2.png"],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         setFadeIn(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="ideas-section">
//       <h3 className="section-title">What Our Customers Say</h3>

//       <div className="testimonial-container">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className={`testimonial-slide ${index === currentSlide ? "active" : ""}`}
//           >
//             <p className="testimonial-text">{testimonial.text}</p>

//             <div className="testimonial-info">
//               <h4 className="testimonial-name">{testimonial.name}</h4>
//               <span className="testimonial-title">{testimonial.title}</span>
//             </div>

//             <div className="testimonial-logos">
//               {testimonial.logos.map((logo, i) => (
//                 <img key={i} src={logo} alt="Logo" className="testimonial-logo" />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Responsive Styles */}
//       <style>
//         {`
//           .ideas-section {
//             text-align: center;
//             padding: 50px 20px;
//             background-color: rgb(12, 20, 31);
//             position: relative;
//             font-family: "Lato", sans-serif;
//           }

//           .section-title {
//             font-size: 40px;
//             font-weight: 700;
//             color: rgb(188, 255, 0);
//             margin-bottom: 30px;
//             text-transform: uppercase;
//           }

//           .testimonial-container {
//             position: relative;
//             width: 100%;
//             padding-bottom: 50px;
//             height: auto;
//           }

//           .testimonial-slide {
//             opacity: 0;
//             transition: opacity 0.5s ease-in-out;
//             position: absolute;
//             width: 100%;
//             text-align: center;
//             padding: 20px;
//             height: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-direction: column;
//             visibility: hidden;
//           }

//           .testimonial-slide.active {
//             opacity: 1;
//             position: relative;
//             visibility: visible;
//           }

//           .testimonial-text {
//             font-size: 1.8rem;
//             color: white;
//             text-align: center;
//             font-style: italic;
//             padding: 10px;
//           }

//           .testimonial-info {
//             text-align: center;
//             margin-top: 20px;
//           }

//           .testimonial-name {
//             font-size: 1.5rem;
//             font-weight: bold;
//             color: white;
//             margin-bottom: 5px;
//           }

//           .testimonial-title {
//             font-size: 1.2rem;
//             color: white;
//             display: block;
//           }

//           .testimonial-logos {
//             display: flex;
//             justify-content: center;
//             gap: 15px;
//             padding: 4px;
//             margin-top: 20px;
//             flex-wrap: wrap;
//           }

//           .testimonial-logo {
//             width: 200px;
//             height: auto;
//             border-radius: 4px;
//           }

//           /* Responsive Design */
//           @media (max-width: 768px) {
//             .section-title {
//               font-size: 30px;
//             }

//             .testimonial-text {
//               font-size: 16px;
//               padding: 10px;
//             }

//             .testimonial-name {
//               font-size: 18px;
//             }

//             .testimonial-title {
//               font-size: 14px;
//             }

//             .testimonial-logo {
//               width: 150px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default IdeasSection;


"use client";

import { useState, useEffect } from "react";

const IdeasSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  const testimonials = [
    {
      text: '"Consulting services for DevOps provided insight into automation & streamlining processes."',
      name: "Mark Wilson",
      title: "CEO, Shell",
      logos: ["/img/ideas/3.png"],
    },
    {
      text: '"Great support & consultancy helped us achieve automation goals efficiently & on time."',
      name: "Jane Smith",
      title: "CTO, Unilever",
      logos: ["/img/ideas/1.png"],
    },
    {
      text: '"Their approach to improving our hospital operations was revolutionary & efficient."',
      name: "Dr. Ahmed Khan",
      title: "Director, Indus Hospital",
      logos: ["/img/ideas/2.png"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setAnimateText(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="ideas-section">
      <h3 className="section-title">What Our Customers Say</h3>

      <div className="testimonial-container">
        <div className="testimonial-content">
          <p className={`testimonial-text ${animateText ? "slide-in" : "slide-out"}`}>
            {testimonials[currentSlide].text}
          </p>

          <div className="testimonial-info">
            <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
            <span className="testimonial-title">{testimonials[currentSlide].title}</span>
          </div>

          <div className="testimonial-logos">
            {testimonials[currentSlide].logos.map((logo, i) => (
              <img key={i} src={logo} alt="Logo" className="testimonial-logo" />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .ideas-section {
            text-align: center;
            padding: 50px 20px;
            background-color: rgb(12, 20, 31);
            font-family: "Lato", sans-serif;
          }

          .section-title {
            font-size: 40px;
            font-weight: 700;
            color: rgb(188, 255, 0);
            margin-bottom: 30px;
            text-transform: uppercase;
          }

          .testimonial-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            padding-bottom: 50px;
            overflow: hidden;
          }

          .testimonial-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .testimonial-text {
            font-size: 1.5rem;
            color: white;
            text-align: center;
            font-style: italic;
            padding: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          }

          .testimonial-text.slide-in {
            transform: translateY(0);
            opacity: 1;
          }

          .testimonial-text.slide-out {
            transform: translateY(20px);
            opacity: 0;
          }

          .testimonial-info {
            text-align: center;
            margin-top: 20px;
          }

          .testimonial-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 5px;
          }

          .testimonial-title {
            font-size: 1.2rem;
            color: white;
            display: block;
          }

          .testimonial-logos {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 4px;
            margin-top: 20px;
            flex-wrap: wrap;
          }

          .testimonial-logo {
            width: 200px;
            height: auto;
            border-radius: 4px;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 30px;
            }

            .testimonial-text {
              font-size: 14px;
              padding: 10px;
            }

            .testimonial-name {
              font-size: 18px;
            }

            .testimonial-title {
              font-size: 14px;
            }

            .testimonial-logo {
              width: 150px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IdeasSection;
