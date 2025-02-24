// "use client";

// import advantage from "@data/sections/devops.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import Data from "@data/sliders/devops";
// import useMediaQuery from "../../hooks/useMediaQuery";

// const DevopsSlider = ({ bgStyle }) => {
//   const isScreenBelow426 = useMediaQuery("(max-width: 426px)");
//   const isScreenBelow769 = useMediaQuery("(max-width: 769px)");


//   return (
//     <>
//       {/* Partners Section */}
//       <div
//         className={`mil-${bgStyle}-bg mil-partners mil-relative`}
//         style={{ backgroundColor: "#F8F8F8" }}
//       >
//         <div className="container mil-p-60">
//           <div className="mil-background-grid mil-softened" />
//           <div className="row">
//             <div className="col-12">
//               <div className="mil-center mil-mb-60s">
//                 {/* <h2
//                   className="mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                   style={{ color: "#17283E",marginTop:"20px" }}
//                 /> */}
//                 <span
//                                   className="mil-suptitle mil-upper mil-up mil-mb-30"
//                                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                                   style={{ color: "#17283E", fontSize: "35px", marginTop:"30px" }}
//                                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container mil-p-60">
//           <Swiper
//             modules={[Autoplay]}
//             loop={true}
//             autoplay={{
//               delay: 1, // Very short delay for smooth continuous scrolling
//               disableOnInteraction: false, // Continue autoplay after interaction
//               reverseDirection: false, // Reverse direction for autoplay
//             }}
//             speed={3000} // Adjust the speed of the scroll
//             slidesPerView={isScreenBelow426 ? 4 : isScreenBelow769 ? 8 : 12}
//             spaceBetween={10}
//             // breakpoints={{
//             //   320: {
//             //     slidesPerView: 4,
//             //     spaceBetween: 40,
//             //   },
//             //   480: {
//             //     slidesPerView: 4,
//             //     spaceBetween: 40,
//             //   },
//             //   768: {
//             //     slidesPerView: 4,
//             //     spaceBetween: 40,
//             //   },
//             //   1024: {
//             //     slidesPerView: 4,
//             //     spaceBetween: 30,
//             //   },
//             //   1440: {
//             //     slidesPerView: 12,
//             //     spaceBetween: 40,
//             //   },
//             // }}
//             className="swiper-container mil-infinite-show mil-up"
//           >
//             {Data.items.map((item, key) => (
//               <SwiperSlide
//                 className="swiper-slide"
//                 key={`partners-slider-item-${key}`}
//               >
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mil-partner-frame-partners"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="mil-partner-img"
//                   />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Inline CSS for responsiveness */}
//       <style jsx>{`
//         .mil-center {
//           text-align: center; /* Ensure center alignment for mobile */
//           margin-top: 0; /* Remove any top margin on mobile */
//         }

//         h2 {
//           font-size: 70px; /* Default font size for large screens */
//           margin-bottom: 30px; /* Default margin */
//           line-height: 1.2; /* Ensure line height is set for readability */
//         }

//         .mil-partners {
//           // padding: 60px 0;
//           overflow: hidden; /* Prevent overflow for a clean appearance */
//         }

//         .mil-partner-frame {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100px; /* Fixed height for consistency */
//         }

//         .mil-partner-img {
//           max-width: 100%;
//           height: auto;
//           object-fit: contain;
//         }

//         /* Responsive Heading Adjustments */
//         @media (max-width: 768px) {
//           h2 {
//             font-size: 28px; /* Smaller font size on mobile */
//             margin-bottom: 20px; /* Adjust margin for mobile */
//             padding-left: 10px;
//             padding-right: 10px; /* Add padding on sides to ensure text doesn't overflow */
//             text-align: center; /* Ensure heading stays centered */
//           }

//           .mil-partners {
//             // padding: 30px 0;
//           }

//           .mil-partner-frame {
//             height: auto; /* Adjust to content height on mobile */
//           }

//           .mil-partner-img {
//             max-height: 80px;
//           }

//           /* Ensure the header stays within view on mobile */
//           .mil-center {
//             margin-top: 0; /* Remove negative margin on mobile */
//           }
//         }

//         @media (min-width: 768px) and (max-width: 1024px) {
//           .mil-partner-frame {
//             height: auto; /* Adjust height for tablets */
//           }

//           .mil-partner-img {
//             max-height: 90px;
//           }

//           h2 {
//             font-size: 32px; /* Font size adjustment for tablets */
//             margin-bottom: 25px; /* Adjust margin for tablets */
//           }
//         }

//         @media (min-width: 1024px) {
//           .mil-partner-frame {
//             height: 100px; /* Larger height for desktops */
//           }

//           .mil-partner-img {
//             max-height: 100px;
//           }

//           h2 {
//             font-size: 40px; /* Default font size for larger screens */
//             margin-bottom: 30px; /* Adjust margin for large screens */
//           }
//         }

//         @media (min-width: 1440px) {
//           .mil-partner-frame {
//             height: 120px; /* Larger height for full-screen displays */
//           }

//           .mil-partner-img {
//             max-height: 120px;
//           }

//           h2 {
//             font-size: 45px; /* Larger font size for very large screens */
//             margin-bottom: 35px; /* Adjust margin for larger screens */
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default DevopsSlider;



// import React, { useState } from "react";

// const services = {
//   Frontend: [
//     { name: "Angular", icon: "/img/devops/1.png" },
//     { name: "Bootstrap", icon: "/img/devops/2.png" },
//     { name: "CSS3", icon: "/img/devops/3.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "jQuery", icon: "/img/devops/5.png" },
//     { name: "React", icon: "/img/devops/6.png" },
//     { name: "Vue.js", icon: "/img/devops/7.png" },
//   ],
//   Backend: [
//     { name: "Node.js", icon: "/icons/nodejs.png" },
//     { name: "Express.js", icon: "/icons/express.png" },
//     { name: "Django", icon: "/icons/django.png" },
//     { name: "Ruby on Rails", icon: "/icons/rails.png" },
//     { name: "Spring Boot", icon: "/icons/spring.png" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/icons/mysql.png" },
//     { name: "PostgreSQL", icon: "/icons/postgresql.png" },
//     { name: "MongoDB", icon: "/icons/mongodb.png" },
//     { name: "Firebase", icon: "/icons/firebase.png" },
//   ],
//   DevOps: [
//     { name: "Docker", icon: "/icons/docker.png" },
//     { name: "Kubernetes", icon: "/icons/kubernetes.png" },
//     { name: "Jenkins", icon: "/icons/jenkins.png" },
//     { name: "AWS", icon: "/icons/aws.png" },
//     { name: "Azure", icon: "/icons/azure.png" },
//   ],
// };

// const DevopsSlider = () => {
//   const [activeTab, setActiveTab] = useState("Frontend");

//   return (
//     <section style={styles.section}>
//       <div style={styles.tabs}>
//         {Object.keys(services).map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveTab(service)}
//             style={{
//               ...styles.tab,
//               borderBottom: activeTab === service ? "3px solid rgb(188, 255, 0)" : "none",
//               color: activeTab === service ? "white" : "gray",
//             }}
//           >
//             {service}
//           </button>
//         ))}
//       </div>

//       <div style={styles.iconsContainer}>
//         {services[activeTab].map((tool) => (
//           <div key={tool.name} style={styles.iconWrapper}>
//             <img src={tool.icon} alt={tool.name} style={styles.icon} />
//             <p style={styles.iconText}>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     textAlign: "center",
//     padding: "40px 20px",
//     backgroundColor:"rgb(12, 20, 31)"
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "30px",
//     marginBottom: "20px",
//   },
//   tab: {
//     background: "none",
//     border: "none",
//     fontSize: "18px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     paddingBottom: "5px",
//     transition: "color 0.3s ease",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "30px",
//   },
//   iconWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   icon: {
//     width: "50px",
//     height: "50px",
//     transition: "transform 0.3s ease-in-out",
//   },
//   iconText: {
//     fontSize: "14px",
//     marginTop: "8px",
//     color:"white"
//   },
// };

// export default DevopsSlider;


// import React, { useState } from "react";

// const services = {
//   Frontend: [
//     { name: "Angular", icon: "/img/devops/1.png" },
//     { name: "Bootstrap", icon: "/img/devops/2.png" },
//     { name: "CSS3", icon: "/img/devops/3.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "jQuery", icon: "/img/devops/5.png" },
//     { name: "React", icon: "/img/devops/6.png" },
//     { name: "Vue.js", icon: "/img/devops/7.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "jQuery", icon: "/img/devops/5.png" },
//     { name: "React", icon: "/img/devops/6.png" },
//     { name: "Vue.js", icon: "/img/devops/7.png" },
//   ],
//   Backend: [
//     { name: "Node.js", icon: "/icons/nodejs.png" },
//     { name: "Express.js", icon: "/icons/express.png" },
//     { name: "Django", icon: "/icons/django.png" },
//     { name: "Ruby on Rails", icon: "/icons/rails.png" },
//     { name: "Spring Boot", icon: "/icons/spring.png" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/icons/mysql.png" },
//     { name: "PostgreSQL", icon: "/icons/postgresql.png" },
//     { name: "MongoDB", icon: "/icons/mongodb.png" },
//     { name: "Firebase", icon: "/icons/firebase.png" },
//   ],
//   DevOps: [
//     { name: "Docker", icon: "/icons/docker.png" },
//     { name: "Kubernetes", icon: "/icons/kubernetes.png" },
//     { name: "Jenkins", icon: "/icons/jenkins.png" },
//     { name: "AWS", icon: "/icons/aws.png" },
//     { name: "Azure", icon: "/icons/azure.png" },
//   ],
// };

// const DevopsSlider = () => {
//   const [activeTab, setActiveTab] = useState("Frontend");

//   return (
//     <section style={styles.section}>
//       {/* Service Tabs */}
//       <div style={styles.tabs}>
//         {Object.keys(services).map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveTab(service)}
//             style={{
//               ...styles.tab,
//               borderBottom:
//                 activeTab === service ? "4px solid rgb(188, 255, 0)" : "none",
//               color: activeTab === service ? "white" : "gray",
//             }}
//           >
//             {service}
//           </button>
//         ))}
//       </div>

//       {/* Icons Section */}
//       <div style={styles.iconsContainer}>
//         {services[activeTab].map((tool) => (
//           <div key={tool.name} style={styles.iconWrapper}>
//             <img src={tool.icon} alt={tool.name} style={styles.icon} />
//             <p style={styles.iconText}>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     textAlign: "center",
//     padding: "60px 10%",
//     backgroundColor: "rgb(12, 20, 31)",
//     // minHeight: "100vh",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginBottom: "30px",
//     flexWrap: "wrap",
//   },
//   tab: {
//     background: "none",
//     border: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     padding: "10px 20px",
//     transition: "color 0.3s ease, border-bottom 0.3s ease",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "50px",
//   },
//   iconWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   icon: {
//     width: "70px",
//     height: "70px",
//     transition: "transform 0.3s ease-in-out",
//   },
//   iconText: {
//     fontSize: "16px",
//     marginTop: "10px",
//     color: "white",
//     fontWeight: "500",
//   },
// };

// export default DevopsSlider;


// import React, { useState } from "react";

// const services = {
//   Devops: [
//     { name: "Jenkins", icon: "/img/devops/1.png" },
//     { name: "Gitlab", icon: "/img/devops/2.png" },
//     { name: "CircleCI", icon: "/img/devops/3.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "AzureDevops", icon: "/img/devops/5.png" },
//     { name: "Ansible", icon: "/img/devops/6.png" },
//     { name: "Puppet", icon: "/img/devops/7.png" },
//     { name: "Chef", icon: "/img/devops/8.png" },
//     { name: "Saltstack", icon: "/img/devops/9.png" },
//     { name: "Terraform", icon: "/img/devops/10.png" },
//     { name: "Codecommit", icon: "/img/devops/11.png" },
//     { name: "Pulumi", icon: "/img/devops/12.png" },
//     { name: "Docker", icon: "/img/devops/13.png" },
//     { name: "Kubernetes", icon: "/img/devops/14.png" },
//     { name: "Openshift", icon: "/img/devops/15.png" },
//   ],
//   Cybersecurity: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "Crowdstrike", icon: "/img/cybersecurity/4.png" },
//     { name: "Symantec", icon: "/img/cybersecurity/5.png" },
//     { name: "MicrosoftDefender", icon: "/img/cybersecurity/6.png" },
//     { name: "Okta", icon: "/img/cybersecurity/7.png" },
//     { name: "PingIdentity", icon: "/img/cybersecurity/8.png" },
//     { name: "AWSsecurity hub", icon: "/img/cybersecurity/12.png" },
//     { name: "Passbolt", icon: "/img/cybersecurity/15.png" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/img/database/mysql.png" },
//     { name: "PostgreSQL", icon: "/img/database/postgresql.png" },
//     { name: "MongoDB", icon: "/img/database/mongodb.png" },
//     { name: "Firebase", icon: "/img/database/firebase.png" },
//   ],
//   DevSecOps: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "AWS", icon: "/img/cybersecurity/1.png" },
//     { name: "Azure", icon: "/img/cybersecurity/1.png" },
//   ],
// };

// const DevopsSlider = () => {
//   const [activeTab, setActiveTab] = useState("Frontend");

//   return (
//     <section style={styles.section}>
//       {/* Service Tabs */}
//       <div style={styles.tabs}>
//         {Object.keys(services).map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveTab(service)}
//             style={{
//               ...styles.tab,
//               borderBottom:
//                 activeTab === service ? "4px solid rgb(188, 255, 0)" : "none",
//               color: activeTab === service ? "white" : "gray",
//             }}
//           >
//             {service}
//           </button>
//         ))}
//       </div>

//       {/* Icons Section */}
//       <div style={styles.iconsContainer}>
//         {services[activeTab]?.map((tool) => (
//           <div key={tool.name} style={styles.iconWrapper}>
//             <img src={tool.icon} alt={tool.name} style={styles.icon} />
//             <p style={styles.iconText}>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     textAlign: "center",
//     padding: "60px 10%",
//     backgroundColor: "rgb(12, 20, 31)",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginBottom: "30px",
//     flexWrap: "wrap",
//   },
//   tab: {
//     background: "none",
//     border: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     padding: "10px 20px",
//     transition: "color 0.3s ease, border-bottom 0.3s ease",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "50px",
//   },
//   iconWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   icon: {
//     width: "70px",
//     height: "70px",
//     transition: "transform 0.3s ease-in-out",
//   },
//   iconText: {
//     fontSize: "16px",
//     marginTop: "10px",
//     color: "white",
//     fontWeight: "500",
//   },
// };

// export default DevopsSlider;


// import React, { useState } from "react";

// const services = {
//   Devops: [
//     { name: "Jenkins", icon: "/img/devops/1.png" },
//     { name: "Gitlab", icon: "/img/devops/2.png" },
//     { name: "CircleCI", icon: "/img/devops/3.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "AzureDevops", icon: "/img/devops/5.png" },
//     { name: "Ansible", icon: "/img/devops/6.png" },
//     { name: "Puppet", icon: "/img/devops/7.png" },
//     { name: "Chef", icon: "/img/devops/8.png" },
//     { name: "Saltstack", icon: "/img/devops/9.png" },
//     { name: "Terraform", icon: "/img/devops/10.png" },
//     { name: "Codecommit", icon: "/img/devops/11.png" },
//     { name: "Pulumi", icon: "/img/devops/12.png" },
//     { name: "Docker", icon: "/img/devops/13.png" },
//     { name: "Kubernetes", icon: "/img/devops/14.png" },
//     { name: "Openshift", icon: "/img/devops/15.png" },
//   ],
//   Cybersecurity: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "Crowdstrike", icon: "/img/cybersecurity/4.png" },
//     { name: "Symantec", icon: "/img/cybersecurity/5.png" },
//     { name: "MicrosoftDefender", icon: "/img/cybersecurity/6.png" },
//     { name: "Okta", icon: "/img/cybersecurity/7.png" },
//     { name: "PingIdentity", icon: "/img/cybersecurity/8.png" },
//     { name: "AWSsecurity hub", icon: "/img/cybersecurity/12.png" },
//     { name: "Passbolt", icon: "/img/cybersecurity/15.png" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/img/database/mysql.png" },
//     { name: "PostgreSQL", icon: "/img/database/postgresql.png" },
//     { name: "MongoDB", icon: "/img/database/mongodb.png" },
//     { name: "Firebase", icon: "/img/database/firebase.png" },
//   ],
//   DevSecOps: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "AWS", icon: "/img/cybersecurity/1.png" },
//     { name: "Azure", icon: "/img/cybersecurity/1.png" },
//   ],
// };

// const DevopsSlider = () => {
//   const [activeTab, setActiveTab] = useState("Devops"); // Default to "Devops"

//   return (
//     <section style={styles.section}>
//       {/* Service Tabs */}
//       <div style={styles.tabs}>
//         {Object.keys(services).map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveTab(service)}
//             style={{
//               ...styles.tab,
//               borderBottom:
//                 activeTab === service ? "4px solid rgb(188, 255, 0)" : "none",
//               color: activeTab === service ? "white" : "gray",
//             }}
//           >
//             {service}
//           </button>
//         ))}
//       </div>

//       {/* Icons Section */}
//       <div style={styles.iconsContainer}>
//         {services[activeTab]?.map((tool) => (
//           <div key={tool.name} style={styles.iconWrapper}>
//             <img src={tool.icon} alt={tool.name} style={styles.icon} />
//             <p style={styles.iconText}>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     textAlign: "center",
//     padding: "60px 10%",
//     backgroundColor: "rgb(12, 20, 31)",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginBottom: "30px",
//     flexWrap: "wrap",
//   },
//   tab: {
//     background: "none",
//     border: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     padding: "10px 20px",
//     transition: "color 0.3s ease, border-bottom 0.3s ease",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "50px",
//   },
//   iconWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   icon: {
//     width: "70px",
//     height: "70px",
//     transition: "transform 0.3s ease-in-out",
//   },
//   iconText: {
//     fontSize: "16px",
//     marginTop: "10px",
//     color: "white",
//     fontWeight: "500",
//   },
// };

// export default DevopsSlider;


// import React, { useState } from "react";

// const services = {
//   Devops: [
//     { name: "Jenkins", icon: "/img/devops/1.png" },
//     { name: "Gitlab", icon: "/img/devops/2.png" },
//     { name: "CircleCI", icon: "/img/devops/3.png" },
//     { name: "HTML5", icon: "/img/devops/4.png" },
//     { name: "AzureDevops", icon: "/img/devops/5.png" },
//     { name: "Ansible", icon: "/img/devops/6.png" },
//     { name: "Puppet", icon: "/img/devops/7.png" },
//     { name: "Chef", icon: "/img/devops/8.png" },
//     { name: "Saltstack", icon: "/img/devops/9.png" },
//     { name: "Terraform", icon: "/img/devops/10.png" },
//     { name: "Codecommit", icon: "/img/devops/11.png" },
//     { name: "Pulumi", icon: "/img/devops/12.png" },
//     { name: "Docker", icon: "/img/devops/13.png" },
//     { name: "Kubernetes", icon: "/img/devops/14.png" },
//     { name: "Openshift", icon: "/img/devops/15.png" },
//   ],
//   Cybersecurity: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "Crowdstrike", icon: "/img/cybersecurity/4.png" },
//     { name: "Symantec", icon: "/img/cybersecurity/5.png" },
//     { name: "MicrosoftDefender", icon: "/img/cybersecurity/6.png" },
//     { name: "Okta", icon: "/img/cybersecurity/7.png" },
//     { name: "PingIdentity", icon: "/img/cybersecurity/8.png" },
//     { name: "AWSsecurity hub", icon: "/img/cybersecurity/12.png" },
//     { name: "Passbolt", icon: "/img/cybersecurity/15.png" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/img/database/mysql.png" },
//     { name: "PostgreSQL", icon: "/img/database/postgresql.png" },
//     { name: "MongoDB", icon: "/img/database/mongodb.png" },
//     { name: "Firebase", icon: "/img/database/firebase.png" },
//   ],
//   DevSecOps: [
//     { name: "Wireshark", icon: "/img/cybersecurity/1.png" },
//     { name: "Zeek", icon: "/img/cybersecurity/2.png" },
//     { name: "Nmap", icon: "/img/cybersecurity/3.png" },
//     { name: "AWS", icon: "/img/cybersecurity/1.png" },
//     { name: "Azure", icon: "/img/cybersecurity/1.png" },
//   ],
// };

// const DevopsSlider = () => {
//   const [activeTab, setActiveTab] = useState("Devops"); // Default to "Devops"

//   return (
//     <section style={styles.section}>
//       {/* Heading */}
//       <h2 style={styles.heading}>INTEGRATION</h2>

//       {/* Service Tabs */}
//       <div style={styles.tabs}>
//         {Object.keys(services).map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveTab(service)}
//             style={{
//               ...styles.tab,
//               borderBottom:
//                 activeTab === service ? "4px solid rgb(188, 255, 0)" : "none",
//               color: activeTab === service ? "white" : "gray",
//             }}
//           >
//             {service}
//           </button>
//         ))}
//       </div>

//       {/* Icons Section */}
//       <div style={styles.iconsContainer}>
//         {services[activeTab]?.map((tool) => (
//           <div key={tool.name} style={styles.iconWrapper}>
//             <img src={tool.icon} alt={tool.name} style={styles.icon} />
//             <p style={styles.iconText}>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     textAlign: "center",
//     padding: "60px 10%",
//     backgroundColor: "rgb(12, 20, 31)",
//   },
//   heading: {
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "rgb(188, 255, 0)",
//     marginBottom: "20px",
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginBottom: "30px",
//     flexWrap: "wrap",
//   },
//   tab: {
//     background: "none",
//     border: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     padding: "10px 20px",
//     transition: "color 0.3s ease, border-bottom 0.3s ease",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "50px",
//   },
//   iconWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   icon: {
//     width: "70px",
//     height: "70px",
//     transition: "transform 0.3s ease-in-out",
//   },
//   iconText: {
//     fontSize: "16px",
//     marginTop: "10px",
//     color: "white",
//     fontWeight: "500",
//   },
// };

// export default DevopsSlider;


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
    backgroundColor: "white"
  },
  iconText: {
    fontSize: "16px",
    marginTop: "10px",
    color: "white",
    fontWeight: "500",
  },
};

export default DevopsSlider;
