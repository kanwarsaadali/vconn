// "use client";

// import { useState, useEffect } from "react";

// const IdeasSection1 = () => {
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
//     <div style={{background:"rgba(0, 0, 0, 0.5)"}}>
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
//       {/* <div style={styles.dots}>
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
//       </div> */}
//     </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px 20px",
//     // background: "url(/img/photo/BGgrayNet.webp) no-repeat center center/cover", // Updated to use the public directory
//     backgroundColor:"rgb(12, 20, 31)",
//     position: "relative",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "rgb(188, 255, 0)",
//     marginBottom:"30px"
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
//     minHeight: "300px",
//     padding: "20px",
//     // backgroundColor: "#fff",
//     maxWidth: "70%",
//     margin: "0 auto",
//     // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional for a slight shadow,
//     backgroundColor:"rgb(188, 255, 0)",
//     position:"relative"
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
//     color: "rgb(188, 255, 0)",
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

// export default IdeasSection1;


"use client";

import { useState, useEffect } from "react";

const IdeasSection1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "'Consulting services for all things related to DevOps provided insight into automation and streamlining processes, improving our product development timelines significantly.'",
      name: "Mark Wilson",
      title: "CEO, Shell",
      logos: ["/img/ideas/3.png"],
    },
    {
      text: "'Great support and consultancy from the team helped us achieve our automation goals efficiently and on time.'",
      name: "Jane Smith",
      title: "CTO, Unilever",
      logos: ["/img/ideas/1.png"],
    },
    {
      text: "'Their approach to improving our hospital operations was revolutionary and efficient.'",
      name: "Dr. Ahmed Khan",
      title: "Director, Indus Hospital",
      logos: ["/img/ideas/2.png"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.title, fontSize: "25px" }} className="mil-suptitle-testimonals">
          TESTIMONIALS
        </h2>
        <h3 style={styles.subtitle}>What Our Customers Say</h3>
        <div style={styles.carousel}>
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              <div style={styles.testimonialBox}>
                <p style={styles.text}>{testimonial.text}</p>
                <h4 style={styles.name}>{testimonial.name}</h4>
                <span style={styles.position}>{testimonial.title}</span>
                <div style={styles.logos}>
                  {testimonial.logos.map((logo, i) => (
                    <img key={i} src={logo} alt="Logo" style={styles.logo} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.controls}>
          <button onClick={prevSlide} style={styles.arrow}>
            &#10094;
          </button>
          <button onClick={nextSlide} style={styles.arrow}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "rgb(12, 20, 31)",
    position: "relative",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "rgb(188, 255, 0)",
  },
  subtitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "white",
    marginBottom: "30px",
    textTransform: "uppercase",
  },
  carousel: {
    display: "flex",
    transition: "transform 0.6s ease-in-out",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    paddingBottom: "50px",
  },
  slide: {
    flexShrink: 0,
    width: "100%",
    textAlign: "center",
    padding: "20px",
  },
  testimonialBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #000",
    borderRadius: "10px",
    minHeight: "300px",
    padding: "20px",
    maxWidth: "70%",
    margin: "0 auto",
    backgroundColor: "rgb(188, 255, 0)",
    position: "relative",
    textAlign: "center",
  },
  text: {
    fontSize: "22px",
    color: "#555",
    marginBottom: "15px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#17283E",
  },
  position: {
    fontSize: "21px",
    color: "#17283E",
    marginBottom: "28px",
    display: "block",
  },
  logos: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    position: "absolute",
    bottom: "-42px",
    left: "0px",
    width: "100%",
    zIndex: "9999",
    padding: "4px",
  },
  logo: {
    width: "170px",
    height: "auto",
    border: "2px solid #000",
    borderRadius: "4px",
    backgroundColor: "white",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "10px",
    right: "10px",
    transform: "translateY(-50%)",
  },
  arrow: {
    background: "none",
    border: "none",
    fontSize: "60px",
    color: "rgb(188, 255, 0)",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default IdeasSection1;
