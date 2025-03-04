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
//           fontWeight:"400",
//           // fontWeight: "bold",
//           marginBottom: "20px",
//           fontFamily:"'Lato', sans-serif"
//         }}
//       >
//         HOW WE WORK
//       </h2>

//       {/* Background Image */}
//       <div
//         style={{
//           width: "100%",
//           height: "550px", // Adjust height as needed
//           backgroundImage: 'url("/img/covers/Howweworks.png")',
//           backgroundSize: "contain", // Ensures the full image is visible
//           backgroundRepeat: "no-repeat", // Prevents repeating the image
//           backgroundPosition: "center", // Centers the image
//         }}
        
//       >
        
//       </div>
//       <a
//             href="#"
//             style={{backgroundColor: "#BCFF00", // Bright green color
//               color: "rgb(12, 20, 31)", // Dark text color
//               padding: "15px 30px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               top:"40px",
//               marginBottom:"40px",
//               border: "none",
//               cursor: "pointer",
//               textDecoration: "none",
//               transition: "transform 0.3s ease",
//               fontFamily: "'Lato', sans-serif",}}

            
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//           >
//             Book a Free Consultation
//           </a>
//     </section>
//   );
// };

// export default HowWeWork1;


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
//           fontWeight: "400",
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
//       <a
//         href="#"
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
//           marginTop: "30px", // Increased margin to move the button lower
//         }}
//         onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//         onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//       >
//         Book a Free Consultation
//       </a>
//     </section>
//   );
// };

// export default HowWeWork1;


"use client"; // Ensures this is a Client Component

import React from "react";

const HowWeWork1 = () => {
  return (
    <section
      style={{
        backgroundColor: "rgb(12, 20, 31)",
        color: "#fff",
        padding: "50px 20px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "rgb(188, 255, 0)",
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "20px",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        HOW WE WORK
      </h2>

      {/* Background Image */}
      <div
        style={{
          width: "100%",
          height: "550px",
          backgroundImage: 'url("/img/covers/Howweworks.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Button - moved lower with marginTop */}
      <button
        style={{
          backgroundColor: "#BCFF00",
          color: "rgb(12, 20, 31)",
          padding: "15px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          transition: "transform 0.3s ease",
          fontFamily: "'Lato', sans-serif",
          display: "inline-block",
          marginTop: "50px", // Increased margin to move the button lower
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Book a Free Consultation
      </button>
    </section>
  );
};

export default HowWeWork1;
