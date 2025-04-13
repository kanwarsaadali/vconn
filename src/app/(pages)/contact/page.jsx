"use client";

import React, { useState } from "react";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import Image from "next/image";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form[0].value,
      email: form[1].value,
      company: form[2].value,
      phone: form[3].value,
      service: form[4].value,
      country: form[5].value,
      message: form[6].value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setShowPopup(true);
      form.reset();
    } else {
      alert("Failed to send email");
    }
  };

  const closePopup = () => setShowPopup(false);

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
      <Header layout="default" />

      <div style={containerStyle}>
        <div style={textStyle}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "white" }}>
            Let's Scale Your Business To The Next Level
          </h1>
        </div>

        <div style={imageWrapperStyle}>
          <Image
            src="/img/Project/contact.svg"
            alt="Devsecops"
            width={0}
            height={500}
            style={imageStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2
          style={{
            color: "rgb(188, 255, 0)",
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          How May We Assist You?
        </h2>

        <form
          onSubmit={handleSubmit}
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
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input type="text" placeholder="Your name" style={inputStyle} required />
            <input type="email" placeholder="Your email address" style={inputStyle} required />
          </div>

          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <input type="text" placeholder="Company name" style={inputStyle} />
            <input type="text" placeholder="Your phone number" style={inputStyle} />
          </div>

          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <select style={selectStyle}>
              <option>All Services</option>
              <option>Cybersecurity</option>
              <option>DevSecOps</option>
              <option>Managed Services</option>
              <option>Information Security</option>
            </select>
            {/* <select style={selectStyle}>
              <option>Your country</option>
              <option>USA</option>
              <option>UK</option>
              <option>India</option>
            </select> */}
            <select style={selectStyle} required>
  <option value="">Select your country</option>
  <option>United States</option>
  <option>United Kingdom</option>
  <option>Canada</option>
  <option>Germany</option>
  <option>Australia</option>
  <option>India</option>
  <option>Pakistan</option>
  <option>United Arab Emirates</option>
  <option>Saudi Arabia</option>
  <option>Singapore</option>
  <option>France</option>
  <option>Netherlands</option>
  <option>Sweden</option>
  <option>Norway</option>
  <option>South Africa</option>
</select>

          </div>

          <textarea
            placeholder="Write your message here..."
            style={{ ...inputStyle, height: "150px" }}
          ></textarea>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <input type="checkbox" style={{ accentColor: "rgb(188, 255, 0)" }} />
            <label>Subscribe for Newsletter</label>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgb(160, 230, 0)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgb(188, 255, 0)")
            }
          >
            SUBMIT
          </button>
        </form>
      </div>

      {showPopup && (
        <div style={popupOverlayStyle} onClick={closePopup}>
          <div style={popupStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Thank You for Contacting Us!</h2>
            <p>We will get back to you shortly.</p>
            <button onClick={closePopup} style={popupButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer layout="default" />
    </div>
  );
};

// Styles
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
};

const imageWrapperStyle = {
  flex: "1 1 40%",
  minWidth: "300px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  marginTop: "50px",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  border: "1px solid rgba(188, 255, 0, 0.5)",
  background: "transparent",
  color: "white",
  borderRadius: "12px",
  outline: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
};

const selectStyle = {
  ...inputStyle,
  backgroundColor: "#1C2833",
  cursor: "pointer",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  backgroundColor: "rgb(188, 255, 0)",
  color: "black",
  fontWeight: "bold",
  border: "none",
  borderRadius: "80px",
  cursor: "pointer",
  fontSize: "1.1rem",
  transition: "background 0.3s ease-in-out",
};

const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center",
  width: "80%",
  maxWidth: "400px",
};

const popupButtonStyle = {
  marginTop: "1rem",
  padding: "10px 20px",
  backgroundColor: "rgb(188, 255, 0)",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Contact;
