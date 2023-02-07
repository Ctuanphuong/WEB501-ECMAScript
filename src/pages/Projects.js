import Header from "../components/Header";
import Footer from "../components/Footer";
// import { projects } from "../data/Projects";
import ProjectList from "../components/ProjectList";
const Projects = () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  return ` <div>
  ${Header()}
  <div>
  <div class="container">
  <h1 class="tw-text-2xl tw-font-bold tw-mt-5">Projects Page</h1>
  </div>
${ProjectList({ projects })}
  </div>
  ${Footer()}
  </div>`;
};

export default Projects;
