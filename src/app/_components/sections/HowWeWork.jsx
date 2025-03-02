// 'use client';  // Mark this file as a Client Component
// import advantage from "@data/sections/latest-projects.json";
// import { useRouter } from "next/navigation";


// import React from 'react';

// const projects = [
//   { icon: "/img/icons/about1.png", title: "Proactive Threat Intelligence and SOC Services" },
//   { icon: "/img/icons/about2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing" },
//   { icon: "/img/icons/about3.png", title: "Seamless Cloud Migration and Management" },
//   { icon: "/img/icons/about4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments" },
//   { icon: "/img/icons/about5.png", title: "Kubernetes-Powered Application Modernization" },
//   { icon: "/img/icons/about6.png", title: "Effortless Virtualization with Proxmox" },
// ];

// const HowWeWorkSection = () => {
//   const router = useRouter(); // Initialize the router

//   return (
//     <>
//       {/* Projects Section */}
//       <section className="projects-section">
//         {/* <div className="mil-suptitle mil-upper mil-up mil-mb-30 mil-center" style={{textAlign:"center"}}>OUR PROJECTS</div> */}
//         <div className="mil-center" style={{ color: "#17283E" }}>
//           <span
//             className="mil-suptitle mil-upper mil-up mil-mb-60"
//             dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
//             style={{ color: "#17283E", fontSize: "25px", marginTop: "40px" }} />
//           {/* <h2
//                           className="mil-upper mil-up mil-mb-30"
//                           dangerouslySetInnerHTML={{ __html: advantage.title }}
//                           style={{color:"#17283E"}}
//                         /> */}
//         </div>
//         <div className="container projects-content">
//           {/* Left Side: Headline */}
//           <div className="headline-box">
//             <div className="headline">
//               <h3>Our Products</h3>
//             </div>
//           </div>

//           {/* Right Side: Project List */}
//           <div className="projects-list">
//             <div className="project-item">
//               {/* <div className="icon-box">📡</div> */}
//               <div>
//                 <img src="/img/icons/pr1.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               </div>
//               <div className="content">
//                 <span>   <h4>Proactive Threat Intelligence and SOC Services</h4>
//                   <p>
//                     Stay secure with 24/7 SOC services, real-time threat intelligence,
//                     and advanced monitoring to prevent cyber attacks.
//                   </p></span>

//               </div>
//               <div className="expand">+</div>
//             </div>
//             <div className="project-item">
//               <img src="/img/icons/pr2.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               <div className="content">
//                 <span>   <h4>Next-Level Vulnerability Assessment & Penetration Testing</h4>
//                 <p>
//                   Identify and fix vulnerabilities before they’re exploited. Strengthen
//                   your defenses with real-world testing and actionable insights.
//                 </p></span>
             
//               </div>
//               <div className="expand">+</div>
//             </div>

//             <div className="project-item">
//               <img src="/img/icons/pr3.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               <div className="content">
//                 <span>
//                 <h4>Seamless Cloud Migration and Management</h4>
//                 <p>
//                   Streamline operations with seamless migration to AWS, Azure, or IBM
//                   Cloud. Boost scalability, security, and performance.
//                 </p>
//                 </span>
             
//               </div>
//               <div className="expand">+</div>
//             </div>

//             <div className="project-item">
//               <img src="/img/icons/pr4.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               <div className="content">
//                 <span>
//                 <h4>Automated CI/CD Pipelines for Faster, Safer Deployments</h4>
//                 <p>
//                   Speed up software delivery with automated CI/CD pipelines, integrating
//                   security tools to ensure faster, safer deployments.
//                 </p>
//                 </span>
           
//               </div>
//               <div className="expand">+</div>
//             </div>

//             <div className="project-item">
//               <img src="/img/icons/pr5.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               <div className="content">
//                 <span>
//                 <h4>Kubernetes-Powered Application Modernization</h4>
//                 <p>
//                   Scale effortlessly with Kubernetes-powered containerization, delivering
//                   agility, efficiency, and innovation for your applications.
//                 </p>
//                 </span>
             
//               </div>
//               <div className="expand">+</div>
//             </div>

//             <div className="project-item">
//               <img src="/img/icons/pr6.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

//               <div className="content">
//                 <span>
//                 <h4>Effortless Virtualization with Proxmox</h4>
//                 <p>
//                   Simplify resource management with Proxmox, offering scalable,
//                   cost-efficient virtual environments for modern businesses.
//                 </p>
//                 </span>
           
//               </div>
//               <div className="expand">+</div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom:"25px"
//     // height: "100vh", // Full viewport height for vertical centering
//   }}
// >
//   <button
//     style={{
//       justifyContent: "center",
//       alignItems: "center",
//       display: "flex", // Ensure flex alignment applies within the button
//       padding: "10px 20px", // Optional: Adjust padding for better button size
//       color:"rgb(188, 255, 0)",
//       backgroundColor:"#1b2942",
//       borderRadius:"10px",
//       bottom:"20px",
//       cursor:"pointer"
//     }}
//     onClick={()=>router.push("/projects")}
//  >
//     MORE PROJECTS
//   </button>
// </div>

//       {/* CSS */}
//       <style jsx>{`
//         /* General Styles */
//         body {
//           margin: 0;
//           font-family: Arial, sans-serif;
//           // background-color: #f9f9f9;
//           color: #1b2942;
//           line-height: 1.6;
//         }

//         /* Section Styling */
//         .projects-section {
//           padding: 0px 20px 50px 0;
//           background-color: #ffffff;
//         }
//         . icon{
//     width: 24px;
//     height: 24px;
//   },
//   iconBox: {
//     // backgroundColor: 'rgb(188, 255, 0)',
//     backgroundColor:"#17283E",
//     padding: '0.5rem',
//     // borderRadius: '30%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           align-items: center;
//           position: relative;
//         }

//         /* Section Title */
//         .section-title {
//           font-size: 24px;
//           font-weight: bold;
//           text-transform: uppercase;
//           margin-bottom: 30px;
//           color: #17283E;
//           text-align: center;
//           position: relative;
//         }

//         .section-title::after {
//           content: "";
//           display: block;
//           width: 120px;
//           height: 4px;
//           background: repeating-linear-gradient(
//             to right,
//             rgb(188, 255, 0),
//             rgb(188, 255, 0) 10px,
//             transparent 10px,
//             transparent 20px
//           );
//           margin: 10px auto;
//         }

//         /* Flexbox for Layout */
//         .projects-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           position: relative;
//         }

//         /* Headline Section */
//         .headline-box {
//           margin-top: 250px;
//           right: 100px;
//           flex: 0.4;
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//           position: relative;
//           // padding-right: 20px;
//         }

//         .headline-box::after {
//           content: "";
//           position: absolute;
//           top: 50%;
//           left: 100%;
//           width: 10%;
//           height: 2px;
//           background-color: rgb(188, 255, 0);
//           z-index: 1;
//         }

//         .headline {
//           border: 4px solid rgb(188, 255, 0);
//           padding: 20px;
//           // background-color: #ffffff;
//           text-align: center;
//           position: relative;
//           z-index: 2;
//           max-width: 300px;
//         }

//         .headline h3 {
//           margin: 0;
//           font-size: 20px;
//           font-weight: bold;
//           text-transform: uppercase;
//           color: #1b2942;
//           line-height: 1.4;
//         }

//         /* Projects List Section */
//         .projects-list {
//           flex: 0.6;
//           display: flex;
//           flex-direction: column;
//           gap: 30px;
//           position: relative;
//           // left:150px;
//         }

//         .projects-content::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 35%;
//           width: 2px;
//           height: 100%;
//           background-color: rgb(188, 255, 0);
//           z-index: 1;
//         }

//         /* Individual Project Items */
//         .project-item {
//           display: flex;
//           align-items: center;
//           padding: 20px;
//           background-color: #f7f7f7;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           position: relative;
//           transition: background-color 0.3s ease;
//         }

//         .project-item:hover {
//           background-color: rgb(188, 255, 0);  /* Background color change on hover */
//           transform: translateX(10px); /* Slide effect */
//           // color: #fff; /* Ensure text color changes to white */
//           color: #1b2942;

//         }

//         .project-item .icon-box {
//           width: 40px;
//           height: 40px;
//           background-color: rgb(188, 255, 0);
//           border-radius: 50%;
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           color: #1b2942;
//           font-size: 20px;
//           transition: background-color 0.3s ease;
//         }

//         .project-item:hover .icon-box {
//           background-color: rgb(188, 255, 0); /* Icon background color on hover */
//           color: #fff; /* Icon color change on hover */
//         }

//         .project-item .content {
//           flex-grow: 1;
//           margin-left: 20px;
//         }

//         .project-item h4 {
//           font-size: 16px;
//           font-weight: bold;
//           margin-bottom: 5px;
//           color: #1b2942;
//           cursor: pointer;
//           transition: color 0.3s ease;
//         }

//         .project-item:hover h4 {
//           color: #1b2942; /* Text color change to white on hover */
//         }

//         .project-item p {
//           font-size: 14px;
//           color: #555;
//           margin: 0;
//           display: none;
//           opacity: 0;
//           transition: opacity 0.3s ease; /* Add smooth transition */
//         }

       

//             .project-item .content span:hover p {
//           display: block;
//           opacity: 1; /* Show paragraph text on hover */
//         }

//         .project-item .expand {
//           font-size: 24px;
//           font-weight: bold;
//           color: #1b2942;
//           margin-left: 10px;
//         }

//         .project-item::before {
//           content: "";
//           position: absolute;
//           top: 50%;
//           right: 100%;
//           width: 10%;
//           height: 2px;
//           background-color: rgb(188, 255, 0);
//           z-index: 0;
//         }

//         // .projects-list .project-item:first-child::before {
//         //   content: none;
//         // }

//         @media (max-width: 768px) {
//           .projects-content {
//             flex-direction: column;
//             align-items: center;
//           }

//           .headline-box {
//             text-align: center;
//             margin-bottom: 30px;
//             padding-right: 0;
//             margin-top:0;
//           }

//              .headline h3 {

//           font-size: 12px;
       
//         }
          
//         .headline {
         
//           max-width: 200px;
//         }


//           .headline-box {
//             text-align: center;
//             margin-bottom: 30px;
//             padding-right: 0;
//             right:40px;
//           }

//           .projects-content::before {
//             display: none;
//           }
//             .projects-list {
//        left:0;
//        width:100%;
//         }

//           .projects-list .project-item::before {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HowWeWorkSection;


// 'use client';
// import advantage from "@data/sections/latest-projects.json";
// import { useRouter } from "next/navigation";
// import React from 'react';

// const projects = [
//   { icon: "/img/icons/about1.png", title: "Proactive Threat Intelligence and SOC Services", description: "Stay secure with 24/7 SOC services, real-time threat intelligence, and advanced monitoring to prevent cyber attacks.", extra: "Our SOC team proactively identifies and mitigates threats, ensuring seamless protection for your business." },
//   { icon: "/img/icons/about2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing", description: "Identify and fix vulnerabilities before they’re exploited. Strengthen your defenses with real-world testing and actionable insights.", extra: "Our experts simulate real-world attacks to expose weak points and enhance your security posture." },
//   { icon: "/img/icons/about3.png", title: "Seamless Cloud Migration and Management", description: "Streamline operations with seamless migration to AWS, Azure, or IBM Cloud. Boost scalability, security, and performance.", extra: "We ensure minimal downtime and optimized configurations, making your cloud transition smooth and efficient." },
//   { icon: "/img/icons/about4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments", description: "Speed up software delivery with automated CI/CD pipelines, integrating security tools to ensure faster, safer deployments.", extra: "By automating testing and deployment, we help you release features faster with improved reliability." },
//   { icon: "/img/icons/about5.png", title: "Kubernetes-Powered Application Modernization", description: "Scale effortlessly with Kubernetes-powered containerization, delivering agility, efficiency, and innovation for your applications.", extra: "Our container-based approach ensures high availability, portability, and resilience for modern applications." },
//   { icon: "/img/icons/about6.png", title: "Effortless Virtualization with Proxmox", description: "Simplify resource management with Proxmox, offering scalable, cost-efficient virtual environments for modern businesses.", extra: "Our Proxmox solutions optimize server utilization, reducing overhead while increasing performance." }
// ];

// const HowWeWorkSection = () => {
//   const router = useRouter();

//   return (
//     <section className="projects-section">
//       <div className="mil-center" style={{ color: "#17283E" }}>
//         <span className="mil-suptitle mil-upper mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: advantage.subtitle }} style={{ color: "white", fontSize: "25px", marginTop: "40px" }} />
//       </div>
//       <div className="container">
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-item" key={index}>
//               <img src={project.icon} alt={project.title} className="project-icon" />
//               <div className="content">
//                 <h4>{project.title}</h4>
//                 <p>{project.description}</p>
//                 {/* <p>{project.extra}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className="center-btn">
//         <button onClick={() => router.push("/projects")}>MORE PROJECTS</button>
//       </div> */}
//        <div style={styles.buttonContainer}>
//           <button style={styles.button}>More Services</button>
//         </div>
//       <style jsx>{`
//         .projects-section {
//           padding: 50px 20px;
//           background-color: rgb(12, 20, 31);
//         },
//         buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "50px",
//   },
//   button: {
//     backgroundColor: "rgb(188, 255, 0)",
//     color: "black",
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     padding: "12px 24px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background 0.3s ease",
//   },
//   buttonHover: {
//     backgroundColor: "#aaff00",
//   },
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           justify-content: center;
//           align-items: start;
//         }
//         .project-item {
//           // background: #f7f7f7;
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           text-align: center;
//         }
//         .project-icon {
//           height: 50px;
//           width: 50px;
//           margin-bottom: 10px;
//         }
//         .content h4 {
//           font-size: 18px;
//           color: white;
//           margin-bottom: 10px;
//         }
//         .content p {
//           font-size: 14px;
//           color: white;
//         }
//         .center-btn {
//           display: flex;
//           justify-content: center;
//           margin-top: 30px;
//         }
//         .center-btn button {
//           background-color: #1b2942;
//           color: rgb(188, 255, 0);
//           padding: 10px 20px;
//           border-radius: 10px;
//           cursor: pointer;
//           font-size: 16px;
//         }
//         @media (max-width: 1024px) {
//           .projects-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: repeat(1, 1fr);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HowWeWorkSection;

// 'use client';
// import advantage from "@data/sections/latest-projects.json";
// import { useRouter } from "next/navigation";
// import React from 'react';

// const projects = [
//   { icon: "/img/icons/about1.png", title: "Proactive Threat Intelligence and SOC Services", description: "Stay secure with 24/7 SOC services, real-time threat intelligence, and advanced monitoring to prevent cyber attacks.", extra: "Our SOC team proactively identifies and mitigates threats, ensuring seamless protection for your business." },
//   { icon: "/img/icons/about2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing", description: "Identify and fix vulnerabilities before they’re exploited. Strengthen your defenses with real-world testing and actionable insights.", extra: "Our experts simulate real-world attacks to expose weak points and enhance your security posture." },
//   { icon: "/img/icons/about3.png", title: "Seamless Cloud Migration and Management", description: "Streamline operations with seamless migration to AWS, Azure, or IBM Cloud. Boost scalability, security, and performance.", extra: "We ensure minimal downtime and optimized configurations, making your cloud transition smooth and efficient." },
//   { icon: "/img/icons/about4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments", description: "Speed up software delivery with automated CI/CD pipelines, integrating security tools to ensure faster, safer deployments.", extra: "By automating testing and deployment, we help you release features faster with improved reliability." },
//   { icon: "/img/icons/about5.png", title: "Kubernetes-Powered Application Modernization", description: "Scale effortlessly with Kubernetes-powered containerization, delivering agility, efficiency, and innovation for your applications.", extra: "Our container-based approach ensures high availability, portability, and resilience for modern applications." },
//   { icon: "/img/icons/about6.png", title: "Effortless Virtualization with Proxmox", description: "Simplify resource management with Proxmox, offering scalable, cost-efficient virtual environments for modern businesses.", extra: "Our Proxmox solutions optimize server utilization, reducing overhead while increasing performance." }
// ];

// const HowWeWorkSection = () => {
//   const router = useRouter();

//   return (
//     <section className="projects-section">
//       <div className="mil-center" style={{ color: "#17283E" }}>
//         <span className="mil-suptitle-withourgreen mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: advantage.subtitle }} style={{ color: "white", fontSize: "25px", marginTop: "40px" }} />
//       </div>
//       <div className="container">
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-item" key={index}>
//               <img src={project.icon} alt={project.title} className="project-icon" />
//               <div className="content">
//                 <h4>{project.title}</h4>
//                 <p>{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="button" onClick={() => router.push("/projects")}>MORE PROJECTS</button>
//       </div>
//       <style jsx>{`
//         .projects-section {
//           padding: 50px 20px;
//           background-color: rgb(12, 20, 31);
//         }
//         .button-container {
//           display: flex;
//           justify-content: center;
//           margin-top: 50px;
//         }
//         .button {
//           background-color: rgb(188, 255, 0);
//           color: black;
//           font-size: 1.2rem;
//           font-weight: bold;
//           padding: 12px 24px;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }
//         .button:hover {
//           background-color: #aaff00;
//         }
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           justify-content: center;
//           align-items: start;
//         }
//         .project-item {
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           text-align: center;
//         }
//         .project-icon {
//           height: 100px;
//           width: 100px;
//           margin-bottom: 10px;
//         }
//         .content h4 {
//           font-size: 18px;
//           color: white;
//           margin-bottom: 10px;
//         }
//         .content p {
//           font-size: 14px;
//           color: white;
//         }
//         @media (max-width: 1024px) {
//           .projects-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: repeat(1, 1fr);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HowWeWorkSection;


// 'use client';
// import advantage from "@data/sections/latest-projects.json";
// import { useRouter } from "next/navigation";
// import React from 'react';

// const projects = [
//   { icon: "/img/icons/project1.png", title: "Proactive Threat Intelligence and SOC Services", description: "Stay secure with 24/7 SOC services, real-time threat intelligence, and advanced monitoring to prevent cyber attacks.", extra: "Our SOC team proactively identifies and mitigates threats, ensuring seamless protection for your business." },
//   { icon: "/img/icons/project2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing", description: "Identify and fix vulnerabilities before they’re exploited. Strengthen your defenses with real-world testing and actionable insights.", extra: "Our experts simulate real-world attacks to expose weak points and enhance your security posture." },
//   { icon: "/img/icons/project3.png", title: "Seamless Cloud Migration and Management", description: "Streamline operations with seamless migration to AWS, Azure, or IBM Cloud. Boost scalability, security, and performance.", extra: "We ensure minimal downtime and optimized configurations, making your cloud transition smooth and efficient." },
//   { icon: "/img/icons/project4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments", description: "Speed up software delivery with automated CI/CD pipelines, integrating security tools to ensure faster, safer deployments.", extra: "By automating testing and deployment, we help you release features faster with improved reliability." },
//   { icon: "/img/icons/project5.png", title: "Kubernetes-Powered Application Modernization", description: "Scale effortlessly with Kubernetes-powered containerization, delivering agility, efficiency, and innovation for your applications.", extra: "Our container-based approach ensures high availability, portability, and resilience for modern applications." },
//   { icon: "/img/icons/project6.png", title: "Effortless Virtualization with Proxmox", description: "Simplify resource management with Proxmox, offering scalable, cost-efficient virtual environments for modern businesses.", extra: "Our Proxmox solutions optimize server utilization, reducing overhead while increasing performance." }
// ];

// const HowWeWorkSection = () => {
//   const router = useRouter();

//   return (
//     <section className="projects-section">
//       <div className="mil-center" style={{ color: "#17283E" }}>
//         <span className="mil-suptitle-withourgreen mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: advantage.subtitle }} style={{ color: "rgb(188, 255, 0)", fontSize: "40px", marginTop: "40px", fontWeight:"400" }} />
//       </div>
//       <div className="container">
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-item" key={index}>
//               <img src={project.icon} alt={project.title} className="project-icon" />
//               <div className="content">
//                 <h4>{project.title}</h4>
//                 <p>{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="button" onClick={() => router.push("/projects")}>MORE PROJECTS</button>
//       </div>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        
//         .projects-section {
//           padding: 50px 20px;
//           background-color: rgb(12, 20, 31);
//           font-family: 'Lato', sans-serif;
//         }
//         .button-container {
//           display: flex;
//           justify-content: center;
//           margin-top: 50px;
//         }
//         .button {
//           background-color: rgb(188, 255, 0);
//           color: black;
//           font-size: 1.2rem;
//           font-weight: bold;
//           padding: 12px 24px;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//           font-family: 'Lato', sans-serif;
//         }
//         .button:hover {
//           background-color: #aaff00;
//         }
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           justify-content: center;
//           align-items: start;
//         }
//         .project-item {
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           text-align: center;
//         }
//         .project-icon {
//           height: 100px;
//           width: 100px;
//           margin-bottom: 10px;
//         }
//         .content h4 {
//           font-size: 18px;
//           color: white;
//           margin-bottom: 10px;
//           font-family: 'Lato', sans-serif;
//         }
//         .content p {
//           font-size: 14px;
//           color: white;
//           font-family: 'Lato', sans-serif;
//         }
//         @media (max-width: 1024px) {
//           .projects-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: repeat(1, 1fr);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HowWeWorkSection;

'use client';
import { useRouter } from "next/navigation";
import React from 'react';

const advantage = require("@data/sections/latest-projects.json"); // ✅ Use require() instead of import

const projects = [
  { icon: "/img/icons/project1.png", title: "Proactive Threat Intelligence and SOC Services", description: "Stay secure with 24/7 SOC services, real-time threat intelligence, and advanced monitoring to prevent cyber attacks.", extra: "Our SOC team proactively identifies and mitigates threats, ensuring seamless protection for your business." },
  { icon: "/img/icons/project2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing", description: "Identify and fix vulnerabilities before they’re exploited. Strengthen your defenses with real-world testing and actionable insights.", extra: "Our experts simulate real-world attacks to expose weak points and enhance your security posture." },
  { icon: "/img/icons/project3.png", title: "Seamless Cloud Migration and Management", description: "Streamline operations with seamless migration to AWS, Azure, or IBM Cloud. Boost scalability, security, and performance.", extra: "We ensure minimal downtime and optimized configurations, making your cloud transition smooth and efficient." },
  { icon: "/img/icons/project4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments", description: "Speed up software delivery with automated CI/CD pipelines, integrating security tools to ensure faster, safer deployments.", extra: "By automating testing and deployment, we help you release features faster with improved reliability." },
  { icon: "/img/icons/project5.png", title: "Kubernetes-Powered Application Modernization", description: "Scale effortlessly with Kubernetes-powered containerization, delivering agility, efficiency, and innovation for your applications.", extra: "Our container-based approach ensures high availability, portability, and resilience for modern applications." },
  { icon: "/img/icons/project6.png", title: "Effortless Virtualization with Proxmox", description: "Simplify resource management with Proxmox, offering scalable, cost-efficient virtual environments for modern businesses.", extra: "Our Proxmox solutions optimize server utilization, reducing overhead while increasing performance." }
];

const HowWeWorkSection = () => {
  const router = useRouter();

  return (
    <section className="projects-section">
      <div className="mil-center" style={{ color: "#17283E" }}>
        {advantage.subtitle && ( // ✅ Handle undefined subtitle safely
          <span
            className="mil-suptitle-withourgreen mil-upper mil-up mil-mb-30"
            dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
            style={{
              color: "rgb(188, 255, 0)",
              fontSize: "40px",
              marginTop: "40px",
              fontWeight: "400",
            }}
          />
        )}
      </div>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.icon} alt={project.title} className="project-icon" />
              <div className="content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => router.push("/projects")}>MORE PROJECTS</button>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        
        .projects-section {
          padding: 50px 20px;
          background-color: rgb(12, 20, 31);
          font-family: 'Lato', sans-serif;
        }
        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        .button {
          background-color: rgb(188, 255, 0);
          color: black;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          font-family: 'Lato', sans-serif;
        }
        .button:hover {
          background-color: #aaff00;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          justify-content: center;
          align-items: start;
        }
        .project-item {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .project-icon {
          height: 100px;
          width: 100px;
          margin-bottom: 10px;
        }
        .content h4 {
          font-size: 18px;
          color: white;
          margin-bottom: 10px;
          font-family: 'Lato', sans-serif;
        }
        .content p {
          font-size: 14px;
          color: white;
          font-family: 'Lato', sans-serif;
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
