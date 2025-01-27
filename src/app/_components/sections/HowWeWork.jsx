'use client';  // Mark this file as a Client Component
import advantage from "@data/sections/latest-projects.json";
import { useRouter } from "next/navigation";


import React from 'react';

const projects = [
  { icon: "/img/icons/about1.png", title: "Proactive Threat Intelligence and SOC Services" },
  { icon: "/img/icons/about2.png", title: "Next-Level Vulnerability Assessment & Penetration Testing" },
  { icon: "/img/icons/about3.png", title: "Seamless Cloud Migration and Management" },
  { icon: "/img/icons/about4.png", title: "Automated CI/CD Pipelines for Faster, Safer Deployments" },
  { icon: "/img/icons/about5.png", title: "Kubernetes-Powered Application Modernization" },
  { icon: "/img/icons/about6.png", title: "Effortless Virtualization with Proxmox" },
];

const HowWeWorkSection = () => {
  const router = useRouter(); // Initialize the router

  return (
    <>
      {/* Projects Section */}
      <section className="projects-section">
        {/* <div className="mil-suptitle mil-upper mil-up mil-mb-30 mil-center" style={{textAlign:"center"}}>OUR PROJECTS</div> */}
        <div className="mil-center" style={{ color: "#17283E" }}>
          <span
            className="mil-suptitle mil-upper mil-up mil-mb-60"
            dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
            style={{ color: "#17283E", fontSize: "25px", marginTop: "40px" }} />
          {/* <h2
                          className="mil-upper mil-up mil-mb-30"
                          dangerouslySetInnerHTML={{ __html: advantage.title }}
                          style={{color:"#17283E"}}
                        /> */}
        </div>
        <div className="container projects-content">
          {/* Left Side: Headline */}
          <div className="headline-box">
            <div className="headline">
              <h3>Our Products</h3>
            </div>
          </div>

          {/* Right Side: Project List */}
          <div className="projects-list">
            <div className="project-item">
              {/* <div className="icon-box">📡</div> */}
              <div>
                <img src="/img/icons/pr1.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              </div>
              <div className="content">
                <span>   <h4>Proactive Threat Intelligence and SOC Services</h4>
                  <p>
                    Stay secure with 24/7 SOC services, real-time threat intelligence,
                    and advanced monitoring to prevent cyber attacks.
                  </p></span>

              </div>
              <div className="expand">+</div>
            </div>
            <div className="project-item">
              <img src="/img/icons/pr2.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              <div className="content">
                <span>   <h4>Next-Level Vulnerability Assessment & Penetration Testing</h4>
                <p>
                  Identify and fix vulnerabilities before they’re exploited. Strengthen
                  your defenses with real-world testing and actionable insights.
                </p></span>
             
              </div>
              <div className="expand">+</div>
            </div>

            <div className="project-item">
              <img src="/img/icons/pr3.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              <div className="content">
                <span>
                <h4>Seamless Cloud Migration and Management</h4>
                <p>
                  Streamline operations with seamless migration to AWS, Azure, or IBM
                  Cloud. Boost scalability, security, and performance.
                </p>
                </span>
             
              </div>
              <div className="expand">+</div>
            </div>

            <div className="project-item">
              <img src="/img/icons/pr4.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              <div className="content">
                <span>
                <h4>Automated CI/CD Pipelines for Faster, Safer Deployments</h4>
                <p>
                  Speed up software delivery with automated CI/CD pipelines, integrating
                  security tools to ensure faster, safer deployments.
                </p>
                </span>
           
              </div>
              <div className="expand">+</div>
            </div>

            <div className="project-item">
              <img src="/img/icons/pr5.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              <div className="content">
                <span>
                <h4>Kubernetes-Powered Application Modernization</h4>
                <p>
                  Scale effortlessly with Kubernetes-powered containerization, delivering
                  agility, efficiency, and innovation for your applications.
                </p>
                </span>
             
              </div>
              <div className="expand">+</div>
            </div>

            <div className="project-item">
              <img src="/img/icons/pr6.png" style={{ height: "40px", width: "40px", backgroundColor: "rgb(188, 255, 0)", display: "flex", borderRadius: "10%" }} />

              <div className="content">
                <span>
                <h4>Effortless Virtualization with Proxmox</h4>
                <p>
                  Simplify resource management with Proxmox, offering scalable,
                  cost-efficient virtual environments for modern businesses.
                </p>
                </span>
           
              </div>
              <div className="expand">+</div>
            </div>
          </div>
        </div>
      </section>
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"25px"
    // height: "100vh", // Full viewport height for vertical centering
  }}
>
  <button
    style={{
      justifyContent: "center",
      alignItems: "center",
      display: "flex", // Ensure flex alignment applies within the button
      padding: "10px 20px", // Optional: Adjust padding for better button size
      color:"rgb(188, 255, 0)",
      backgroundColor:"#1b2942",
      borderRadius:"10px",
      bottom:"20px",
      cursor:"pointer"
    }}
    onClick={()=>router.push("/projects")}
 >
    MORE PROJECTS
  </button>
</div>

      {/* CSS */}
      <style jsx>{`
        /* General Styles */
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          // background-color: #f9f9f9;
          color: #1b2942;
          line-height: 1.6;
        }

        /* Section Styling */
        .projects-section {
          padding: 0px 20px 50px 0;
          background-color: #ffffff;
        }
        . icon{
    width: 24px;
    height: 24px;
  },
  iconBox: {
    // backgroundColor: 'rgb(188, 255, 0)',
    backgroundColor:"#17283E",
    padding: '0.5rem',
    // borderRadius: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          position: relative;
        }

        /* Section Title */
        .section-title {
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 30px;
          color: #17283E;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 120px;
          height: 4px;
          background: repeating-linear-gradient(
            to right,
            rgb(188, 255, 0),
            rgb(188, 255, 0) 10px,
            transparent 10px,
            transparent 20px
          );
          margin: 10px auto;
        }

        /* Flexbox for Layout */
        .projects-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }

        /* Headline Section */
        .headline-box {
          margin-top: 250px;
          right: 100px;
          flex: 0.4;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          // padding-right: 20px;
        }

        .headline-box::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          width: 10%;
          height: 2px;
          background-color: rgb(188, 255, 0);
          z-index: 1;
        }

        .headline {
          border: 4px solid rgb(188, 255, 0);
          padding: 20px;
          // background-color: #ffffff;
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 300px;
        }

        .headline h3 {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          color: #1b2942;
          line-height: 1.4;
        }

        /* Projects List Section */
        .projects-list {
          flex: 0.6;
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: relative;
          // left:150px;
        }

        .projects-content::before {
          content: "";
          position: absolute;
          top: 0;
          left: 35%;
          width: 2px;
          height: 100%;
          background-color: rgb(188, 255, 0);
          z-index: 1;
        }

        /* Individual Project Items */
        .project-item {
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: #f7f7f7;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: background-color 0.3s ease;
        }

        .project-item:hover {
          background-color: rgb(188, 255, 0);  /* Background color change on hover */
          transform: translateX(10px); /* Slide effect */
          // color: #fff; /* Ensure text color changes to white */
          color: #1b2942;

        }

        .project-item .icon-box {
          width: 40px;
          height: 40px;
          background-color: rgb(188, 255, 0);
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #1b2942;
          font-size: 20px;
          transition: background-color 0.3s ease;
        }

        .project-item:hover .icon-box {
          background-color: rgb(188, 255, 0); /* Icon background color on hover */
          color: #fff; /* Icon color change on hover */
        }

        .project-item .content {
          flex-grow: 1;
          margin-left: 20px;
        }

        .project-item h4 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #1b2942;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .project-item:hover h4 {
          color: #1b2942; /* Text color change to white on hover */
        }

        .project-item p {
          font-size: 14px;
          color: #555;
          margin: 0;
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease; /* Add smooth transition */
        }

       

            .project-item .content span:hover p {
          display: block;
          opacity: 1; /* Show paragraph text on hover */
        }

        .project-item .expand {
          font-size: 24px;
          font-weight: bold;
          color: #1b2942;
          margin-left: 10px;
        }

        .project-item::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;
          width: 10%;
          height: 2px;
          background-color: rgb(188, 255, 0);
          z-index: 0;
        }

        // .projects-list .project-item:first-child::before {
        //   content: none;
        // }

        @media (max-width: 768px) {
          .projects-content {
            flex-direction: column;
            align-items: center;
          }

          .headline-box {
            text-align: center;
            margin-bottom: 30px;
            padding-right: 0;
            margin-top:0;
          }

             .headline h3 {

          font-size: 12px;
       
        }
          
        .headline {
         
          max-width: 200px;
        }


          .headline-box {
            text-align: center;
            margin-bottom: 30px;
            padding-right: 0;
            right:40px;
          }

          .projects-content::before {
            display: none;
          }
            .projects-list {
       left:0;
       width:100%;
        }

          .projects-list .project-item::before {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default HowWeWorkSection;




// 'use client'; // Mark this file as a Client Component
// import React from 'react';

// const HowWeWorkSection = () => {
//   return (
//     <>
//       {/* Projects Section */}
//       <section className="projects-section">
//         <div
//           className="mil-center mil-mb-60"
//           style={{ marginTop: "-50px", color: "#17283E" }}
//         >
//           <span
//             className="mil-suptitle mil-upper mil-up mil-mb-30"
//             style={{
//               color: "#17283E",
//               fontSize: "15px",
//               marginTop: "40px",
//             }}
//           />
//         </div>
//         <div className="container projects-content">
//           {/* Left Side: Headline */}
//           <div className="headline-box">
//             <div className="headline">
//               <h3>TRANSFORMING AMBITIONS INTO ACHIEVEMENTS</h3>
//             </div>
//           </div>

//           {/* Right Side: Project List */}
//           <div className="projects-list">
//             {[
//               {
//                 icon: "/img/icons/pr1.png",
//                 title: "Proactive Threat Intelligence and SOC Services",
//                 description:
//                   "Stay secure with 24/7 SOC services, real-time threat intelligence, and advanced monitoring to prevent cyber attacks.",
//               },
//               {
//                 icon: "/img/icons/pr2.png",
//                 title: "Next-Level Vulnerability Assessment & Penetration Testing",
//                 description:
//                   "Identify and fix vulnerabilities before they’re exploited. Strengthen your defenses with real-world testing and actionable insights.",
//               },
//               {
//                 icon: "/img/icons/pr3.png",
//                 title: "Seamless Cloud Migration and Management",
//                 description:
//                   "Streamline operations with seamless migration to AWS, Azure, or IBM Cloud. Boost scalability, security, and performance.",
//               },
//               {
//                 icon: "/img/icons/pr4.png",
//                 title: "Automated CI/CD Pipelines for Faster, Safer Deployments",
//                 description:
//                   "Speed up software delivery with automated CI/CD pipelines, integrating security tools to ensure faster, safer deployments.",
//               },
//               {
//                 icon: "/img/icons/pr5.png",
//                 title: "Kubernetes-Powered Application Modernization",
//                 description:
//                   "Scale effortlessly with Kubernetes-powered containerization, delivering agility, efficiency, and innovation for your applications.",
//               },
//               {
//                 icon: "/img/icons/pr6.png",
//                 title: "Effortless Virtualization with Proxmox",
//                 description:
//                   "Simplify resource management with Proxmox, offering scalable, cost-efficient virtual environments for modern businesses.",
//               },
//             ].map((project, index) => (
//               <div key={index} className="project-item">
//                 <img
//                   src={project.icon}
//                   alt="Project Icon"
//                   style={{
//                     height: "40px",
//                     width: "40px",
//                     backgroundColor: "rgb(188, 255, 0)",
//                     display: "flex",
//                     borderRadius: "10%",
//                   }}
//                 />
//                 <div className="content">
//                   <h4>{project.title}</h4>
//                   <p>{project.description}</p>
//                 </div>
//                 <div className="expand">+</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CSS */}
//       <style jsx>{`
//         .projects-section {
//           padding: 50px 20px;
//           background-color: #ffffff;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           align-items: center;
//           position: relative;
//         }

//         .projects-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           position: relative;
//         }

//         .headline-box {
//           margin-top: 250px;
//           right: 100px;
//           flex: 0.4;
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//           position: relative;
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

//         .projects-list {
//           flex: 0.6;
//           display: flex;
//           flex-direction: column;
//           gap: 30px;
//           position: relative;
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

//         .project-item {
//           display: flex;
//           align-items: center;
//           padding: 20px;
//           background-color: #f7f7f7;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           position: relative;
//           transition: background-color 0.3s ease, transform 0.3s ease;
//         }

//         .project-item:hover {
//           background-color: rgb(188, 255, 0);
//           transform: translateX(10px);
//           color: #1b2942;
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
//           color: #1b2942;
//         }

//         .project-item p {
//           font-size: 14px;
//           color: #555;
//           margin: 0;
//           display: none;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .project-item:hover p {
//           display: block;
//           opacity: 1;
//         }

//         .project-item .expand {
//           font-size: 24px;
//           font-weight: bold;
//           color: #1b2942;
//           margin-left: 10px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HowWeWorkSection;
