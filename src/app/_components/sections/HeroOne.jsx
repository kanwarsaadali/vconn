// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";

// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 <img src={Data.bg_image} className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
                
//                 <div className="mil-overlay " />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">{Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span></Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                     <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                         <div className="mil-counter-frame mil-light mil-mb-30">
//                                             <h4 className="mil-accent mil-thin mil-mb-10"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
//                                             <p className="mil-light" dangerouslySetInnerHTML={{__html : item.label}} />
//                                         </div>
//                                     </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}
//         </>
//     );
// }
// export default HeroOne;



// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}
                
//                 <div className="mil-overlay " />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.title }} />
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                         <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                             <div className="mil-counter-frame mil-light mil-mb-30">
//                                                 <h4 className="mil-accent mil-thin mil-mb-10">
//                                                     <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue}
//                                                 </h4>
//                                                 <p className="mil-light" dangerouslySetInnerHTML={{ __html: item.label }} />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}
//         </>
//     );
// };

// export default HeroOne;



// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {/* Conditionally render video or image based on file extension */}
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}

//                 <div className="mil-overlay" />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     {/* <h1
//                                         // className="mil-upper mil-light mil-mb-60"
//                                         // dangerouslySetInnerHTML={{ __html: Data.title }}
//                                         WE<br/><span class=\"mil-accent\">CONNECT</span><br/>BUSINESSES 
//                                     />  */}
//                                     <h1 className="mil-upper mil-light mil-mb-60">
//   WE<br />
//   <span className="mil-accent">CONNECT</span><br />
//   BUSINESSES
// </h1>

//                                     {/* <h4 className=" mil-light mil-mb-60 text-capitaized">
//                                     Hyper-personalization at the pace   Hyper-personalization at the pace  Hyper-personalization at the pace </h4> */}

//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                         <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                             {/* <div className="mil-counter-frame mil-light mil-mb-30"> */}
//                                                 <h4 className="mil-accent mil-thin mil-mb-10">
//                                                     {/* <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue} */}
//                                                 </h4>
//                                                 <p
//                                                     className="mil-light"
//                                                     // dangerouslySetInnerHTML={{ __html: item.label }}
//                                                 />
//                                             </div>
//                                         // </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* banner end */}

//             {/* CSS Styles */}
//             <style jsx>{`
//                 .mil-banner {
//                     position: relative;
//                     overflow: hidden;
//                     width: 100%;
//                     height: 100vh;
//                 }

//                 .mil-bg-video,
//                 .mil-bg-img {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     min-width: 100%;
//                     min-height: 100%;
//                     width: auto;
//                     height: auto;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     // background-color: rgba(0, 0, 0, 0.5);
//                     z-index: 0;
//                 }

//                     .container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     padding: 0 20px;
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-banner-content {
//                     display: flex;
//                     align-items: center;
//                     height: 100%;
//                     color: #fff;
//                     text-align: left;
//                 }

//                 .mil-mb-90 {
//                     margin-bottom: 90px;
//                 }

//                 .mil-suptitle {
//                     font-size: 1.2rem;
//                 }

//                 h1 {
//                     font-size: ;
//                 }

//                 .mil-counter-frame {
//                     text-align: center;
//                 }

//                 @media (max-width: 768px) {
//                     .mil-banner {
//                         height: auto;
//                     }

//                     .mil-banner-content {
//                         flex-direction: column;
//                         align-items: center;
//                         text-align: center;
//                         padding: 20px;
//                     }

//                     h1 {
//                         font-size: 2rem;
//                     }

//                     .mil-mb-90 {
//                         margin-bottom: 60px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// }

// export default HeroOne;







// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         // ScrollAnimation();
//     }, []);

//     // Dynamic typing effect state
//     const [typedText, setTypedText] = useState("");
//     const targetText = "WE CONNECT BUSINESSES";

//     useEffect(() => {
//         let index = 0; // Keeps track of the current character index
//         setTypedText(""); // Reset typed text at the start

//         const typingInterval = setInterval(() => {
//             if (index < targetText.length) {
//                 setTypedText((prev) => targetText.substring(0, index + 1)); // Use substring to avoid missed/duplicated characters
//                 index++;
//             } else {
//                 clearInterval(typingInterval); // Stop the interval when typing is complete
//             }
//         }, 150); // Typing speed in milliseconds

//         return () => clearInterval(typingInterval); // Cleanup interval on component unmount
//     }, [targetText]);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {/* Conditionally render video or image based on file extension */}
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}

//                 <div className="mil-overlay" />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     {/* Dynamic typed text */}
//                                     <h1 className="mil-upper mil-mb-60 ">
//                                         {typedText.split(" ").map((word, index) => (
//                                             <span className={`${index == 1 ? "bussinessText" :'mil-light'}`} key={index}>
//                                                 {word}
//                                                 <br />
//                                             </span>
//                                         ))}
//                                         {/* {typedText} */}
//                                     </h1>
//                                     <h2></h2>
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                         <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                             <h4 className="mil-accent mil-thin mil-mb-10">
//                                                 {/* <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue} */}
//                                             </h4>
//                                             <p className="mil-light" />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}

//             {/* CSS Styles */}
//             <style jsx>{`
//                 .mil-banner {
//                     position: relative;
//                     overflow: hidden;
//                     width: 100%;
//                     height: 100vh;
//                 }

//                 .mil-bg-video,
//                 .mil-bg-img {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     min-width: 100%;
//                     min-height: 100%;
//                     width: auto;
//                     height: auto;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                 }

//                 .container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     padding: 0 20px;
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-banner-content {
//                     display: flex;
//                     align-items: center;
//                     height: 100%;
//                     color: #fff;
//                     text-align: left;
//                 }

//                 .mil-mb-90 {
//                     margin-bottom: 90px;
//                 }

//                 .mil-suptitle {
//                     font-size: 1.2rem;
//                 }

//                 h1 {
//                     font-size: 4rem;
//                     line-height: 1.2;
//                 }

//                 .mil-counter-frame {
//                     text-align: center;
//                 }

//                 @media (max-width: 768px) {
//                     .mil-banner {
//                         height: auto;
//                     }

//                     .mil-banner-content {
//                         flex-direction: column;
//                         align-items: center;
//                         text-align: center;
//                         padding: 20px;
//                     }

//                     h1 {
//                         font-size: 2rem;
//                     }

//                     .mil-mb-90 {
//                         margin-bottom: 60px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HeroOne;




// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         // ScrollAnimation();
//     }, []);

//     // Dynamic typing effect state
//     const [typedText, setTypedText] = useState("");
//     const targetText = "WE CONNECT BUSINESSES";

//     useEffect(() => {
//         let index = 0; // Keeps track of the current character index
//         setTypedText(""); // Reset typed text at the start

//         const typingInterval = setInterval(() => {
//             if (index < targetText.length) {
//                 setTypedText((prev) => targetText.substring(0, index + 1)); // Use substring to avoid missed/duplicated characters
//                 index++;
//             } else {
//                 clearInterval(typingInterval); // Stop the interval when typing is complete
//             }
//         }, 150); // Typing speed in milliseconds

//         return () => clearInterval(typingInterval); // Cleanup interval on component unmount
//     }, [targetText]);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {/* Conditionally render video or image based on file extension */}
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}

//                 <div className="mil-overlay" />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     {/* Dynamic typed text */}
//                                     <h1 className="mil-upper mil-mb-60">
//                                         {typedText.split(" ").map((word, index) => (
//                                             <span className={`${index === 1 ? "bussinessText" : 'mil-light'}`} key={index}>
//                                                 {word}
//                                                 <br />
//                                             </span>
//                                         ))}
//                                     </h1>
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             {/* Description moved here */}
//                             <div className="col-xl-5">
//                                 <h5 className="mil-description mil-light mil-mb-60">
//                                     VConn provides top-tier hosting services, connecting businesses with reliable infrastructure for web and application solutions.dekde deddwddwedwdwd  dewdwdwd wddw d wde d
//                                 </h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}

//             {/* CSS Styles */}
//             <style jsx>{`
//                 .mil-banner {
//                     position: relative;
//                     overflow: hidden;
//                     width: 100%;
//                     height: 100vh;
//                 }

//                 .mil-bg-video,
//                 .mil-bg-img {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     min-width: 100%;
//                     min-height: 100%;
//                     width: auto;
//                     height: auto;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                 }

//                 .container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     padding: 0 20px;
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-banner-content {
//                     display: flex;
//                     align-items: center;
//                     height: 100%;
//                     color: #fff;
//                     text-align: left;
//                 }

//                 .mil-mb-90 {
//                     margin-bottom: 90px;
//                 }

//                 .mil-suptitle {
//                     font-size: 1.2rem;
//                 }

//                 h1 {
//                     font-size: 4rem;
//                     line-height: 1.2;
//                 }

//                 /* Updated description CSS */
//                 .mil-description {
//                     font-size: 1.5rem;
//                     line-height: 1.6;
//                     color: #d0d0d0;
//                     max-width: 1400px;
//                     position: relative;
//                     right: 0;
//                     margin-top: -100px; /* Move it up */
//                 }

//                 .mil-counter-frame {
//                     text-align: center;
//                 }

//                 @media (max-width: 768px) {
//                     .mil-banner {
//                         height: auto;
//                     }

//                     .mil-banner-content {
//                         flex-direction: column;
//                         align-items: center;
//                         text-align: center;
//                         padding: 20px;
//                     }

//                     h1 {
//                         font-size: 2rem;
//                     }

//                     /* Adjust description for smaller screens */
//                     .mil-description {
//                         font-size: 1.2rem;
//                         margin-top: -20px;
//                     }

//                     .mil-mb-90 {
//                         margin-bottom: 60px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HeroOne;









// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         // ScrollAnimation();
//     }, []);

//     // Dynamic typing effect state for the title
//     const [typedText, setTypedText] = useState("");
//     const targetText = "WE CONNECT BUSINESSES";

//     // Dynamic typing effect state for the description
//     const [typedDescription, setTypedDescription] = useState("");
//     const descriptionText =
//         "VConn provides top-tier hosting services, connecting businesses with reliable infrastructure for web and application solutions.";

//     useEffect(() => {
//         let index = 0; // Keeps track of the current character index for the title
//         setTypedText(""); // Reset typed text at the start

//         const typingInterval = setInterval(() => {
//             if (index < targetText.length) {
//                 setTypedText((prev) => targetText.substring(0, index + 1)); // Use substring to avoid missed/duplicated characters
//                 index++;
//             } else {
//                 clearInterval(typingInterval); // Stop the interval when typing is complete
//             }
//         }, 150); // Typing speed in milliseconds

//         return () => clearInterval(typingInterval); // Cleanup interval on component unmount
//     }, [targetText]);

//     useEffect(() => {
//         let index = 0; // Keeps track of the current character index for the description
//         setTypedDescription(""); // Reset typed description at the start

//         const typingInterval = setInterval(() => {
//             if (index < descriptionText.length) {
//                 setTypedDescription((prev) => descriptionText.substring(0, index + 1)); // Use substring for smooth typing
//                 index++;
//             } else {
//                 clearInterval(typingInterval); // Stop the interval when typing is complete
//             }
//         }, 80); // Faster typing speed for the description

//         return () => clearInterval(typingInterval); // Cleanup interval on component unmount
//     }, [descriptionText]);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {/* Conditionally render video or image based on file extension */}
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}

//                 <div className="mil-overlay" />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     {/* Dynamic typed text for title */}
//                                     <h1 className="mil-upper mil-mb-60">
//                                         {typedText.split(" ").map((word, index) => (
//                                             <span className={`${index === 1 ? "bussinessText" : 'mil-light'}`} key={index}>
//                                                 {word}
//                                                 <br />
//                                             </span>
//                                         ))}
//                                     </h1>
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             {/* Dynamic description typing effect */}
//                             <div className="col-xl-5">
//                                 {/* <h5 className="mil-description mil-light mil-mb-60">
//                                     {typedDescription}
//                                 </h5> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}

//             {/* CSS Styles */}
//             <style jsx>{`
//                 .mil-banner {
//                     position: relative;
//                     overflow: hidden;
//                     width: 100%;
//                     height: 100vh;
//                 }

//                 .mil-bg-video,
//                 .mil-bg-img {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     min-width: 100%;
//                     min-height: 100%;
//                     width: auto;
//                     height: auto;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                 }

//                 .container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     padding: 0 20px;
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-banner-content {
//                     display: flex;
//                     align-items: center;
//                     height: 100%;
//                     color: #fff;
//                     text-align: left;
//                 }

//                 .mil-mb-90 {
//                     margin-bottom: 90px;
//                 }

//                 .mil-suptitle {
//                     font-size: 1.2rem;
//                 }

//                 h1 {
//                     font-size: 4rem;
//                     line-height: 1.2;
//                 }

//                 /* Updated description CSS */
//                 .mil-description {
//                     font-size: 1.5rem;
//                     line-height: 1.6;
//                     color: #d0d0d0;
//                     max-width: 1400px;
//                     position: relative;
//                     right: 0;
//                     margin-top: -300px; /* Move it up */
//                 }

//                 .mil-counter-frame {
//                     text-align: center;
//                 }

//                 @media (max-width: 768px) {
//                     .mil-banner {
//                         height: auto;
//                     }

//                     .mil-banner-content {
//                         flex-direction: column;
//                         align-items: center;
//                         text-align: center;
//                         padding: 20px;
//                     }

//                     h1 {
//                         font-size: 2rem;
//                     }

//                     /* Adjust description for smaller screens */
//                     .mil-description {
//                         font-size: 1.2rem;
//                         margin-top: -20px;
//                     }

//                     .mil-mb-90 {
//                         margin-bottom: 60px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HeroOne;


"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroOne = () => {
    useEffect(() => {
        // ScrollAnimation(); Uncomment if required
    }, []);

    // Dynamic typing effect for title
    const [typedText, setTypedText] = useState("");
    const targetText = "WE CONNECT BUSINESSES";

    // Dynamic typing effect for description
    const [typedDescription, setTypedDescription] = useState("");
    const descriptionText =
        "VConn provides top-tier hosting services, connecting businesses.";

    useEffect(() => {
        let index = 0;
        setTypedText("");

        const typingInterval = setInterval(() => {
            if (index < targetText.length) {
                setTypedText((prev) => targetText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, [targetText]);

    // useEffect(() => {
    //     let index = 0;
    //     setTypedDescription("");

    //     const typingInterval = setInterval(() => {
    //         if (index < descriptionText.length) {
    //             setTypedDescription((prev) => descriptionText.substring(0, index + 1));
    //             index++;
    //         } else {
    //             clearInterval(typingInterval);
    //         }
    //     }, 80);

    //     return () => clearInterval(typingInterval);
    // }, [descriptionText]);

    return (
        <>
            <section className="mil-banner">
                {Data.bg_image.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="mil-bg-video"
                    >
                        <source src={Data.bg_image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={Data.bg_image}
                        className="mil-bg-img"
                        alt="background"
                    />
                )}

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
                                        {typedText.split(" ").map((word, index) => (
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
                                        dangerouslySetInnerHTML={{ __html: typedDescription }}
                                    />
                                    <Link
                                        href={Data.button.link}
                                        className="mil-link mil-light mil-upper"
                                    >
                                        {Data.button.label}{" "}
                                        <span className="mil-arrow">
                                            <img src="img/icons/1.svg" alt="arrow" />
                                        </span>
                                    </Link>
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
                    height: 100vh;
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
                    background: rgba(0, 0, 0, 0.4);
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
                    font-size: 1.2rem;
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
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
};

export default HeroOne;
