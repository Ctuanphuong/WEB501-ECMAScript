import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/Projects";
import ProjectList from "../components/ProjectList";
const Projects = () => {
  return ` <div>
  ${Header()}
  <div>
  <h1 class="text-2xl font-bold mt-5">Projects Page</h1>
${ProjectList({ projects })}
  </div>
  ${Footer()}
  </div>`;
};

export default Projects;
