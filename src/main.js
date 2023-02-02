import "../style.css";
import { render, router } from "./lib/index";
import Home from "./pages/Home";
import About from "./pages/about";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

router.on("/", () => render(Home, app));
router.on("/about", () => render(About, app));
router.on("/blog", () => render(Blog, app));
router.on("/contact", () => render(Contact, app));
router.on("/projects", () => render(Projects, app));
router.on("/project-detail/:id", (params) =>
  render(ProjectDetail(params.data.id), app)
);
router.notFound(() => console.log("Not found this Page!"));
router.resolve();
