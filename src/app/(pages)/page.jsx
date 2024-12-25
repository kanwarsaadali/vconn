import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

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


export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      <ClientSlider/>
      {/* <ClientSlider/>
      // <PartnersSlider /> */}
      {/* <PartnersSlider /> */}
      <AboutSection />
      <AdvantagesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <div style={{backgroundColor:"rgb(248, 248, 248)"}} className="py-5 customSlider">
      <DevopsSlider/>
      <DevopsecopsSlider/>
      <CybersecuritySlider/>
      </div>

      {/* <PartnersSlider /> */}

      {/* <ServicesSection /> */}
      {/* <AdvantagesSection /> */}
      {/* <ClientSlider/> */}
      {/* <PartnersSlider /> */}
      <HowWeWorkSection />
      <IdeasSection />

      {/* <ClientSlider/> */}
      {/* <PartnersSlider /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense> */}
      <PartnersSlider />
      {/* <CoresSection /> */}
    </>
  );
};
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}