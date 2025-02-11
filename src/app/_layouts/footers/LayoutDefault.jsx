

// "use client";

// import Link from "next/link";
// import AppData from "@data/app.json";
// import { usePathname } from "next/navigation";

// const DefaultFooter = () => {
//     const asPath = usePathname();

//     return (
//         <>
//             {/* footer */}
//             <footer className="mil-footer">
//                 <div className="mil-overlay" />
//                 <div className="container mil-p-120-90">
//                     <div className="mil-background-grid" />

//                     <div className="row align-items-start">
//                         {/* Navigation Section */}
//                         <div className="col-lg-8">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="mil-footer-bottom" style={{ marginTop: "-90px" }}>
//                                         {/* <nav>
//                                             <ul>
//                                                 {AppData.footer.menu.map((item, key) => (
//                                                     <li
//                                                         key={`footer-menu-item-${key}`}
//                                                         className={
//                                                             (asPath.indexOf(item.link) !== -1 &&
//                                                                 item.link !== "/") ||
//                                                             asPath === item.link
//                                                                 ? "mil-active"
//                                                                 : ""
//                                                         }
//                                                     >
//                                                         <Link href={item.link}>{item.label}</Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </nav> */}
//                                     </div>
//                                 </div>

//                               <div className="row">
//                                   {/* Dubai Section */}
//                                   <div className="col-xl-3 col-md-6 col-12 my-3 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         International Headquarter
//                                     </span>
//                                     <img
//                                         src="/img/maps/Dubai.webp"
//                                         alt="Dubai Map"
//                                         className="mil-map-image"
//                                         style={{ marginTop: "-25px" }}
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         United Arab Emirates<br />
//                                         Office E, 23rd Floor,<br />
//                                         Gold Tower, J.L.T,<br />
//                                         Dubai
//                                     </p>
//                                 </div>

//                                 {/* Karachi Section */}
//                                 <div className="col-xl-3 col-md-6 col-12 my-3 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Operation & Support Office
//                                     </span>
//                                     <img
//                                         src="/img/maps/Pakistan.webp"
//                                         alt="Karachi Map"   
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         Pakistan<br />
//                                         Suite # 403, 4th Floor Beaumont Plaza,<br />
//                                         Karachi
//                                     </p>
//                                 </div>

//                                 {/* Services Section */}
//                                 <div className="col-xl-3 col-md-6 col-12 my-3 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Services
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cybersecurity Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Devsecops Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Information Security</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Managed Services</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cloud Hosting</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Licences</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Avocado Hosting</h6>
//                                 </div>
//                                 <div className="col-xl-3 col-md-6 col-12 my-3 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         QUICK LINKS
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cybersecurity Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Devsecops Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Information Security</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Managed Services</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cloud Hosting</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Licences</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Avocado Hosting</h6>
//                                 </div>
//                               </div>
//                             </div>
//                         </div>

//                         {/* Footer Logo & Globe */}
//                         <div className="col-lg-4 text-center">
//                             <div className="mil-logo-globe-wrapper">
//                                 <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
//                                     <img
//                                         src={AppData.footer.logo.image}
//                                         alt={AppData.footer.logo.alt}
//                                         className="mil-logo-image"
//                                     />
//                                 </Link>
//                                 <div className="mil-globe">
//                                     <img
//                                         src="/img/logo/globe.gif"
//                                         alt="Rotating Globe"
//                                         className="mil-globe-image"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Section */}
//                 <div className="container-fluid">
//                     <div className="mil-footer-bottom">
//                         <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
//                         <ul className="mil-light-soft mil-mb-15">
//                             {AppData.social.map((item, key) => (
//                                 <li key={`footer-social-item-${key}`}>
//                                     <a href={item.link} target="_blank" rel="noopener noreferrer">
//                                         {item.title}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </footer>
//             {/* footer end */}

//             {/* Footer Styles */}
//             <style jsx>{`
//                 .mil-footer {
//                     background-color: #17283E;
//                     position: relative;
//                     color: #ffffff;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                     background: rgba(0,0,0,.5)
//                 }

//                 .container {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-footer-navigation ul {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                     text-align: left;
//                 }

//                 .mil-footer-navigation li {
//                     display: inline-block;
//                     margin-right: 15px;
//                 }

//                 .mil-footer-navigation li a {
//                     color: #ffffff;
//                     text-decoration: none;
//                 }

//                 .mil-footer-navigation .mil-active a {
//                     color: #f0c040;
//                 }

//                 .mil-map-image {
//                     display: block;
//                     width: auto;
//                     max-width: 150px;
//                     margin: 15px auto;
//                 }

//                 .mil-suptitle {
//                     font-size: 14px;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                     margin-bottom: 10px;
//                     display: block;
//                 }

//                 .mil-text-sm {
//                     font-size: 14px;
//                     color: #ccc;
//                     line-height: 1.6;
//                     margin: 0 auto;
//                 }

//                 .mil-logo-globe-wrapper {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     justify-content: center;
//                     height: 100%;
//                 }

//                 .mil-logo-image {
//                     margin-bottom: 20px;
//                     width: 180px;
//                 }

//                 .mil-globe-image {
//                     width: 150px;
//                     height: auto;
//                 }

//                 .mil-footer-bottom {
//                     text-align: center;
//                     padding-top: 30px;
//                     border-top: 1px solid rgba(255, 255, 255, 0.2);
//                 }

//                 .mil-footer-bottom ul {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                     display: inline-block;
//                 }

//                 .mil-footer-bottom li {
//                     display: inline;
//                     margin: 0 10px;
//                 }

//                 .mil-footer-bottom a {
//                     color: #ffffff;
//                     text-decoration: none;
//                 }

//                 /* Responsive Styles */
//                 @media (max-width: 992px) {
//                     .row {
//                         flex-direction: column;
//                     }

//                     .mil-footer-navigation ul {
//                         text-align: center;
//                     }

//                     .mil-map-image {
//                         margin: 0 auto;
//                     }

//                     .mil-logo-globe-wrapper {
//                         margin-top: 30px;
//                     }
//                 }

//                 @media (max-width: 768px) {
//                     .mil-footer {
//                         padding: 40px 20px;
//                     }

//                     .mil-footer-bottom {
//                         font-size: 14px;
//                     }
//                 }

//                 @media (max-width: 576px) {
//                     .mil-footer-navigation li {
//                         display: block;
//                         margin: 10px 0;
//                     }

//                     .mil-suptitle {
//                         text-align: center;
//                     }

//                     .mil-map-image {
//                         width: 120px;
//                     }

//                     .mil-footer-bottom {
//                         font-size: 12px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default DefaultFooter;

//     "use client";

// import Link from "next/link";
// import AppData from "@data/app.json";
// import { usePathname } from "next/navigation";

// const DefaultFooter = () => {
//     const asPath = usePathname();

//     return (
//         <>
//             {/* footer */}
//             <footer className="mil-footer">
//                 <div className="mil-overlay" />
//                 <div className="container mil-p-120-90">
//                     <div className="mil-background-grid" />

//                     <div className="row align-items-start gy-4">
//                         {/* Navigation Section */}
//                         <div className="col-lg-8">
//                             <div className="row gy-4">
//                                 <div className="col-xl-3 col-md-6 col-12 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         International Headquarter
//                                     </span>
//                                     <img
//                                         src="/img/maps/Dubai.webp"
//                                         alt="Dubai Map"
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         United Arab Emirates<br />
//                                         Office E, 23rd Floor,<br />
//                                         Gold Tower, J.L.T,<br />
//                                         Dubai
//                                     </p>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Operation & Support Office
//                                     </span>
//                                     <img
//                                         src="/img/maps/Pakistan.webp"
//                                         alt="Karachi Map"
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         Pakistan<br />
//                                         Suite # 403, 4th Floor Beaumont Plaza,<br />
//                                         Karachi
//                                     </p>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Services
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cybersecurity Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Devsecops Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Information Security</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Managed Services</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cloud Hosting</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Licenses</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Avocado Hosting</h6>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12 ">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Quick Links
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Product</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Who We Are</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Contact</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Careers</h6>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Logo & Globe */}
//                         <div className="col-lg-4 text-center">
//                             <div className="mil-logo-globe-wrapper">
//                                 <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
//                                     <img
//                                         src={AppData.footer.logo.image}
//                                         alt={AppData.footer.logo.alt}
//                                         className="mil-logo-image"
//                                     />
//                                 </Link>
//                                 <div className="mil-globe">
//                                     <img
//                                         src="/img/logo/globe.gif"
//                                         alt="Rotating Globe"
//                                         className="mil-globe-image"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Section */}
//                 <div className="container-fluid">
//                     <div className="mil-footer-bottom">
//                         <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
//                         <ul className="mil-light-soft mil-mb-15">
//                             {AppData.social.map((item, key) => (
//                                 <li key={`footer-social-item-${key}`}>
//                                     <a href={item.link} target="_blank" rel="noopener noreferrer">
//                                         {item.title}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </footer>

//             {/* Footer Styles */}
//             <style jsx>{`
//                 .mil-footer {
//                     background-color: #17283E;
//                     position: relative;
//                     color: #ffffff;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                     background: rgba(0,0,0,.5);
//                 }

//                 .container {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .row {
//                     // margin-bottom: 40px;
//                 }

//                 .col {
//                     // margin-top: 15px;
//                     // margin-bottom: 15px;
//                 }

//                 .mil-map-image {
//                     display: block;
//                     max-width: 150px;
//                     // margin: 15px auto 25px;
//                 }

//                 .mil-suptitle {
//                     font-size: 14px;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                     // margin-bottom: 10px;
//                 }

//                 .mil-text-sm {
//                     font-size: 14px;
//                     color: #ccc;
//                     line-height: 1.6;
//                 }

//                 .mil-logo-image {
//                     // margin-bottom: 20px;
//                     width: 180px;
//                 }

//                 .mil-globe-image {
//                     width: 320px;
//                     height: auto;
//                 }

//                 .mil-footer-bottom {
//                     text-align: center;
//                     padding-top: 30px;
//                     border-top: 1px solid rgba(255, 255, 255, 0.2);
//                 }

//                 /* Responsive Styles */
//                 @media (max-width: 992px) {
//                     .mil-footer-navigation ul {
//                         text-align: center;
//                     }

//                     .mil-logo-globe-wrapper {
//                         margin-top: 30px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default DefaultFooter;



// "use client";

// import Link from "next/link";
// import AppData from "@data/app.json";
// import { usePathname } from "next/navigation";

// const DefaultFooter = () => {
//     const asPath = usePathname();

//     return (
//         <>
//             {/* Footer */}
//             <footer className="mil-footer ">
//                 <div className="mil-overlay" />
//                 <div className="container mil-p-120-90">
//                     <div className="mil-background-grid" />

//                     <div className="row align-items-start gy-4">
//                         {/* Navigation Section */}
//                         <div className="col-lg-8">
//                             <div className="row gy-4">
//                                 <div className="col-xl-3 col-md-6 col-12">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         International Headquarter
//                                     </span>
//                                     <img
//                                         src="/img/maps/Dubai.webp"
//                                         alt="Dubai Map"
//                                         className="mil-map-image"
//                                         style={{marginTop:"-25px"}}
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         United Arab Emirates<br />
//                                         Office E, 23rd Floor,<br />
//                                         Gold Tower, J.L.T,<br />
//                                         Dubai
//                                     </p>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Operation & Support Office
//                                     </span>
//                                     <img
//                                         src="/img/maps/Pakistan.png"
//                                         alt="Karachi Map"
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         Pakistan<br />
//                                         Suite # 403, 4th Floor Beaumont Plaza,<br />
//                                         Karachi
//                                     </p>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Services
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cybersecurity Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Devsecops Solutions</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Information Security</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Managed Services</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Avocado Hosting</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cloud Hosting</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Licenses</h6>
//                                 </div>

//                                 <div className="col-xl-3 col-md-6 col-12">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Quick Links
//                                     </span>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Product</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Who We Are</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Contact</h6>
//                                     <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Careers</h6>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Logo & Globe */}
//                         <div className="col-lg-4 text-center">
//                             <div className="mil-logo-globe-wrapper">
//                                 <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
//                                     <img
//                                         src={AppData.footer.logo.image}
//                                         alt={AppData.footer.logo.alt}
//                                         className="mil-logo-image"
//                                     />
//                                 </Link>
//                                 <div className="mil-globe">
//                                     <img
//                                         src="/img/logo/globe.gif"
//                                         alt="Rotating Globe"
//                                         className="mil-globe-image"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Section */}
//                 <div className="container-fluid">
//                     <div className="mil-footer-bottom">
//                         <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
//                         <ul className="mil-light-soft mil-mb-15">
//                             {AppData.social.map((item, key) => (
//                                 <li key={`footer-social-item-${key}`}>
//                                     <a href={item.link} target="_blank" rel="noopener noreferrer">
//                                         {item.title}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </footer>

//             {/* Footer Styles */}
//             <style jsx>{`
//                 .mil-footer {
//                     background-color: #17283E;
//                     position: relative;
//                     color: #ffffff;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     z-index: 0;
//                     background: rgba(0, 0, 0, 0.5);
//                 }

//                 .container {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-map-image {
//                     display: block;
//                     max-width: 150px;
//                 }

//                 .mil-suptitle {
//                     font-size: 14px;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                 }

//                 .mil-text-sm {
//                     font-size: 14px;
//                     color: #ccc;
//                     line-height: 1.6;
//                 }

//                 .mil-logo-globe-wrapper {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     justify-content: center;
//                     text-align: center;
//                     gap: 20px; /* Space between the logo and the globe */
//                 }

//                 .mil-footer-logo {
//                     margin-bottom: 10px;
//                 }

//                 .mil-logo-image {
//                     width: 180px;
//                 }

//                 .mil-globe-image {
//                     width: 250px;
//                     height: auto;
//                 }

//                 .mil-footer-bottom {
//                     text-align: center;
//                     padding-top: 30px;
//                     border-top: 1px solid rgba(255, 255, 255, 0.2);
//                 }

//                 /* Responsive Styles */
//                 @media (max-width: 992px) {
//                     .mil-logo-globe-wrapper {
//                         margin-top: 20px;
//                     }

//                     .mil-globe-image {
//                         width: 200px; /* Adjust size for smaller screens */
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default DefaultFooter;



"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
    const asPath = usePathname();

    return (
        <>
            {/* Footer */}
            <footer className="mil-footer">
                {/* White Line */}
                <div className="mil-footer-top-line" />

                <div className="mil-overlay" />
                <div className="container mil-p-120-90">
                    <div className="mil-background-grid" />

                    <div className="row align-items-start gy-4">
                        {/* Navigation Section */}
                        <div className="col-lg-8">
                            <div className="row gy-4">
                                <div className="col-xl-3 col-md-6 col-12">
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        International Headquarter
                                    </span>
                                    <img
                                        src="/img/maps/Dubai.webp"
                                        alt="Dubai Map"
                                        className="mil-map-image"
                                        style={{ marginTop: "-25px" }}
                                    />
                                    <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                                        United Arab Emirates<br />
                                        Office E, 23rd Floor,<br />
                                        Gold Tower, J.L.T,<br />
                                        Dubai
                                    </p>
                                </div>

                                <div className="col-xl-3 col-md-6 col-12">
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        Operation & Support Office
                                    </span>
                                    <img
                                        src="/img/maps/Pakistan.png"
                                        alt="Karachi Map"
                                        className="mil-map-image"
                                    />
                                    <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                                        Pakistan<br />
                                        Suite # 403, 4th Floor Beaumont Plaza,<br />
                                        Karachi
                                    </p>
                                </div>

                                <div className="col-xl-3 col-md-6 col-12">
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        Services
                                    </span>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cybersecurity Solutions</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Devsecops Solutions</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Information Security</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Managed Services</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Avocado Hosting</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Cloud Hosting</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Licenses</h6>
                                </div>

                                <div className="col-xl-3 col-md-6 col-12">
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        Quick Links
                                    </span>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Product</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Who We Are</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30" href="https://www.linkedin.com/company/vconn-private-limited/jobs/">Contact</h6>
                                    <h6 className="mil-text-sm mil-up mil-light-soft mil-mb-30">Careers</h6>
                                </div>
                            </div>
                        </div>

                        {/* Footer Logo & Globe */}
                        <div className="col-lg-4 text-center">
                            <div className="mil-logo-globe-wrapper">
                                <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                                    <img
                                        src={AppData.footer.logo.image}
                                        alt={AppData.footer.logo.alt}
                                        className="mil-logo-image"
                                    />
                                </Link>
                                <div className="mil-globe">
                                    <img
                                        src="/img/logo/globe2.gif"
                                        alt="Rotating Globe"
                                        className="mil-globe-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="container-fluid">
                    <div className="mil-footer-bottom">
                        <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                        <ul className="mil-light-soft mil-mb-15">
                            {AppData.social.map((item, key) => (
                                <li key={`footer-social-item-${key}`}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Footer Styles */}
            <style jsx>{`
                .mil-footer {
                    background-color: #17283E;
                    position: relative;
                    color: #ffffff;
                }

                .mil-footer-top-line {
                    width: 100%;
                    height: 1px;
                    background-color: #ffffff;
                }

                .mil-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 0;
                    background: rgba(0, 0, 0, 0.5);
                }

                .container {
                    position: relative;
                    z-index: 1;
                }

                .mil-map-image {
                    display: block;
                    max-width: 150px;
                }

                .mil-suptitle {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .mil-text-sm {
                    font-size: 14px;
                    color: #ccc;
                    line-height: 1.6;
                }

                .mil-logo-globe-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 20px; /* Space between the logo and the globe */
                }

                .mil-footer-logo {
                    margin-bottom: 10px;
                }

                .mil-logo-image {
                    width: 180px;
                }

                .mil-globe-image {
                    width: 250px;
                    height: auto;
                }

                .mil-footer-bottom {
                    text-align: center;
                    padding-top: 30px;
                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                }

                /* Responsive Styles */
                @media (max-width: 992px) {
                    .mil-logo-globe-wrapper {
                        margin-top: 20px;
                    }

                    .mil-globe-image {
                        width: 200px; /* Adjust size for smaller screens */
                    }
                }
            `}</style>
        </>
    );
};

export default DefaultFooter;
