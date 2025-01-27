import projectsData1 from '@data/projects/project-1.json';
import projectsData2 from '@data/projects/project-2.json';
import projectsData3 from '@data/projects/project-3.json';
import projectsData4 from '@data/projects/project-4.json';


export function getSortedProjectsDataJson() {
  // Add unique IDs to each project (if not already present)
  let arr=[projectsData1,projectsData2,projectsData3,projectsData4]
  const allData = arr?.map((project, index) => ({
    id: project.id || index.toString(), // Use existing `id` or fallback to index as a string
    ...project,
  }));

  // Sort projects by date (assuming date is in a format like "2023-05-24")
  return allData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB; // Sort in ascending order
  });
}