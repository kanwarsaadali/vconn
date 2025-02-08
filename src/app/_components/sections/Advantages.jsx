"use client"; // Add this line at the top of your component

import React, { useState, useEffect, useRef } from "react";
import Data from "@data/sections/advantages.json"; // Importing the data

const AdvantagesSection = () => {
  const [countedStats, setCountedStats] = useState(
    Data.map(() => 0) // Initialize all stats to 0
  );
  const [isInView, setIsInView] = useState(false); // State to track if the section is in view
  const sectionRef = useRef(null); // Reference to the section DOM element

  // IntersectionObserver to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // The section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter effect when the section is in view
  useEffect(() => {
    if (isInView) {
      const intervals = Data.map((_, index) => {
        const target = Data[index].number;
        let currentCount = 0;

        return setInterval(() => {
          if (currentCount < target) {
            currentCount++;
            setCountedStats((prevStats) => {
              const newStats = [...prevStats];
              newStats[index] = currentCount;
              return newStats;
            });
          } else {
            clearInterval(intervals[index]);
          }
        }, 150); // Slower interval of 150ms for smoother animation
      });

      return () => {
        intervals.forEach(clearInterval);
      };
    }
  }, [isInView]);

  // Styles for the section
  const styles = {
    businessGrowth: {
      backgroundColor: "#ffffff",
      padding: "60px 20px",
      textAlign: "center",
      backgroundImage: "url('/img/photo/BGgrayNet.webp')", // Set your background image URL here
      backgroundSize: "cover", // Ensure the background image covers the whole section
      backgroundPosition: "center", // Center the image
      backgroundAttachment: "fixed", // Optional: makes the background image fixed when scrolling
      marginTop: "40px",
    },
    growthHeading: {
      marginBottom: "30px",
    },
    growthHeadingTitle: {
      fontSize: "55px",
      fontWeight: 700,
      color: "#17283E",
      lineHeight: 1.3,
      backgroundColor: "transparent", // Make sure the background for the heading is transparent
    },
    growthStats: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#1b2942",
      borderRadius: "12px",
      overflow: "hidden",
      color: "white",
      padding: "20px",
      flexWrap: "wrap",  // Allow for wrapping on smaller screens
    },
    statItem: {
      flex: "1 1 250px",  // Ensure each stat item is flexible and takes 250px minimum width, but can grow
      padding: "20px",
      textAlign: "center",
      position: "relative",
      minWidth: "250px", // Minimum width to avoid too much shrinking
      marginBottom: "20px", // Add bottom margin for spacing between items in mobile view
    },
    statItemHeading: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#7dc10d",
      marginBottom: "10px",
    },
    statItemParagraph: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 500,
      color: "#f0f0f0",
    },
    statItemAfter: {
      content: "''",
      position: "absolute",
      top: "0",
      right: "0",
      width: "4px",
      height: "100%",
      background: "repeating-linear-gradient(to bottom right, rgb(188, 255, 0), rgb(188, 255, 0) 5px, #1b2942 5px, #1b2942 10px)",
      transform: "skewX(-45deg)",
    },
    servicesHeading: {
      marginTop: "40px",
    },
    servicesHeadingTitle: {
      fontSize: "18px",
      fontWeight: 700,
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    servicesUnderline: {
      width: "120px",
      height: "4px",
      background: "repeating-linear-gradient(to right, rgb(188, 255, 0), rgb(188, 255, 0) 10px, transparent 10px, transparent 20px)",
      margin: "10px auto",
    },
    // Mobile Responsiveness
    "@media (max-width: 768px)": {
      businessGrowth: {
        padding: "40px 15px",
      },
      growthHeadingTitle: {
        fontSize: "36px",
      },
      growthStats: {
        flexDirection: "column", // Stack items vertically on smaller screens
        padding: "20px 10px",
      },
      statItemAfter: {
        display: "none", // Hide the after pseudo element on mobile
      },
      statItem: {
        padding: "15px",
        minWidth: "auto",
        marginBottom: "20px", // Space between stacked items
      },
      statItemHeading: {
        fontSize: "36px", // Smaller font on mobile
      },
      statItemParagraph: {
        fontSize: "14px", // Adjust font size on mobile
      },
      servicesHeadingTitle: {
        fontSize: "16px", // Smaller text on mobile
      },
    },

    "@media (max-width: 576px)": {
      businessGrowth: {
        padding: "30px 10px", // Reduce padding further on extra small devices
      },
      growthHeadingTitle: {
        fontSize: "28px", // Further reduce heading size
      },
      growthStats: {
        padding: "15px",
      },
      statItemHeading: {
        fontSize: "32px", // Smaller font size for headings
      },
      statItemParagraph: {
        fontSize: "12px", // Adjust paragraph font size for smaller screens
      },
      servicesHeadingTitle: {
        fontSize: "14px", // Small font size for services on mobile
      },
    },

    "@media (max-width: 992px)": {
      growthHeadingTitle: {
        fontSize: "42px", // Slightly smaller heading on medium devices
      },
      statItemHeading: {
        fontSize: "42px", // Adjust heading size for tablets
      },
    },
  };

  return (
    <div ref={sectionRef} style={styles.businessGrowth}>
      <div style={styles.growthHeading}>
        <h2 style={styles.growthHeadingTitle} className="mil-upper mil-up mil-mb-30">
        Why Us
        </h2>
      </div>    

      <div style={styles.growthStats}>
        {Data.map((stat, index) => (
          <div key={index} style={styles.statItem}>
            <h3 style={styles.statItemHeading}>
              {countedStats[index]}
            </h3>
            <p style={styles.statItemParagraph}>
              {stat.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            {index !== Data.length - 1 && <div style={styles.statItemAfter}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
