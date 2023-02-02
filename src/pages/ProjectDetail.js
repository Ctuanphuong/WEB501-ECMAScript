import { projects } from "../data/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ProjectDetail = (id) => {
  const currentProject = projects.find((project) => project.id === Number(id));
  if (!currentProject) console.log("Project not found!");
  return `<div>
  ${Header()}</div>
  <h1 class="text-2xl font-bold mt-5">${currentProject.name}</h1>
  <div></div>
  ${Footer()}
  `;
};

export default ProjectDetail;
