// // import '@styles/scss/style.scss';
// // import "./globals.css";

// // import "@styles/css/plugins/bootstrap-grid.css";
// // import "@styles/css/plugins/swiper.min.css";
// // import "@styles/css/plugins/magnific-popup.css";

// // import { register } from "swiper/element/bundle";
// // // register Swiper custom elements
// // register();

// // import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

// // import AppData from "@data/app.json";

// // export const metadata = {
// //   title: {
// // 		default: AppData.settings.siteName,
// // 		template: "%s | " + AppData.settings.siteName,
// // 	},
// //   description: AppData.settings.siteDescription,
// // }

// // const Layouts = ({
// //   children
// // }) => {
// //   return (
// //     <html lang="en">
// //       <body>
// //         <div className="mil-wrapper">
// //           {children}

// //           <ScrollbarProgress />
// //         </div>
// //       </body>
// //     </html>
// //   );
// // };
// // export default Layouts;


// import '@styles/scss/style.scss';
// import "./globals.css";

// import "@styles/css/plugins/bootstrap-grid.css";
// import "@styles/css/plugins/swiper.min.css";
// import "@styles/css/plugins/magnific-popup.css";

// import { register } from "swiper/element/bundle";
// register();

// import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
// import AppData from "@data/app.json";

// export const metadata = {
//   title: {
//     default: AppData.settings.siteName,
//     template: "%s | " + AppData.settings.siteName,
//   },
//   description: AppData.settings.siteDescription,
//   icons: {
//     icon: "/favicon.ico", // Add favicon path
//   },
// };

// const Layouts = ({ children }) => {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <div className="mil-wrapper">
//           {children}
//           <ScrollbarProgress />
//         </div>
//       </body>
//     </html>
//   );
// };

// export default Layouts;


import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import AppData from "@data/app.json";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* ✅ Explicitly add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <div className="mil-wrapper">
          {children}
          <ScrollbarProgress />
        </div>
      </body>
    </html>
  );
};

export default Layouts;
