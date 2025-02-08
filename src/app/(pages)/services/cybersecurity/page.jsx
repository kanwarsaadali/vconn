// const Cybersecurity = () => {
//     return (
//       <div style={{ padding: "50px", color: "rgb(12, 20, 31)" }}>
//         <h1>Cybersecurity Solutions</h1>
//         <p>
//           Details about cybersecurity solutions go here. Add your content to
//           make this page informative for users.
//         </p>
//       </div>
//     );
//   };
  
//   export default Cybersecurity;
  

// "use client";

// import React from "react";
// import Image from "next/image";

// const Cybersecurity = () => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "50px",
//     backgroundColor: "rgb(12, 20, 31)", // Dark background
//     color: "white", // Text color
//     height: "100vh", // Full viewport height
//     boxSizing: "border-box",
//   };

//   const textStyle = {
//     maxWidth: "50%",
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
//   };

//   const buttonHoverStyle = {
//     transform: "scale(1.05)",
//   };

//   const imageStyle = {
//     maxWidth: "40%",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Text Section */}
//       <div style={textStyle}>
//         <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Cybersecurity</h1>
//         <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
//           Safeguarding your business from evolving cyber threats with robust
//           strategies, threat intelligence, and proactive measures to protect
//           your digital assets.
//         </p>
//         <a
//           href="#"
//           style={buttonStyle}
//           onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//           onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//         >
//           Book a Free Consultation
//         </a>
//       </div>

//       {/* Image Section */}
//       <div style={imageStyle}>
//         <Image
//           src="/img/Project/cybersecurity.png" // Update with the actual image path
//           alt="Cybersecurity"
//           width={500}
//           height={500}
//           style={{ objectFit: "contain" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Cybersecurity;


// "use client";

// import React from "react";
// import Image from "next/image";
// // import Header from "@layouts/headers/Index";
// import Project2 from "@components/sections/Projects2";
// import Project1 from "@components/sections/Projects1";



// const Cybersecurity = () => {
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
//   };

//   const textStyle = {
//     flex: "1 1 50%", // Takes up 50% of the width
//     minWidth: "300px", // Ensures text always has enough space
//     padding: "20px",
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
//   };

//   const imageWrapperStyle = {
//     flex: "1 1 40%", // Takes up 40% of the width
//     minWidth: "300px", // Ensures the image always has enough space
//     textAlign: "center", // Centers the image
//   };

//   const imageStyle = {
//     maxWidth: "100%", // Ensures the image doesn't exceed its container
//     height: "auto", // Maintains aspect ratio
//   };

//   return (
//     <div>
//       {/* <Header layout={"default"} /> */}

//     <div style={containerStyle}>
//       {/* Text Section */}
//       <div style={textStyle}>
//         <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Cybersecurity</h1>
//         <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
//           Safeguarding your business from evolving cyber threats with robust
//           strategies, threat intelligence, and proactive measures to protect
//           your digital assets.
//         </p>
//         <a
//           href="#"
//           style={buttonStyle}
//           onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//           onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//         >
//           Book a Free Consultation
//         </a>
//       </div>

//       {/* Image Section */}
//       <div style={imageWrapperStyle}>
//         <Image
//           src="/img/Project/cybersecurity.png" // Update with the actual image path
//           alt="Cybersecurity"
//           width={500}
//           height={500}
//           style={imageStyle}
//         />
//       </div>
//     </div>
//     <Project2/>
//     <img src="/img/Project/whyuscyber.png" alt="" />

//     </div>
//   );
// };

// export default Cybersecurity;


// "use client";

// import React from "react";
// import Image from "next/image";
// // import Header from "@layouts/headers/Index";
// import Project2 from "@components/sections/Projects2";
// import Project1 from "@components/sections/Projects1";

// const Cybersecurity = () => {
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
//   };

//   const textStyle = {
//     flex: "1 1 50%", // Takes up 50% of the width
//     minWidth: "300px", // Ensures text always has enough space
//     padding: "20px",
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
//   };

//   const imageWrapperStyle = {
//     flex: "1 1 40%", // Takes up 40% of the width
//     minWidth: "300px", // Ensures the image always has enough space
//     textAlign: "center", // Centers the image
//   };

//   const imageStyle = {
//     width: "100%", // Ensures the image takes the full width of its container
//     height: "auto", // Maintains aspect ratio
//   };

//   return (
//     <div>
//       {/* <Header layout={"default"} /> */}

//       <div style={containerStyle}>
//         {/* Text Section */}
//         <div style={textStyle}>
//           <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Cybersecurity</h1>
//           <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
//             Safeguarding your business from evolving cyber threats with robust
//             strategies, threat intelligence, and proactive measures to protect
//             your digital assets.
//           </p>
//           <a
//             href="#"
//             style={buttonStyle}
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//           >
//             Book a Free Consultation
//           </a>
//         </div>

//         {/* Image Section */}
//         <div style={imageWrapperStyle}>
//           <Image
//             src="/img/Project/cybersecurity.png" // Update with the actual image path
//             alt="Cybersecurity"
//             width={500}
//             height={500}
//             style={imageStyle}
//           />
//         </div>
//       </div>
//       <Project2 />
//       <h1>why us ? </h1>
//       <img src="/img/Project/whyuscyber.png" alt="" style={imageStyle} />
//     </div>
//   );
// };

// export default Cybersecurity;


"use client";

import React from "react";
import Image from "next/image";
import Header from "@layouts/headers/Index";
import Project2 from "@components/sections/Projects2";
import Project1 from "@components/sections/Projects1";
import dynamic from "next/dynamic";
import HowWeWork1 from "@components/sections/HowWeWork1";
const ClientSlider1 = dynamic( () => import("@/src/app/_components/sliders/Client1"), { ssr: false } );
const DevopsecopsSlider = dynamic( () => import("@components/sliders/Devsecops1"), { ssr: false } );
import Casestudies from "@components/sections/Casestudies";


const Cybersecurity = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "rgb(12, 20, 31)", // Dark background
    color: "white", // Text color
    boxSizing: "border-box",
    flexWrap: "wrap", // Allows content to wrap for smaller screens
  };

  const textStyle = {
    flex: "1 1 50%", // Takes up 50% of the width
    minWidth: "300px", // Ensures text always has enough space
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#BCFF00", // Bright green color
    color: "rgb(12, 20, 31)", // Dark text color
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.3s ease",
  };

  const imageWrapperStyle = {
    flex: "1 1 40%", // Takes up 40% of the width
    minWidth: "300px", // Ensures the image always has enough space
    textAlign: "center", // Centers the image
  };

  const imageStyle = {
    width: "100%", // Ensures the image takes the full width of its container
    height: "auto", // Maintains aspect ratio
  };

  const headingStyle = {
    textAlign: "center", // Centers the heading text
    fontSize: "50px", // Adjusts the font size as needed
    margin: "20px 0", // Adds some margin above and below the heading
    color:"rgb(12, 20, 31)"
  };

  return (
    <div style={{backgroundColor:"rgb(12, 20, 31)"}}>
      <Header layout={"default"} />

      <div style={containerStyle}>
        {/* Text Section */}
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color:"white" }}>Protect Your Data. Secure Your Systems. Stay Ahead of Cyber Threats</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
          With agile Vulnerability Analysis and Penetration Testing (NAPT) and Security Operations Center (SOC), mitigate risks and ensure protection of your digital systems, networks, and data.
          </p>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Image Section */}
        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/cybersecurity.png" // Update with the actual image path
            alt="Cybersecurity"
            width={500}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>
      <Project1 />
      {/* <h1 style={headingStyle}>Why Us?</h1> */}
      <img src="/img/Project/whyuscyber.png" alt="" style={imageStyle} />
      <ClientSlider1/>
      <HowWeWork1 />
      <DevopsecopsSlider/>
      <Casestudies />


    </div>
  );
};

export default Cybersecurity;

// "use client";

// import React from "react";
// import Image from "next/image";
// import Header from "@layouts/headers/Index";
// import Project2 from "@components/sections/Projects2";
// import dynamic from "next/dynamic";
// import Casestudies from "@components/sections/Casestudies";
// import HowWeWork1 from "@/src/app/_components/sections/HowWeWork1";

// const ClientSlider1 = dynamic(() => import("@components/sliders/Client1"), { ssr: false });
// const DevopsecopsSlider = dynamic(() => import("@components/sliders/Devsecops1"), { ssr: false });
// // const HowWeWork1 = dynamic(() => import("@components/sections/HowWeWork1"));

// const Cybersecurity = () => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "30px", // Reduced padding for a more compact layout
//     backgroundColor: "rgb(12, 20, 31)",
//     color: "white",
//     boxSizing: "border-box",
//     flexWrap: "wrap",
//   };

//   const textStyle = {
//     flex: "1 1 50%",
//     minWidth: "300px",
//     padding: "15px", // Reduced padding for the text section
//   };

//   const buttonStyle = {
//     backgroundColor: "#BCFF00",
//     color: "rgb(12, 20, 31)",
//     padding: "12px 25px", // Reduced button padding
//     fontSize: "14px", // Reduced font size
//     fontWeight: "bold",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     textDecoration: "none",
//     transition: "transform 0.3s ease",
//   };

//   const imageWrapperStyle = {
//     flex: "1 1 40%",
//     minWidth: "300px",
//     textAlign: "center",
//   };

//   const imageStyle = {
//     width: "80%", // Reduced image width to 80% of its container
//     height: "auto", // Maintains aspect ratio
//   };

//   return (
//     <div>
//       <Header layout="default" />

//       <div style={containerStyle}>
//         {/* Text Section */}
//         <div style={textStyle}>
//           <h1 style={{ fontSize: "50px", marginBottom: "15px", color:"white" }}>Cybersecurity</h1>
//           <p style={{ fontSize: "16px", lineHeight: "1.4", marginBottom: "30px" }}>
//             Safeguarding your business from evolving cyber threats with robust
//             strategies, threat intelligence, and proactive measures to protect
//             your digital assets.
//           </p>
//           <button
//             style={buttonStyle}
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//           >
//             Book a Free Consultation
//           </button>
//         </div>

//         {/* Image Section */}
//         <div style={imageWrapperStyle}>
//           <Image
//             src="/img/Project/cybersecurity.png" // Update with the actual image path
//             alt="Cybersecurity"
//             width={400} // Reduced width
//             height={400} // Reduced height
//             style={imageStyle}
//           />
//         </div>
//       </div>
      
//       <Project2 />
//       <img src="/img/Project/whyuscyber.png" alt="" style={imageStyle} />

//       <ClientSlider1 />
//       <HowWeWork1 />
//       <DevopsecopsSlider />
//       <Casestudies />
//     </div>
//   );
// };

// export default Cybersecurity;
