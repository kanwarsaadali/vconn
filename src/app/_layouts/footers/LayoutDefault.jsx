// // "use client";

// // import Link from "next/link";
// // import AppData from "@data/app.json";
// // import { usePathname } from 'next/navigation';

// // const DefaultFooter = () => {
// //   const asPath = usePathname();

// //   return (
// //     <>
// //     {/* footer */}
// //     <footer className="mil-relative">
// //         <img src="/img/photo/1light.png" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

// //         <div className="mil-overlay" />
// //         <div className="container mil-p-120-90">
// //             <div className="mil-background-grid" />
// // b 
// //             <div className="row align-items-end">
// //                 <div className="col-lg-8">
// //                     <div className="row">
// //                         <div className="col-12">

// //                             <div className="mil-footer-navigation mil-up mil-mb-90">
// //                                 <nav>
// //                                     <ul>
// //                                         {AppData.footer.menu.map((item, key) => (
// //                                         <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
// //                                             <Link href={item.link}>{item.label}</Link>
// //                                         </li>
// //                                         ))}
// //                                     </ul>
// //                                 </nav>
// //                             </div>

// //                         </div>
// //                         <div className="col-md-6 col-lg-6 col-xl-3">
// //                             <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Wills Point</span>
// //                             <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">8619 S Wolcott Avenue <br/>Floor 202 <br/>Chicago, IL 60620 <br/>(773) 238 - 7162</p>
// //                         </div>
// //                         <div className="col-md-6 col-lg-6 col-xl-3">
// //                             <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Chicago</span>
// //                             <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
// //                         </div>
// //                         <div className="col-md-6 col-lg-6 col-xl-3">
// //                             <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Harriman</span>
// //                             <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">5 Harriman Woods Dr <br/>Suite 702 <br/>New York, NY 10926 <br/>(570) 253 - 2853</p>
// //                         </div>
// //                         <div className="col-md-6 col-lg-6 col-xl-3">
// //                             <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Largo</span>
// //                             <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">1071 Donegan Rd <br/>Suite 1300 <br/>Florida, FL 33771 <br/>(727) 223 - 5371</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="col-lg-4">
// //                     <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
// //                         <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "180px"}} />
// //                     </Link>
// //                 </div>
// //             </div>
// //         </div>
// //         <div className="container-fluid">

// //             <div className="mil-footer-bottom">
// //                 <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
// //                 <ul className="mil-light-soft mil-mb-15">
// //                     {AppData.social.map((item, key) => (
// //                     <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
// //                     ))}
// //                 </ul>
// //                 <ul className="mil-light-soft mil-mb-15">
// //                     {/* <li><a href="#.">Our App</a></li>
// //                     <li><a href="#.">Sitemap</a></li> */}
// //                 </ul>
// //             </div>

// //         </div>
// //     </footer>
// //     {/* footer end */}
// //     </>
// //   );
// // };
// // export default DefaultFooter;


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

//                     <div className="row align-items-end">
//                         <div className="col-lg-8">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="mil-footer-navigation mil-up mil-mb-90">
//                                         <nav>
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
//                                         </nav>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                     International Headquarte
//                                     <img></img>
//                                     </span>
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                     Dubai, United Arab Emirates<br />
//                                     Office E, 23rd Floor, Gold Tower, <br />
//                                     Jumeirah Lake Towers   <br />
//                                     </p>
//                                 </div>
//                                 <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                     Operation & Support Office
//                                     </span>
//                                     <img></img>
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                     Karachi, Pakistan  <br />
//                                         Suite # 403, 4th Floor Beaumont Plaza, <br />
//                                         Beaumont Road <br />
//                                     </p>
//                                 </div>
//                                 {/* <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Harriman
//                                     </span>
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         5 Harriman Woods Dr <br />
//                                         Suite 702 <br />
//                                         New York, NY 10926 <br />
//                                         (570) 253 - 2853
//                                     </p>
//                                 </div>
//                                 <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Largo
//                                     </span>
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         1071 Donegan Rd <br />
//                                         Suite 1300 <br />
//                                         Florida, FL 33771 <br />
//                                         (727) 223 - 5371
//                                     </p>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className="col-lg-4">
//                             <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
//                                 <img
//                                     src={AppData.footer.logo.image}
//                                     alt={AppData.footer.logo.alt}
//                                     style={{ width: "180px" }}
//                                 />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-fluid">
//                     <div className="mil-footer-bottom">
//                         <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
//                         <ul className="mil-light-soft mil-mb-15">
//                             {AppData.social.map((item, key) => (
//                                 <li key={`footer-social-item-${key}`}>
//                                     <a href={item.link} target="_blank">
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
//                     background-color: #17283E; /* Set your background color */
//                     position: relative;
//                     padding: 90px 0;
//                     color: #ffffff;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: rgba(0, 0, 0, 0.5); /* Optional overlay effect */
//                     z-index: 0;
//                 }

//                 .container {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-footer-navigation ul {
//                     list-style: none;
//                     padding: 0;
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
//                     color: #f0c040; /* Highlight color for active links */
//                 }

//                 .mil-footer-bottom {
//                     text-align: center;
//                     margin-top: 30px;
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
//             {/* footer */}
//             <footer className="mil-footer">
//                 <div className="mil-overlay" />
//                 <div className="container mil-p-120-90">
//                     <div className="mil-background-grid" />

//                     <div className="row align-items-end">
//                         <div className="col-lg-8">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="mil-footer-navigation mil-up mil-mb-90">
//                                         <nav>
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
//                                         </nav>
//                                     </div>
//                                 </div>

//                                 {/* Dubai Section */}
//                                 <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         International Headquarter
//                                     </span>
//                                     <img
//                                         src="/img/maps/Dubai.png" // Replace with the actual path to your Dubai map image
//                                         alt="Dubai Map"
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         Dubai, United Arab Emirates<br />
//                                         Office E, 23rd Floor, Gold Tower,<br />
//                                         Jumeirah Lake Towers
//                                     </p>
//                                 </div>

//                                 {/* Karachi Section */}
//                                 <div className="col-md-6 col-lg-6 col-xl-3">
//                                     <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
//                                         Operation & Support Office
//                                     </span>
//                                     <img
//                                         src="/img/maps/Pakistan.png" // Replace with the actual path to your Karachi map image
//                                         alt="Karachi Map"
//                                         className="mil-map-image"
//                                     />
//                                     <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
//                                         Karachi, Pakistan<br />
//                                         Suite # 403, 4th Floor Beaumont Plaza,<br />
//                                         Beaumont Road
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4">
//                             <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
//                                 <img
//                                     src={AppData.footer.logo.image}
//                                     alt={AppData.footer.logo.alt}
//                                     style={{ width: "180px" }}
//                                 />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-fluid">
//                     <div className="mil-footer-bottom">
//                         <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
//                         <ul className="mil-light-soft mil-mb-15">
//                             {AppData.social.map((item, key) => (
//                                 <li key={`footer-social-item-${key}`}>
//                                     <a href={item.link} target="_blank">
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
//                     background-color: #17283E; /* Set your background color */
//                     position: relative;
//                     padding: 90px 0;
//                     color: #ffffff;
//                 }

//                 .mil-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: rgba(0, 0, 0, 0.5); /* Optional overlay effect */
//                     z-index: 0;
//                 }

//                 .container {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 .mil-footer-navigation ul {
//                     list-style: none;
//                     padding: 0;
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
//                     color: #f0c040; /* Highlight color for active links */
//                 }

//                 .mil-map-image {
//                     width: 100%; /* Make image responsive */
//                     max-width: 200px; /* Optional: limit max width */
//                     margin-bottom: 15px;
//                 }

//                 .mil-footer-bottom {
//                     text-align: center;
//                     margin-top: 30px;
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
            {/* footer */}
            <footer className="mil-footer">
                <div className="mil-overlay" />
                <div className="container mil-p-120-90">
                    <div className="mil-background-grid" />

                    <div className="row align-items-end">
                        {/* Navigation Section */}
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                <div className="mil-footer-navigation mil-up mil-mb-90" style={{marginTop:"-90px"}}>
                                        <nav>
                                            <ul>
                                                {AppData.footer.menu.map((item, key) => (
                                                    <li
                                                        key={`footer-menu-item-${key}`}
                                                        className={
                                                            (asPath.indexOf(item.link) !== -1 &&
                                                                item.link !== "/") ||
                                                            asPath === item.link
                                                                ? "mil-active"
                                                                : ""
                                                        }
                                                    >
                                                        <Link href={item.link}>{item.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* Dubai Section */}
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        International Headquarter
                                    </span>
                                    <img
                                        src="/img/maps/Dubai.webp" // Replace with the actual path to your Dubai map image
                                        alt="Dubai Map"
                                        className="mil-map-image"
                                        style={{marginTop:"-25px"}} />
                                    <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                                        United Arab Emirates<br />
                                        Office E, 23rd Floor,<br />
                                        Gold Tower,J.L.K, <br/>
                                        Dubai
                                    </p>
                                </div>

                                {/* Karachi Section */}
                                <div className="col-md-6 col-lg-6 col-xl-3" style={{ right:"80px"}}>
                                    <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                                        Operation & Support Office
                                    </span>
                                    <img
                                        src="/img/maps/Pakistan.webp" // Replace with the actual path to your Karachi map image
                                        alt="Karachi Map"
                                        className="mil-map-image"
                                     />
                                    <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                                        Pakistan<br />
                                        Suite # 403, 4th Floor Beaumont Plaza,<br />
                                        Karachi
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Logo */}
                        <div className="col-lg-4 text-center">
                            <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                                <img
                                    src={AppData.footer.logo.image}
                                    alt={AppData.footer.logo.alt}
                                    style={{ width: "180px" }}
                                />
                            </Link>
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
            {/* footer end */}

            {/* Footer Styles */}
            <style jsx>{`
                .mil-footer {
                    background-color: #17283E;
                    position: relative;
                    // padding: 90px 0;
                    color: #ffffff;

                    }

                .mil-overlay {
                    // position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 0;
                }

                .container {
                    position: relative;
                    z-index: 1;
                }

                .mil-footer-navigation ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: left;
                }

                .mil-footer-navigation li {
                    display: inline-block;
                    margin-right: 15px;
                }

                .mil-footer-navigation li a {
                    color: #ffffff;
                    text-decoration: none;
                }

                .mil-footer-navigation .mil-active a {
                    color: #f0c040; /* Highlight color for active links */
                }

                .mil-map-image {
                    display: block;
                    width: auto;
                    max-width: 150px;
                    margin: 15px auto;
                }

                .mil-suptitle {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                    display: block;
                }

                .mil-text-sm {
                    font-size: 14px;
                    color: #ccc;
                    line-height: 1.6;
                    margin: 0 auto;
                }

                .mil-footer-logo img {
                    width: 150px;
                }

                .mil-footer-bottom {
                    text-align: center;
                    padding-top: 30px;
                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                }

                .mil-footer-bottom ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: inline-block;
                }

                .mil-footer-bottom li {
                    display: inline;
                    margin: 0 10px;
                }

                .mil-footer-bottom a {
                    color: #ffffff;
                    text-decoration: none;
                }

                @media (min-width: 768px) {
                    .mil-map-image {
                        margin: 15px auto 15px 0;
                    }
                }
            `}</style>
        </>
    );
};

export default DefaultFooter;
