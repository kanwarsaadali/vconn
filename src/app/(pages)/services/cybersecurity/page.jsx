// "use client";

// import React from "react";
// import Image from "next/image";
// import Header from "@layouts/headers/Index";
// import Project1 from "@components/sections/Projects1";
// import dynamic from "next/dynamic";
// import HowWeWork1 from "@components/sections/HowWeWork1";
// import BookConsulation from "@components/sections/BookConsulation";

// const ClientSlider = dynamic(() => import("@/src/app/_components/sliders/Client"), { ssr: false });
// // const DevopsecopsSlider = dynamic(() => import("@components/sliders/Devsecops1"), { ssr: false });
// const DevopsSlider = dynamic( () => import("@components/sliders/Devops"), { ssr: false } );
// import Casestudies from "@components/sections/Casestudies";
// import Footer from "@layouts/footers/Index";
// import { useRouter } from "next/navigation";


// const Cybersecurity = () => {
//     const router = useRouter();
  
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "50px",
//     backgroundColor: "rgb(12, 20, 31)", // Dark background
//     color: "white", // Text color
//     boxSizing: "border-box",
//     flexWrap: "wrap", // Allows content to wrap for smaller screens
//     fontFamily: "'Lato', sans-serif", // Applying Lato font
//   };

//   const textStyle = {
//     flex: "1 1 50%", // Takes up 50% of the width
//     minWidth: "300px", // Ensures text always has enough space
//     padding: "20px",
//     fontFamily: "'Lato', sans-serif",
//   };

//   const buttonStyle = {
//     backgroundColor: "#BCFF00", // Bright green color
//     color: "rgb(12, 20, 31)", // Dark text color
//     padding: "15px 30px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     textDecoration: "none",
//     transition: "transform 0.3s ease",
//     fontFamily: "'Lato', sans-serif",
//   };

//   const imageWrapperStyle = {
//     flex: "1 1 40%", // Takes up 40% of the width
//     minWidth: "300px", // Ensures the image always has enough space
//     textAlign: "center", // Centers the image
//   };

//   const imageStyle = {
//     width: "75%", // Ensures the image takes the full width of its container
//     height: "auto", // Maintains aspect ratio
//   };

//   return (
//     <div style={{ backgroundColor: "rgb(12, 20, 31)", fontFamily: "'Lato', sans-serif" }}>
//       <Header layout={"default"} />

//       <div style={containerStyle}>
//         {/* Text Section */}
//         <div style={textStyle}>
//           <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white", fontFamily: "'Lato', sans-serif" }}>
//           Protect Your Data & Systems from Cyber Threats
//           </h1>
//           <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
//             With agile Vulnerability Analysis and Penetration Testing (NAPT) and Security Operations Center (SOC), mitigate risks and ensure protection of your digital systems, networks, and data.
//           </p>
//           <a
//             href="#"
//             style={buttonStyle}
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//             onClick={() => router.push("/contact")}
//           >
//             Book a Free Consultation
//           </a>
//         </div>

//         {/* Image Section */}
//         <div style={imageWrapperStyle}>
//           <Image
//             src="/img/Project/cybersecurity.png"
//             alt="Cybersecurity"
//             width={400}
//             height={400}
//             style={imageStyle}
//           />
//         </div>
//       </div>

//       <Project1 />
//       <div>
  
// <img src="/img/Project/whyuscyber.svg" alt="" style={imageStyle} />

//       </div>
//       <ClientSlider />
//       <HowWeWork1 />
//       <BookConsulation/>
//       <DevopsSlider />
//       <Casestudies />
//     <Footer layout={"default"} />

//     </div>
//   );
// };

// export default Cybersecurity;


"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Project1 from "@components/sections/Projects1";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
import BookConsulation from "@components/sections/BookConsulation";

const ClientSlider = dynamic(() => import("@/src/app/_components/sliders/Client"), { ssr: false });
const DevopsSlider = dynamic(() => import("@components/sliders/Devops"), { ssr: false });
import Casestudies from "@components/sections/Casestudies";
import Footer from "@layouts/footers/Index";
import { useRouter } from "next/navigation";

const Cybersecurity = () => {
  const router = useRouter();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "rgb(12, 20, 31)",
    color: "white",
    boxSizing: "border-box",
    flexWrap: "wrap",
    fontFamily: "'Lato', sans-serif",
  };

  const textStyle = {
    flex: "1 1 50%",
    minWidth: "300px",
    padding: "20px",
    fontFamily: "'Lato', sans-serif",
  };

  const buttonStyle = {
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
  };

  const imageWrapperStyle = {
    flex: "1 1 40%",
    minWidth: "300px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "70%",
    height: "auto",
  };

  return (
    <div style={{ backgroundColor: "rgb(12, 20, 31)", fontFamily: "'Lato', sans-serif" }}>
      <Header layout={"default"} />

      {/* Hero Section */}
      <div style={containerStyle}>
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white" }}>
            Protect Your Data & Systems from Cyber Threats
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
            With agile Vulnerability Analysis and Penetration Testing (NAPT) and Security Operations Center (SOC),
            mitigate risks and ensure protection of your digital systems, networks, and data.
          </p>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => router.push("/contact")}
          >
            Book a Free Consultation
          </a>
        </div>

        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/cybersecurity.png"
            alt="Cybersecurity"
            width={400}
            height={400}
            style={imageStyle}
          />
        </div>
      </div>

      <Project1 />

      {/* ✅ Centered SVG Section */}
      {/* <div style={{ textAlign: "center", padding: "40px 0" }}>
  <h1 style={{ 
    color: "#BCFF00", 
    fontSize: "40px", 
    marginBottom: "10px", 
    fontFamily: "'Lato', sans-serif", 
    fontWeight:"700"
  }}>
    WHY US
  </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
        <img src="/img/Project/whyuscyber.svg" alt="Why Us Cyber" style={imageStyle} />
      </div>
      </div> */}

      {/* ✅ Centered SVG Section */}
<div style={{ textAlign: "center", padding: "40px 0 20px" }}>
  <h1
    style={{
      color: "#BCFF00",
      fontSize: "40px",
      // marginBottom: "10px",
      fontFamily: "'Lato', sans-serif",
      fontWeight: "700",
    }}
  >
    WHY US
  </h1>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0" }}>
    <img src="/img/Project/whyuscyber.svg" alt="Why Us Cyber" style={imageStyle} />
  </div>
</div>



      <ClientSlider />
      <HowWeWork1 />
      <BookConsulation />
      <DevopsSlider />
      <Casestudies />
      <Footer layout={"default"} />
    </div>
  );
};

export default Cybersecurity;
