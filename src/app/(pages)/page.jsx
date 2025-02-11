"use client";
import React, { Suspense,useState,useEffect } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Data from "@data/sections/hero-1.json";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

// import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsDataJson } from "@library/projectjson";
// import ProjectData from "@data/projects/project-1.json";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestProjects";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";
import CoresSection from "@components/sections/Cores";
// import ClientSlider from '@components/sliders/client';

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const DevopsSlider = dynamic( () => import("@components/sliders/Devops"), { ssr: false } );
const DevopsecopsSlider = dynamic( () => import("@components/sliders/Devsecops"), { ssr: false } );
const CybersecuritySlider = dynamic( () => import("@components/sliders/Cybersecurity"), { ssr: false } );



const ClientSlider = dynamic( () => import("@components/sliders/Client"), { ssr: false } );



// export const metadata = {
//   title: {
// 		default: AppData.settings.siteName,
// 		template: "%s | " + AppData.settings.siteName,
// 	},
//   description: AppData.settings.siteDescription,
// }

// export async function getStaticProps() {
//   // const projects = getSortedProjectsData();
//   const projects = [];

//   return {
//     props: {
//       projects,
//     },
//   };
// }
 function Home1({projects}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [projectslts, setprojectslts] = useState([]);

  // const posts = await getAllPosts();
  

      useEffect(() => {
  
          const timeout = setTimeout(() => {
              if (!videoLoaded) {
                  console.warn("Fallback triggered, setting videoLoaded to true");
                  setVideoLoaded(true);
              }
          }, 13000); // Adjust timeout duration as needed
      
          return () => clearTimeout(timeout);
      }, []);


      useEffect(() => {
        const fetchData = async () => {
          let arr = await getSortedProjectsDataJson();
        // console.log("ProjectData",arr)

          setprojectslts(arr);
        };
      
        fetchData();

      }, []);
      
  

  return (
    <>
    {!videoLoaded ? <div className="d-flex justify-content-center align-items-center vh-100">

      <img src="/img/covers/loader.gif"  alt="image" />

      


    </div> :  <>

      <Header layout={"default"} />


      <HeroOneSection videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
      <ClientSlider/>
      {/* <ClientSlider/>
      // <PartnersSlider /> */}
      {/* <PartnersSlider /> */}
      <AboutSection />
      <AdvantagesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projectslts} />
      </Suspense>
      <IdeasSection /> 

      {/* <div style={{backgroundColor:"rgb(248, 248, 248)"}} className="py-5 customSlider"> */}
      
           {/* <CybersecuritySlider/> */}
{/*  
      </div> */}


      {/* <PartnersSlider /> */}

      {/* <ServicesSection /> */}
      {/* <AdvantagesSection /> */}
      {/* <ClientSlider/> */}
      {/* <PartnersSlider /> */}

      <HowWeWorkSection  />
      <DevopsSlider/>
      <DevopsecopsSlider/>
      {/* <IdeasSection />  */}

      {/* <ClientSlider/> */}
      {/* <PartnersSlider /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense> */}


      {/* <PartnersSlider />  */}


      {/* <CoresSection /> */}
    <Footer layout={"default"} />

    </>   }
    
    
    </>
  );
};
export default Home1;

