import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style.css";
import { render, router } from "./lib/index";
import About from "./pages/about";
import AdminProjects from "./pages/admin/projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import AddProject from "./pages/admin/add-project";
import EditProject from "./pages/admin/edit-project";
const app = document.querySelector("#app");

router.on("/", () => render(Home, app));
router.on("/about", () => render(About, app));
router.on("/blog", () => render(Blog, app));
router.on("/contact", () => render(Contact, app));
router.on("/projects", () => render(Projects, app));
router.on("/project-detail/:id", (params) =>
  render(() => ProjectDetail(params.data.id), app)
);
router.on("/admin/projects", () => render(AdminProjects, app));
router.on("/admin/add-project", () => render(AddProject, app));
router.on("/admin/edit-project/:id", (params) =>
  render(() => EditProject(params.data.id), app)
);
router.notFound(() => console.log("Not found this Page!"));
router.resolve();
