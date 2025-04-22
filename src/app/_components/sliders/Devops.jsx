"use client";

import React, { useState } from "react";

const services = {
  Devops: [
    { name: "Ansible", icon: "/img/devops/ansible.svg" },
    { name: "Argo CD", icon: "/img/devops/argocd.svg" },
    { name: "Docker", icon: "/img/devops/docker.svg" },
    { name: "Kibana", icon: "/img/devops/elk.svg" },
    { name: "Fortify SCA", icon: "/img/devops/fortify.svg" },
    { name: "Github", icon: "/img/devops/github.svg" },
    { name: "GitLab", icon: "/img/devops/gitlab.svg" },
    { name: "Grafana", icon: "/img/devops/grafana.svg" },
    { name: "Grafana Loki", icon: "/img/devops/grafanaloki.svg" },
    { name: "HashiCorp vault", icon: "/img/devops/hashicorp.svg" },
    { name: "Jenkins", icon: "/img/devops/jenkins.svg" },
    { name: "Kubernetes", icon: "/img/devops/kubernetes.svg" },
    { name: "Prometheus", icon: "/img/devops/promentheus.svg" },
    { name: "Terraform", icon: "/img/devops/terraform.svg" },
    { name: "Trivy", icon: "/img/devops/trivy.svg" },



  ],
  Cybersecurity: [
    { name: "Misp", icon: "/img/cybersecurity/misp.png" },
    { name: "Wazuh", icon: "/img/cybersecurity/wazuh.png" },
    { name: "SecurityOnion", icon: "/img/cybersecurity/securityonion.png" },
    { name: "Suricata", icon: "/img/cybersecurity/suricata.png" },
    { name: "Acunetix", icon: "/img/cybersecurity/acunetix.svg" },
    { name: "Burp Suite", icon: "/img/cybersecurity/burp Suite.svg" },
    { name: "Core Impact", icon: "/img/cybersecurity/Core Impact.svg" },
    { name: "Invicti", icon: "/img/cybersecurity/Invicti.svg" },
    { name: "Kali linux", icon: "/img/cybersecurity/kali linux.svg" },
    { name: "Metasploit", icon: "/img/cybersecurity/Metasploit.svg" },
    { name: "Nessus", icon: "/img/cybersecurity/Nessus.svg" },
    { name: "Nmap", icon: "/img/cybersecurity/Nmap.svg" },
    { name: "OpenVAS", icon: "/img/cybersecurity/OpenVAS.svg" },
    { name: "OWASP ZAP", icon: "/img/cybersecurity/OWASP ZAP.svg" }
  ],
  Database: [
    { name: "Mariadb", icon: "/img/database/mariadb.png" },
    { name: "Mysql", icon: "/img/database/mysql.png" },
    { name: "Oracle", icon: "/img/database/oracle.png" },
    { name: "PostgreSQL", icon: "/img/database/postgre.png" },
    { name: "SQLite", icon: "/img/database/sqllite.png" },

  ],
  "Cloud Computing": [
    { name: "Aws", icon: "/img/cloud/aws.png" },
    { name: "Azure", icon: "/img/cloud/azure.png" },
    { name: "Google", icon: "/img/cloud/google.png" },
    { name: "Hetzner", icon: "/img/cloud/hetzner.png" },
    { name: "Contabo", icon: "/img/cloud/contabo.png" },
    { name: "Digital Ocean", icon: "/img/cloud/Digitalocean.png" }
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
                activeTab === service ? "" : "none",
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
    fontFamily: "'Lato', sans-serif", // Apply Lato font here
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
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
    // backgroundColor: "white"
  },
  iconText: {
    fontSize: "16px",
    marginTop: "10px",
    color: "white",
    fontWeight: "500",
  },
};

export default DevopsSlider;
