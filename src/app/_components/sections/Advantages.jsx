import React, { useEffect, useRef, useState } from "react";

const AdvantagesSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [footprint, setFootprint] = useState(0);
  const [experience, setExperience] = useState(0);
  const [costImpact, setCostImpact] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true); // Start counting when section is visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section must be visible
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

  useEffect(() => {
    if (startAnimation) {
      animateValue(setFootprint, 5, 500);
      animateValue(setExperience, 10, 400);
      animateValue(setCostImpact, 45, 100);
    }
  }, [startAnimation]);

  const animateValue = (setState, finalValue, speed) => {
    let start = 0;
    const step = Math.max(1, Math.floor(finalValue / 90)); // Ensure smooth increment
    const interval = setInterval(() => {
      start += step;
      if (start >= finalValue) {
        setState(finalValue);
        clearInterval(interval);
      } else {
        setState(start);
      }
    }, speed);
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <h2 style={styles.heading}>WHY US</h2>
      <div style={styles.line}></div>
      <div style={styles.container}>
        <StatBox icon="/img/icons/map.png" number={footprint} label="Continents Footprint" />
        <StatBox icon="/img/icons/user.png" number={experience} label="Years Experience" />
        <StatBox icon="/img/icons/clock.png" number="24/7" label="Working Hours" /> {/* Static "24/7" format */}
        {/* <StatBox icon="/img/icons/dollar.png" number={costImpact%} label="Billion Cost Impact" /> */}
        <StatBox icon="/img/icons/dollar.png" number={`${costImpact}%`} label="Cost Savings" />

      </div>
    </section>
  );
};

const StatBox = ({ icon, number, label }) => (
  <div style={styles.statBox}>
    <img src={icon} alt={label} style={styles.icon} />
    <h2 style={styles.number}>{number}</h2>
    <p style={styles.label}>{label}</p>
  </div>
);

const styles = {
  section: {
    backgroundColor: "rgb(12, 20, 31)",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Lato, sans-serif",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    color: "rgb(188, 255, 0)",
    fontFamily: "'Lato', sans-serif",
    marginBottom: "10px",
  },
  line: {
    width: "80px",
    height: "3px",
    margin: "10px auto 30px auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "20px",
  },
  statBox: {
    flex: "1",
    minWidth: "200px",
    textAlign: "center",
    padding: "20px",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  number: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "rgb(188, 255, 0)",
    marginBottom: "5px",
    fontFamily: "Lato, sans-serif",
  },
  label: {
    fontSize: "1rem",
    color: "white",
    fontFamily: "Lato, sans-serif",
  },
};

export default AdvantagesSection;
