

// "use client"; // Ensures this is a Client Component

// import React from "react";

// const HowWeWork1 = () => {
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
//           fontSize: "40px",
//           fontWeight: "700",
//           marginBottom: "20px",
//           fontFamily: "'Lato', sans-serif",
//         }}
//       >
//         HOW WE WORK
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "550px",
//           backgroundImage: 'url("/img/covers/Howweworks.png")',
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Button - moved lower with marginTop */}
//       {/* <button
//         style={{
//           backgroundColor: "#BCFF00",
//           color: "rgb(12, 20, 31)",
//           padding: "15px 30px",
//           fontSize: "16px",
//           fontWeight: "bold",
//           borderRadius: "8px",
//           border: "none",
//           cursor: "pointer",
//           textDecoration: "none",
//           transition: "transform 0.3s ease",
//           fontFamily: "'Lato', sans-serif",
//           display: "inline-block",
//           marginTop: "50px", // Increased margin to move the button lower
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         Book a Free Consultation
//       </button> */}
//     </section>
//   );
// };

// export default HowWeWork1;

// "use client";

// import React from "react";

// const HowWeWork1 = () => {
//   return (
//     <section
//       style={{
//         backgroundColor: "rgb(12, 20, 31)",
//         color: "#fff",
//         padding: "50px 5%",
//         textAlign: "center",
//         position: "relative",
//       }}
//     >
//       {/* Title */}
//       <h2
//         style={{
//           color: "rgb(188, 255, 0)",
//           fontSize: "clamp(28px, 5vw, 40px)",
//           fontWeight: "700",
//           marginBottom: "10px", // Reduced from 20px to 10px
//           fontFamily: "'Lato', sans-serif",
//         }}
//       >
//         HOW WE WORK
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "60vh",
//           backgroundImage: 'url("/img/covers/Howweworks.png")',
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           marginTop: "-10px", // Pulls image closer to heading
//         }}
//       ></div>
//     </section>
//   );
// };

// export default HowWeWork1;



"use client";

import React, { useState, useEffect } from "react";

const HowWeWork1 = () => {
  const [height, setHeight] = useState("80vh"); // Default height

  // Function to update height based on screen width
  const updateHeight = () => {
    setHeight(window.innerWidth <= 768 ? "60vh" : "80vh");
  };

  // Run on mount & listen for window resize
  useEffect(() => {
    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "rgb(12, 20, 31)",
        color: "#fff",
        padding: "50px 5%",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "rgb(188, 255, 0)",
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: "700",
          marginBottom: "10px",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        HOW WE WORK
      </h2>

      {/* Background Image */}
      <div
        style={{
          width: "100%",
          height: height, // Dynamic height
          backgroundImage: 'url("/img/covers/Howweworks.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginTop: "-10px",
        }}
      ></div>
    </section>
  );
};

export default HowWeWork1;
