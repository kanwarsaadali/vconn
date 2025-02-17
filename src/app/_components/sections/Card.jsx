// "use client";
// import { useRouter } from "next/navigation";

// const LatestProjectsSection = () => {
//   const router = useRouter();

//   // Sample project data
//   const projects = [
//     {
//       id: 1,
//       title: "Cloud Automation",
//       description: "Automating cloud infrastructure for optimized deployment.",
//       image: "/img/covers/Cybersecurity.png",
//     },
//     {
//       id: 2,
//       title: "CI/CD Integration",
//       description: "Building robust pipelines for faster delivery.",
//       image: "/images/project2.jpg",
//     },
//     {
//       id: 3,
//       title: "Monitoring Solutions",
//       description: "Advanced monitoring for system performance insights.",
//       image: "/images/project3.jpg",
//     },
//     {
//       id: 4,
//       title: "Infrastructure as Code",
//       description: "Managing infrastructure through code automation.",
//       image: "/images/project4.jpg",
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2>Our Services</h2>
//       <p>What We Do</p>
//       <div className="card-container">
//         {projects.map((item) => (
//           <div className="project-card" key={item.id}>
//             <img src={item.image} alt={item.title} className="project-image" />
//             <div className="project-content">
//               <h3 className="project-title">{item.title}</h3>
//               <p className="project-description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="button-wrapper">
//         <button className="more-button" onClick={() => router.push("/services")}>
//           MORE SERVICES
//         </button>
//       </div>

//       <style jsx>{`
//         .projects-section {
//           text-align: center;
//           padding: 50px 20px;
//           background: #f9f9f9;
//         }

//         h2 {
//           font-size: 40px;
//           color: #1b2942;
//           margin-bottom: 10px;
//         }

//         p {
//           font-size: 18px;
//           color: #555;
//         }

//         .card-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 20px;
//           margin-top: 30px;
//         }

//         .project-card {
//           background: #ffffff;
//           border-radius: 12px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           transition: transform 0.2s;
//           cursor: pointer;
//         }

//         .project-card:hover {
//           transform: translateY(-5px);
//         }

//         .project-image {
//           width: 100%;
//           height: 180px;
//           object-fit: cover;
//         }

//         .project-content {
//           padding: 15px;
//         }

//         .project-title {
//           font-size: 24px;
//           color: #1b2942;
//           margin-bottom: 8px;
//         }

//         .project-description {
//           font-size: 16px;
//           color: #666;
//         }

//         .button-wrapper {
//           margin-top: 40px;
//         }

//         .more-button {
//           background-color: #1b2942;
//           color: #bcff00;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//         }

//         .more-button:hover {
//           background-color: #15233b;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LatestProjectsSection;


// "use client";
// import { useRouter } from "next/navigation";

// const LatestProjectsSection = () => {
//   const router = useRouter();

//   const projects = [
//     {
//       id: 1,
//       title: "Cloud Automation",
//       description: "Automating cloud infrastructure for optimized deployment.",
//       image: "/img/covers/Cybersecurity.png",
//     },
//     {
//       id: 2,
//       title: "CI/CD Integration",
//       description: "Building robust pipelines for faster delivery.",
//       image: "/img/covers/Cybersecurity.png",
//     },
//     {
//       id: 3,
//       title: "Monitoring Solutions",
//       description: "Advanced monitoring for system performance insights.",
//       image: "/img/covers/Cybersecurity.png",
//     },
//     {
//       id: 4,
//       title: "Infrastructure as Code",
//       description: "Managing infrastructure through code automation.",
//       image: "/img/covers/Cybersecurity.png",
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2>Our Services</h2>
//       <p>What We Do</p>
//       <div className="card-container">
//         {projects.map((item) => (
//           <div className="project-card" key={item.id}>
//             <img src={item.image} alt={item.title} className="project-image" />
//             <div className="project-content">
//               <h3 className="project-title">{item.title}</h3>
//               <p className="project-description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="button-wrapper">
//         <button className="more-button" onClick={() => router.push("/services")}>
//           MORE SERVICES
//         </button>
//       </div>

//       <style jsx>{`
//         .projects-section {
//           text-align: center;
//           padding: 50px 20px;
//           background: #f9f9f9;
//         }

//         h2 {
//           font-size: 40px;
//           color: #1b2942;
//           margin-bottom: 10px;
//         }

//         p {
//           font-size: 18px;
//           color: #555;
//         }

//         .card-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 20px;
//           margin-top: 30px;
//         }

//         .project-card {
//           position: relative;
//           height: 480px; /* Increased height */
//           overflow: hidden;
//           border-radius: 12px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .project-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: brightness(0.8);
//         }

//         .project-content {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           color: #fff;
//           text-align: center;
//         }

//         .project-title {
//           font-size: 24px;
//           margin-bottom: 8px;
//         }

//         .project-description {
//           font-size: 16px;
//         }

//         .button-wrapper {
//           margin-top: 40px;
//         }

//         .more-button {
//           background-color: #1b2942;
//           color: #bcff00;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//         }

//         .more-button:hover {
//           background-color: #15233b;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LatestProjectsSection;


"use client";
import { useRouter } from "next/navigation";

const LatestProjectsSection = () => {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Cloud Automation",
      description: "Automating cloud infrastructure for optimized deployment.",
      image: "/img/covers/Cybersecurity.png",
      hoverImage: "/img/covers/5.png",
      hoverDescription: "Improved efficiency through automation tools.",
    },
    {
      id: 2,
      title: "CI/CD Integration",
      description: "Building robust pipelines for faster delivery.",
      image: "/img/covers/Cybersecurity.png",
      hoverImage: "/img/covers/CICDHover.png",
      hoverDescription: "Seamless deployment with best CI/CD practices.",
    },
    {
      id: 3,
      title: "Monitoring Solutions",
      description: "Advanced monitoring for system performance insights.",
      image: "/img/covers/Cybersecurity.png",
      hoverImage: "/img/covers/MonitoringHover.png",
      hoverDescription: "Real-time performance insights for better management.",
    },
    {
      id: 4,
      title: "Infrastructure as Code",
      description: "Managing infrastructure through code automation.",
      image: "/img/covers/Cybersecurity.png",
      hoverImage: "/img/covers/IaCHover.png",
      hoverDescription: "Efficient infrastructure management with code.",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Our Services</h2>
      <p>What We Do</p>
      <div className="card-container">
        {projects.map((item) => (
          <div className="project-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="project-image default-image"
            />
            <img
              src={item.hoverImage}
              alt={item.title}
              className="project-image hover-image"
            />
            <div className="project-content">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>
              <p className="hover-description">{item.hoverDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <button className="more-button" onClick={() => router.push("/services")}>
          MORE SERVICES
        </button>
      </div>

      <style jsx>{`
        .projects-section {
          text-align: center;
          padding: 50px 20px;
          background: #f9f9f9;
        }

        h2 {
          font-size: 40px;
          color: #1b2942;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          color: #555;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .project-card {
          position: relative;
          height: 480px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.4s;
        }

        .default-image {
          opacity: 1;
        }

        .hover-image {
          opacity: 0;
        }

        .project-card:hover .default-image {
          opacity: 0;
        }

        .project-card:hover .hover-image {
          opacity: 1;
        }

        .project-content {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          text-align: center;
          z-index: 1;
        }

        .hover-description {
          display: none;
        }

        .project-card:hover .hover-description {
          display: block;
          color: #bcff00;
          font-size: 14px;
          margin-top: 10px;
        }

        .project-title {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .project-description {
          font-size: 16px;
          color: #ccc;
        }

        .button-wrapper {
          margin-top: 40px;
        }

        .more-button {
          background-color: #1b2942;
          color: #bcff00;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        .more-button:hover {
          background-color: #15233b;
        }
      `}</style>
    </section>
  );
};

export default LatestProjectsSection;
