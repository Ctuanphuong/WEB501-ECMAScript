// import { projects } from "../data/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "@/lib";
const ProjectDetail = (id) => {
  // const projects = JSON.parse(localStorage.getItem("projects"));
  const [projects, setProjects] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  // const currentProject = projects.find((project) => project.id === Number(id));
  // if (!currentProject) console.log("Project not found!");
  return `<div>
  ${Header()}</div>
  <div class="container">
  <h1 class="tw-text-2xl tw-font-bold tw-mt-5">${projects.name}</h1>
  </div>
  <div></div>
  ${Footer()}
  `;
};

export default ProjectDetail;
