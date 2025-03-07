// // components/HeroSection.tsx

// import { useRouter } from "next/navigation"; // Import useRouter

// const HeroSection = () => {
//     const router = useRouter(); // Initialize the router
  
//   return (
//     <div
//       style={{
//         width: "100vw",
//         backgroundColor: "rgb(12,20,31)", // Black full background
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "40px 0",
//       }}
//     >
//       <div
//         style={{
//           width: "80%", // Adjust width to match your green section
//           maxWidth: "1200px", // Limit max width for large screens
//           backgroundColor: "rgb(188, 255, 0)", // Lime green background
//           padding: "40px",
//           textAlign: "center",
//           borderRadius:"20px"
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "40px",
//             fontWeight: "700",
//             color: "black",
//             marginBottom: "20px",
//             fontFamily:"Lato,sans-serif"
//           }}
//         >
//           TRANSFORMING YOUR <br /> DREAM INTO REALITY
//         </h1>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "#C4FB00",
//             padding: "10px 20px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             border: "none",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontFamily:"Lato,sans-serif"

//           }}
//           onClick={() => router.push("/contact")}
//         >
//           Book a Free Consultation
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// components/HeroSection.tsx

import { useRouter } from "next/navigation"; // Import useRouter
import { useEffect, useState } from "react";

const HeroSection = () => {
  const router = useRouter(); // Initialize the router
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "rgb(12,20,31)", // Black full background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "30px 0" : "40px 0", // Adjust padding for mobile
      }}
    >
      <div
        style={{
          width: isMobile ? "95%" : "80%", // Adjust width for mobile
          maxWidth: "1200px",
          backgroundColor: "rgb(188, 255, 0)", // Lime green background
          padding: isMobile ? "30px" : "40px", // Adjust padding for mobile
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "28px" : "40px", // Adjust font size for mobile
            fontWeight: "700",
            color: "black",
            marginBottom: "20px",
            fontFamily: "Lato, sans-serif",
            lineHeight: "1.2",
            wordBreak: "break-word",
          }}
        >
          TRANSFORMING YOUR <br /> DREAM INTO REALITY
        </h1>
        <button
          style={{
            backgroundColor: "black",
            color: "#C4FB00",
            padding: isMobile ? "8px 16px" : "10px 20px", // Adjust button size
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontFamily: "Lato, sans-serif",
            width: isMobile ? "100%" : "auto", // Make button full-width on mobile
          }}
          onClick={() => router.push("/contact")}
        >
          Book a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
