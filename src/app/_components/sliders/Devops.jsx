"use client"; // Add this line at the very top to mark this as a client component

import React, { useState } from "react";

const services = {
  Devops: [
    { name: "Jenkins", icon: "/img/devops/1.png" },
    { name: "Gitlab", icon: "/img/devops/2.png" },
    { name: "CircleCI", icon: "/img/devops/3.png" },
    { name: "HTML5", icon: "/img/devops/4.png" },
    { name: "AzureDevops", icon: "/img/devops/5.png" },
    { name: "Ansible", icon: "/img/devops/6.png" },
    { name: "Puppet", icon: "/img/devops/7.png" },
    { name: "Chef", icon: "/img/devops/8.png" },
    { name: "Saltstack", icon: "/img/devops/9.png" },
    { name: "Terraform", icon: "/img/devops/10.png" },
    { name: "Codecommit", icon: "/img/devops/11.png" },
    { name: "Pulumi", icon: "/img/devops/12.png" },
    { name: "Docker", icon: "/img/devops/13.png" },
    { name: "Kubernetes", icon: "/img/devops/14.png" },
    { name: "Openshift", icon: "/img/devops/15.png" },
  ],
  Cybersecurity: [
    { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
    { name: "Zeek", icon: "/img/cybersecurity/2.png" },
    { name: "Nmap", icon: "/img/cybersecurity/3.png" },
    { name: "Crowdstrike", icon: "/img/cybersecurity/4.png" },
    { name: "Symantec", icon: "/img/cybersecurity/5.png" },
    { name: "MicrosoftDefender", icon: "/img/cybersecurity/6.png" },
    { name: "Okta", icon: "/img/cybersecurity/7.png" },
    { name: "PingIdentity", icon: "/img/cybersecurity/8.png" },
    { name: "AWSsecurity hub", icon: "/img/cybersecurity/12.png" },
    { name: "Passbolt", icon: "/img/cybersecurity/15.png" },
  ],
  Database: [
    { name: "MySQL", icon: "/img/database/mysql.png" },
    { name: "PostgreSQL", icon: "/img/database/postgresql.png" },
    { name: "MongoDB", icon: "/img/database/mongodb.png" },
    { name: "Firebase", icon: "/img/database/firebase.png" },
  ],
  DevSecOps: [
    { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
    { name: "Zeek", icon: "/img/cybersecurity/2.png" },
    { name: "Nmap", icon: "/img/cybersecurity/3.png" },
    { name: "AWS", icon: "/img/cybersecurity/1.png" },
    { name: "Azure", icon: "/img/cybersecurity/1.png" },
  ],
};

const DevopsSlider = () => {
  const [activeTab, setActiveTab] = useState("Devops"); // Default to "Devops"

  return (
    <section style={styles.section}>
      {/* Heading */}
      <h2 style={styles.heading}>INTEGRATION</h2>

      {/* Service Tabs */}
      <div style={styles.tabs}>
        {Object.keys(services).map((service) => (
          <button
            key={service}
            onClick={() => setActiveTab(service)}
            style={{
              ...styles.tab,
              borderBottom:
                activeTab === service ? "4px solid rgb(188, 255, 0)" : "none",
              color: activeTab === service ? "white" : "gray",
            }}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Icons Section */}
      <div style={styles.iconsContainer}>
        {services[activeTab]?.map((tool) => (
          <div key={tool.name} style={styles.iconWrapper}>
            <img src={tool.icon} alt={tool.name} style={styles.icon} />
            <p style={styles.iconText}>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: "center",
    padding: "60px 10%",
    backgroundColor: "rgb(12, 20, 31)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "rgb(188, 255, 0)",
    marginBottom: "20px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  tab: {
    background: "none",
    border: "none",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 20px",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "50px",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    width: "70px",
    height: "70px",
    transition: "transform 0.3s ease-in-out",
  },
  iconText: {
    fontSize: "16px",
    marginTop: "10px",
    color: "white",
    fontWeight: "500",
  },
};

export default DevopsSlider;
