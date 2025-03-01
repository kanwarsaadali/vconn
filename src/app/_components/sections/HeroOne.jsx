// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";

// const HeroOne = ({ videoLoaded, setVideoLoaded }) => {
//     const targetText = "";
//     const descriptionText = "";

//     const handleVideoLoaded = () => {
//         // setVideoLoaded(true);
//     };

//     return (
//         <>
//             <section className="mil-banner">
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video"
//                         onCanPlay={() => {
//                             console.log("onCanPlay triggered");
//                             // handleVideoLoaded();
//                         }}
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img"
//                         alt="background"
//                     />
//                 )}

//                 <div className="mil-overlay" />
//                 <div className="container">
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-40">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-20">
//                                         {Data.subtitle}
//                                     </span>
//                                     <h1 className="mil-upper mil-mb-20">
//                                         {targetText.split(" ").map((word, index) => (
//                                             <span
//                                                 className={`${
//                                                     index === 1 ? "bussinessText" : "mil-light"
//                                                 }`}
//                                                 key={index}
//                                             >
//                                                 {word}
//                                                 <br />
//                                             </span>
//                                         ))}
//                                     </h1>
//                                     <h5
//                                         className="mil-description mil-light mil-mb-40"
//                                         dangerouslySetInnerHTML={{ __html: descriptionText }}
//                                     />
//                                     {/* <Link
//                                         href={Data.button.link}
//                                         className="mil-link mil-light mil-upper"
//                                     >
//                                         {Data.button.label}{" "}
//                                         <span className="mil-arrow">
//                                             <img src="img/icons/1.svg" alt="arrow" />
//                                         </span>
//                                     </Link> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CSS Styles */}
//             <style jsx>{`
//                 .mil-banner {
//                     position: relative;
//                     overflow: hidden;
//                     width: 100%;
//                     height: 82vh;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                 }

//                 .mil-bg-video,
                
//                 .mil-bg-img {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     // background: rgba(0, 0, 0, 0.4);
//                     z-index: 0;
//                 }

//                 .container {
//                     width: 90%;
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-banner-content {
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     height: 100%;
//                     color: #fff;
//                 }

//                 .mil-mb-20 {
//                     margin-bottom: 1.25rem;
//                 }

//                 .mil-mb-40 {
//                     margin-bottom: 2.5rem;
//                 }

//                 .mil-suptitle {
//                     font-size: 1.5rem;
//                 }

//                 h1 {
//                     font-size: 4rem;
//                     line-height: 1.2;
//                 }

//                 .mil-description {
//                     font-size: 1rem;
//                     line-height: 1.5;
//                     color: #d0d0d0;
//                 }

//                 @media (max-width: 1200px) {
//                     h1 {
//                         font-size: 3.5rem;
//                     }

//                     .mil-description {
//                         font-size: 1rem;
//                     }
//                 }

//                 @media (max-width: 768px) {
//                     h1 {
//                         font-size: 2.5rem;
//                         text-align: center;
//                     }

//                     .mil-suptitle {
//                         font-size: 1.2rem;
//                         text-align: center;
//                     }

//                     .mil-description {
//                         font-size: 1rem;
//                         text-align: center;
//                     }

//                     .mil-banner-content {
//                         align-items: center;
//                         text-align: center;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     h1 {
//                         font-size: 2rem;
//                     }

//                     .mil-suptitle {
//                         font-size: 1rem;
//                     }

//                     .mil-description {
//                         font-size: 0.6rem;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HeroOne;

// "use client";

// import { useEffect, useRef } from "react";

// const HeroOne = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight / 1.5;

//         let particles = [];
//         const particleCount = 60;
//         const maxDistance = 150;

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = Math.random() * 2 - 1;
//                 this.vy = Math.random() * 2 - 1;
//                 this.radius = 2.5;
//             }

//             move() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = "#ffffff";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }

//         function createParticles() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function drawLines() {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     let dx = particles[i].x - particles[j].x;
//                     let dy = particles[i].y - particles[j].y;
//                     let distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//                         ctx.lineWidth = 0.8;
//                         ctx.stroke();
//                         ctx.closePath();
//                     }
//                 }
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle) => {
//                 particle.move();
//                 particle.draw();
//             });
//             drawLines();
//             requestAnimationFrame(animate);
//         }

//         createParticles();
//         animate();

//         const resizeHandler = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight / 1.5;
//             createParticles();
//         };

//         window.addEventListener("resize", resizeHandler);
//         return () => window.removeEventListener("resize", resizeHandler);
//     }, []);

//     return (
//         <div style={{ width: "100vw", height: "66vh", position: "relative", background: "rgb(12, 20, 31)" }}>
//             {/* Canvas for Particles */}
//             <canvas
//                 ref={canvasRef}
//                 style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//             />
            
//             {/* Hero Text Moved to the Left Side */}
//             <div style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "15%",
//                 transform: "translate(0, -50%)",
//                 color: "rgb(38, 144, 193)",
//                 fontSize: "3.5rem",
//                 fontWeight: "bold",
//                 textAlign: "left",
//                 zIndex: 10,
//                 letterSpacing: "2.5px",
//                 textTransform: "uppercase"
//             }}>
//                 <span style={{color:"rgb(188, 255, 0)"}}>WE</span> CONNECT <span style={{color:"rgb(188, 255, 0)"}}> BUSINESS</span>
//             </div>
//         </div>
//     );
// };

// export default HeroOne;


// "use client";

// import { useEffect, useRef } from "react";

// const HeroOne = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight / 1.5;

//         let particles = [];
//         const particleCount = 60;
//         const maxDistance = 150;

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = Math.random() * 2 - 1;
//                 this.vy = Math.random() * 2 - 1;
//                 this.radius = 2.5;
//             }

//             move() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = "#ffffff";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }

//         function createParticles() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function drawLines() {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     let dx = particles[i].x - particles[j].x;
//                     let dy = particles[i].y - particles[j].y;
//                     let distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//                         ctx.lineWidth = 0.8;
//                         ctx.stroke();
//                         ctx.closePath();
//                     }
//                 }
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle) => {
//                 particle.move();
//                 particle.draw();
//             });
//             drawLines();
//             requestAnimationFrame(animate);
//         }

//         createParticles();
//         animate();

//         const resizeHandler = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight / 1.5;
//             createParticles();
//         };

//         window.addEventListener("resize", resizeHandler);
//         return () => window.removeEventListener("resize", resizeHandler);
//     }, []);

//     return (
//         <div style={{
//             width: "100vw",
//             height: "66vh",
//             position: "relative",
//             background: "rgb(12, 20, 31)",
//             // opacity: "0.2" // 60% Transparency Applied
//         }}>
//             {/* Canvas for Particles */}
//             <canvas
//                 ref={canvasRef}
//                 style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//             />
            
//             {/* Hero Text Moved to the Left Side */}
//             <div style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "15%",
//                 transform: "translate(0, -50%)",
//                 color: "rgb(38, 144, 193)",
//                 fontSize: "3.5rem",
//                 fontWeight: "bold",
//                 textAlign: "left",
//                 zIndex: 10,
//                 letterSpacing: "2.5px",
//                 textTransform: "uppercase"
//             }}>
//                 <span style={{color:"rgb(188, 255, 0)"}}>WE</span> CONNECT <span style={{color:"rgb(188, 255, 0)"}}> BUSINESS</span>
//             </div>
//         </div>
//     );
// };

// export default HeroOne;


// "use client";

// import { useEffect, useRef } from "react";

// const HeroOne = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight / 1;

//         let particles = [];
//         const particleCount = 80;
//         const maxDistance = 150;

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = (Math.random() * 2 - 1) * 0.4; // Reduce speed by 50%
//                 this.vy = (Math.random() * 2 - 1) * 0.4; // Reduce speed by 50%
//                 this.radius = 2.5;
//             }

//             move() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // 60% Transparency for Dots
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }

//         function createParticles() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function drawLines() {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     let dx = particles[i].x - particles[j].x;
//                     let dy = particles[i].y - particles[j].y;
//                     let distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//                         ctx.lineWidth = 0.8;
//                         ctx.stroke();
//                         ctx.closePath();
//                     }
//                 }
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle) => {
//                 particle.move();
//                 particle.draw();
//             });
//             drawLines();
//             requestAnimationFrame(animate);
//         }

//         createParticles();
//         animate();

//         const resizeHandler = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight / 1.5;
//             createParticles();
//         };

//         window.addEventListener("resize", resizeHandler);
//         return () => window.removeEventListener("resize", resizeHandler);
//     }, []);

//     return (
//         <div style={{
//             width: "100vw",
//             height: "75vh",
//             position: "relative",
//             background: "rgb(12, 20, 31)",
//         }}>
//             {/* Canvas for Particles */}
//             <canvas
//                 ref={canvasRef}
//                 style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//             />
            
//             {/* Hero Text Moved to the Left Side */}
//             <div style={{
// position: "absolute",
// top: "35%",
// alignItems: "center",
// left: "100px",
// // transform: "translate(-50%, -50%)", /* Centers the text perfectly */
// color: "rgb(188, 255, 0)",
// fontSize: "3.0rem", /* Larger size for a stronger presence */
// fontWeight: "bold",
// textAlign: "left", /* Centers the text horizontally */
// zIndex: 10,
// letterSpacing: "1px", /* Slightly reduced for a cleaner look */
// textTransform: "uppercase",
// lineHeight: "1.1", /* Adds breathing space between lines if it's multiline */
// textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", /* Subtle shadow for more emphasis */
// fontFamily: "'lato', sans-serif", /* A modern font for better readability */
// padding: "0 20px", /* Optional, adds space on the sides */
// // max-width: "90%", /* Prevents overflow and keeps the title within a reasonable width */

            
//             }}>
//                 <span style={{color:"white"}}>IMPROVE, STREAMLINE, & AUTOMATE</span> CONNECT <span style={{color:"white"}}> BUSINESS OPERATION THE AFFORDABLE WAY</span>
            
//             </div>
//             <span>dede</span>
//         </div>
//     );
// };

// export default HeroOne;


// "use client";

// import { useEffect, useRef, useState } from "react";

// const HeroOne = () => {
//     const canvasRef = useRef(null);
//     const [particleCount, setParticleCount] = useState(getParticleCount());
//     const [maxDistance, setMaxDistance] = useState(getMaxDistance());

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight / 1.2;

//         let particles = [];

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = (Math.random() * 2 - 1) * 0.4;
//                 this.vy = (Math.random() * 2 - 1) * 0.4;
//                 this.radius = 2.5;
//             }

//             move() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }

//         function createParticles() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function drawLines() {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     let dx = particles[i].x - particles[j].x;
//                     let dy = particles[i].y - particles[j].y;
//                     let distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//                         ctx.lineWidth = 0.8;
//                         ctx.stroke();
//                         ctx.closePath();
//                     }
//                 }
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle) => {
//                 particle.move();
//                 particle.draw();
//             });
//             drawLines();
//             requestAnimationFrame(animate);
//         }

//         createParticles();
//         animate();

//         const resizeHandler = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight / 1.2;
//             setParticleCount(getParticleCount());
//             setMaxDistance(getMaxDistance());
//             createParticles();
//         };

//         window.addEventListener("resize", resizeHandler);
//         return () => window.removeEventListener("resize", resizeHandler);
//     }, [particleCount, maxDistance]);

//     function getParticleCount() {
//         return window.innerWidth > 1024 ? 80 : window.innerWidth > 768 ? 50 : 30;
//     }

//     function getMaxDistance() {
//         return window.innerWidth > 1024 ? 150 : window.innerWidth > 768 ? 100 : 70;
//     }

//     return (
//         <div style={{
//             width: "100vw",
//             height: "75vh",
//             position: "relative",
//             background: "rgb(12, 20, 31)",
//         }}>
//             <canvas
//                 ref={canvasRef}
//                 style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//             />
//             <div style={{
//                 position: "absolute",
//                 top: "35%",
//                 left: "8%",
//                 color: "rgb(188, 255, 0)",
//                 fontSize: "3rem",
//                 fontWeight: "bold",
//                 textAlign: "left",
//                 zIndex: 10,
//                 letterSpacing: "1px",
//                 textTransform: "uppercase",
//                 lineHeight: "1.1",
//                 textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
//                 fontFamily: "'Lato', sans-serif",
//                 padding: "0 20px",
//                 width: "85%",
//             }}>
//                 <span style={{ color: "white" }}>IMPROVE, STREAMLINE, & AUTOMATE</span> CONNECT{" "}
//                 <span style={{ color: "white" }}>BUSINESS OPERATION THE AFFORDABLE WAY</span>
//             </div>
//         </div>
//     );
// };

// export default HeroOne;



// "use client";

// import { useEffect, useRef, useState } from "react";

// const HeroOne = () => {
//     const canvasRef = useRef(null);
//     const [particleCount, setParticleCount] = useState(getParticleCount());
//     const [maxDistance, setMaxDistance] = useState(getMaxDistance());

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight / 1.2;

//         let particles = [];

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = (Math.random() * 2 - 1) * 0.4;
//                 this.vy = (Math.random() * 2 - 1) * 0.4;
//                 this.radius = 2.5;
//             }

//             move() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }

//         function createParticles() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function drawLines() {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     let dx = particles[i].x - particles[j].x;
//                     let dy = particles[i].y - particles[j].y;
//                     let distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//                         ctx.lineWidth = 0.8;
//                         ctx.stroke();
//                         ctx.closePath();
//                     }
//                 }
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle) => {
//                 particle.move();
//                 particle.draw();
//             });
//             drawLines();
//             requestAnimationFrame(animate);
//         }

//         createParticles();
//         animate();

//         const resizeHandler = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight / 1.2;
//             setParticleCount(getParticleCount());
//             setMaxDistance(getMaxDistance());
//             createParticles();
//         };

//         window.addEventListener("resize", resizeHandler);
//         return () => window.removeEventListener("resize", resizeHandler);
//     }, [particleCount, maxDistance]);

//     function getParticleCount() {
//         return window.innerWidth > 1024 ? 80 : window.innerWidth > 768 ? 50 : 30;
//     }

//     function getMaxDistance() {
//         return window.innerWidth > 1024 ? 150 : window.innerWidth > 768 ? 100 : 70;
//     }

//     return (
//         <div style={{
//             width: "100vw",
//             height: "75vh",
//             position: "relative",
//             background: "rgb(12, 20, 31)",
//         }}>
//             <canvas
//                 ref={canvasRef}
//                 style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//             />
//             <div style={{
//                 position: "absolute",
//                 top: "35%",
//                 left: "8%",
//                 color: "rgb(188, 255, 0)",
//                 fontSize: "clamp(1.5rem, 4vw, 3rem)",  // Responsive font size
//                 fontWeight: "bold",
//                 textAlign: "left",
//                 zIndex: 10,
//                 letterSpacing: "1px",
//                 textTransform: "uppercase",
//                 lineHeight: "1.2",  // Better readability
//                 textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
//                 fontFamily: "'Lato', sans-serif",
//                 padding: "0 5%",  // Adds padding for better responsiveness
//                 width: "85%",
//                 maxWidth: "1200px",  // Prevents text from being too wide
//             }}>
//                 <span style={{ color: "white" }}>IMPROVE, STREAMLINE, & AUTOMATE</span> CONNECT{" "}
//                 <span style={{ color: "white" }}>BUSINESS OPERATION THE AFFORDABLE WAY</span>
//             </div>
//         </div>
//     );
// };

// export default HeroOne;


"use client";

import { useEffect, useRef, useState } from "react";

<<<<<<< HEAD
const HeroOne = ({ videoLoaded, setVideoLoaded }) => {
    const targetText = "";
    const descriptionText = "";
=======
const HeroOne = () => {
    const canvasRef = useRef(null);
    const [particleCount, setParticleCount] = useState(getParticleCount());
    const [maxDistance, setMaxDistance] = useState(getMaxDistance());
>>>>>>> 2d17da2 (update code)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 1.2;

        let particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() * 2 - 1) * 0.4;
                this.vy = (Math.random() * 2 - 1) * 0.4;
                this.radius = 2.5;
            }

            move() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
                ctx.fill();
                ctx.closePath();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.move();
                particle.draw();
            });
            drawLines();
            requestAnimationFrame(animate);
        }

        createParticles();
        animate();

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.2;
            setParticleCount(getParticleCount());
            setMaxDistance(getMaxDistance());
            createParticles();
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [particleCount, maxDistance]);

    function getParticleCount() {
        return window.innerWidth > 1024 ? 80 : window.innerWidth > 768 ? 50 : 30;
    }

    function getMaxDistance() {
        return window.innerWidth > 1024 ? 150 : window.innerWidth > 768 ? 100 : 70;
    }

    return (
        <div style={{
            width: "100vw",
            height: "75vh",
            position: "relative",
            background: "rgb(12, 20, 31)",
        }}>
            <canvas
                ref={canvasRef}
                style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
            
            {/* Hero Text */}
            <div style={{
                position: "absolute",
                top: "30%",
                left: "8%",
                color: "rgb(188, 255, 0)",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",  // Responsive font size
                fontWeight: "bold",
                textAlign: "left",
                zIndex: 10,
                letterSpacing: "1px",
                textTransform: "uppercase",
                lineHeight: "1.2",
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
                fontFamily: "'Lato', sans-serif",
                padding: "0 5%",
                width: "85%",
                maxWidth: "1200px",
            }}>
                <span style={{ color: "white" }}>IMPROVE, STREAMLINE, & AUTOMATE</span> CONNECT{" "}
                <span style={{ color: "white" }}>BUSINESS OPERATION THE AFFORDABLE WAY</span>
            </div>

<<<<<<< HEAD
                <div className="mil-overlay" />
                <div className="container">
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-40">
                                    <span className="mil-suptitle mil-light mil-upper mil-mb-20">
                                        {Data.subtitle}
                                    </span>
                                    <h1 className="mil-upper mil-mb-20">
                                        {targetText.split(" ").map((word, index) => (
                                            <span
                                                className={`${
                                                    index === 1 ? "bussinessText" : "mil-light"
                                                }`}
                                                key={index}
                                            >
                                                {word}
                                                <br />
                                            </span>
                                        ))}
                                    </h1>
                                    <h5
                                        className="mil-description mil-light mil-mb-40"
                                        dangerouslySetInnerHTML={{ __html: descriptionText }}
                                    />
                                    {/* <Link
                                        href={Data.button.link}
                                        className="mil-link mil-light mil-upper"
                                    >
                                        {Data.button.label}{" "}
                                        <span className="mil-arrow">
                                            <img src="img/icons/1.svg" alt="arrow" />
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS Styles */}
            <style jsx>{`
                .mil-banner {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 82vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .mil-bg-video,
                
                .mil-bg-img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }

                .mil-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    // background: rgba(0, 0, 0, 0.4);
                    z-index: 0;
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .mil-banner-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    color: #fff;
                }

                .mil-mb-20 {
                    margin-bottom: 1.25rem;
                }

                .mil-mb-40 {
                    margin-bottom: 2.5rem;
                }

                .mil-suptitle {
                    font-size: 1.5rem;
                }

                h1 {
                    font-size: 4rem;
                    line-height: 1.2;
                }

                .mil-description {
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #d0d0d0;
                }

                @media (max-width: 1200px) {
                    h1 {
                        font-size: 3.5rem;
                    }

                    .mil-description {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem;
                        text-align: center;
                    }

                    .mil-suptitle {
                        font-size: 1.2rem;
                        text-align: center;
                    }

                    .mil-description {
                        font-size: 1rem;
                        text-align: center;
                    }

                    .mil-banner-content {
                        align-items: center;
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    h1 {
                        font-size: 2rem;
                    }

                    .mil-suptitle {
                        font-size: 1rem;
                    }

                    .mil-description {
                        font-size: 0.6rem;
                    }
                }
            `}</style>
        </>
=======
            {/* Subtext (Now Below the Main Heading) */}
            <div style={{
                position: "absolute",
                top: "calc(60% + 3rem)",  // Moves it below the hero text
                left: "8%",
                // color: "rgb(255, 255, 255, 0.85)",
                color:"white",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",  // Responsive subtext size
                fontWeight: "500",
                textAlign: "left",
                zIndex: 10,
                maxWidth: "80%",
                lineHeight: "1.4",
                fontFamily: "'Lato', sans-serif",
                padding: "0 5%",
                opacity: 0.9,
            }}>
                Our IT Expert ensures compliant, smooth deployment, automatedious task, covered under multi-layered cybersecurity.  
            </div>
        </div>
>>>>>>> 2d17da2 (update code)
    );
};

export default HeroOne;

