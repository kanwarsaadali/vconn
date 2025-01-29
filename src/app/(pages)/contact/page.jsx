// import React from "react";
// import Image from "next/image";
// import Header from "@layouts/headers/Index";
// import Footer from "@layouts/footers/Index";
// import IdeasSection1 from "@components/sections/Ideas1";
// import ServicesSection1 from "@components/sections/Services1";
// import HowWeWork1 from "@components/sections/HowWeWork1";

// const Contact = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         minHeight: "100vh", // Ensure the page covers the full viewport height
//         overflowX: "hidden", // Prevent horizontal scrolling
//         display: "flex",
//         flexDirection: "column", // Stack content vertically
//       }}
//     >
//       {/* Header */}
//       <Header layout={"default"} />

//       {/* Hero Section with Background Image */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "70vh", // Adjusted height to occupy 80% of the viewport
//           backgroundImage: "url('/img/covers/image1.png')", // Replace with your image path
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//         }}
//       >
//         {/* Gray Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent gray
//             zIndex: 1,
//           }}
//         ></div>

//         {/* Overlay Content */}
//         <div style={{ position: "relative", zIndex: 2 }}>
//           <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
//             <span style={{ color: "white" }}>Empowering</span>{" "}
//             <span style={{ color: "rgb(188, 255, 0)" }}>Solutions</span>
//             <span style={{ color: "white" }}>Elevating</span>
//           </h1>
//           <h1
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               color: "white",
//             }}
//           >
//            Experiences
//           </h1>
//         </div>
//       </div>

//       {/* Main Content Sections */}
//       <div
//         style={{
//           flex: 1, // Ensure sections grow and fill the remaining space
//           width: "100%",
//         }}
//       >
//       </div>

//       {/* Footer */}
//       <Footer layout={"default"} />
//     </div>
//   );
// };

// export default Contact;


// "use client";  // Ensure this is at the top!

// import React from "react";
// import Header from "@layouts/headers/Index";
// import Footer from "@layouts/footers/Index";

// const Contact = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         overflowX: "hidden",
//         backgroundColor: "#0C141F",
//       }}
//     >
//       {/* Header */}
//       <Header layout="default" />

//       {/* Hero Section */}
//       <div
//         style={{
//           width: "100%",
//           height: "70vh",
//           background: "url('/img/covers/image1.png') center/cover no-repeat",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//           textAlign: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         ></div>

//         {/* Hero Content */}
//         <div style={{ position: "relative", color: "white", fontSize: "2.5rem", fontWeight: "bold" }}>
//           <h1>
//             <span style={{color:"white"}}>Empowering</span> <span style={{ color: "rgb(188, 255, 0)" }}>Solutions</span> <span style={{color:"white"}}>Elevating</span>
//           </h1>
//           <h1 style={{color:"white"}}>Experiences</h1>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem 1.5rem" }}>
//         <h2 style={{ color: "rgb(188, 255, 0)", fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
//           How May We Assist You?
//         </h2>

//         <form
//           style={{
//             width: "100%",
//             maxWidth: "600px",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             padding: "2rem",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           {/* Name & Email */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
//             <input
//               type="text"
//               placeholder="Your name"
//               style={inputStyle}
//             />
//             <input
//               type="email"
//               placeholder="Your email address"
//               style={inputStyle}
//             />
//           </div>

//           {/* Company & Phone Number */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
//             <input
//               type="text"
//               placeholder="Company name"
//               style={inputStyle}
//             />
//             <input
//               type="text"
//               placeholder="Your phone number"
//               style={inputStyle}
//             />
//           </div>

//           {/* Service of Interest & Country */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
//             <select style={inputStyle}>
//               <option>Your interest of service</option>
//               <option>Cybersecurity</option>
//               <option>DevSecOps</option>
//               <option>Managed Services</option>
//             </select>
//             <select style={inputStyle}>
//               <option>Your country</option>
//               <option>USA</option>
//               <option>UK</option>
//               <option>India</option>
//             </select>
//           </div>

//           {/* Message Box */}
//           <textarea
//             placeholder="Write your message here..."
//             style={{ ...inputStyle, height: "80px" }}
//           ></textarea>

//           {/* Newsletter Checkbox */}
//           <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", color: "white" }}>
//             <input type="checkbox" style={{ accentColor: "rgb(188, 255, 0)" }} />
//             <label>Subscribe for Newsletter</label>
//           </div>

//           {/* Submit Button */}
//           <button
//             style={buttonStyle}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(160, 230, 0)")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(188, 255, 0)")}
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>

//       {/* Footer */}
//       <Footer layout="default" />
//     </div>
//   );
// };

// // Common Input Field Style
// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   border: "1px solid #555",
//   background: "transparent",
//   color: "white",
//   borderRadius: "5px",
//   outline: "none",
//   transition: "all 0.3s ease-in-out",
// };

// // Button Style
// const buttonStyle = {
//   width: "100%",
//   padding: "12px",
//   backgroundColor: "rgb(188, 255, 0)",
//   color: "black",
//   fontWeight: "bold",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   transition: "background 0.3s ease-in-out",
// };

// export default Contact;


"use client";  // Ensure this is at the top!

import React from "react";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

const Contact = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        backgroundColor: "#0C141F",
      }}
    >
      {/* Header */}
      <Header layout="default" />

      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "70vh",
          background: "url('/img/covers/image1.png') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Hero Content */}
        <div style={{ position: "relative", color: "white", fontSize: "2.5rem", fontWeight: "bold" }}>
          <h1>
            <span style={{ color: "white" }}>Empowering</span> <span style={{ color: "rgb(188, 255, 0)" }}>Solutions</span> <span style={{ color: "white" }}>Elevating</span>
          </h1>
          <h1 style={{ color: "white" }}>Experiences</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem 2rem" }}>
        <h2 style={{ color: "rgb(188, 255, 0)", fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
          How May We Assist You?
        </h2>

        <form
          style={{
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "rgba(12, 20, 31, 0.9)",
            padding: "3rem",
            borderRadius: "15px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
            color: "white",
          }}
        >
          {/* Name & Email */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input type="text" placeholder="Your name" style={inputStyle} />
            <input type="email" placeholder="Your email address" style={inputStyle} />
          </div>

          {/* Company & Phone Number */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input type="text" placeholder="Company name" style={inputStyle} />
            <input type="text" placeholder="Your phone number" style={inputStyle} />
          </div>

          {/* Service of Interest & Country */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <select style={selectStyle}>
              <option>Your interest of service</option>
              <option>Cybersecurity</option>
              <option>DevSecOps</option>
              <option>Managed Services</option>
            </select>
            <select style={selectStyle}>
              <option>Your country</option>
              <option>USA</option>
              <option>UK</option>
              <option>India</option>
            </select>
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Write your message here..."
            style={{ ...inputStyle, height: "150px" }}
          ></textarea>

          {/* Newsletter Checkbox */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <input type="checkbox" style={{ accentColor: "rgb(188, 255, 0)" }} />
            <label>Subscribe for Newsletter</label>
          </div>

          {/* Submit Button */}
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(160, 230, 0)")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(188, 255, 0)")}
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer layout="default" />
    </div>
  );
};

// Common Input Field Style
const inputStyle = {
  width: "100%",
  padding: "16px",
  border: "1px solid rgb(188, 255, 0)",
  background: "transparent",
  color: "white",
  borderRadius: "8px",
  outline: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
};

// Dropdown Style
const selectStyle = {
  ...inputStyle,
  backgroundColor: "#1C2833",
  cursor: "pointer",
};

// Button Style
const buttonStyle = {
  width: "100%",
  padding: "16px",
  backgroundColor: "rgb(188, 255, 0)",
  color: "black",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1.1rem",
  transition: "background 0.3s ease-in-out",
};

export default Contact;
