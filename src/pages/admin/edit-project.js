import { getProject } from "@/api/project";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
import { updateProject } from "@/api/project";
const EditProject = (id) => {
  /** LOCAL STORAGE
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(projects);
  const currentProject = projects.find((project) => project.id === Number(id));
  console.log(currentProject);
  */
  const [project, setProject] = useState({});
  useEffect(() => {
    /** FETCH API 
    fetch(`http://localhost:3000/projects/${id}`)
    .then((response) => response.json())
    .then((data) => {
    setProject(data);
   });
    */

    /**  axios
       .get(`http://localhost:3000/projects/${id}`)
       .then(({ data }) => setProject(data));
    */
    getProject(id)
      .then(({ data }) => setProject(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const projectName = document.querySelector("#project-name");
    const projectAuthor = document.querySelector("#project-author");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = {
        id: id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      /** FETCH API 
      fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
       }).then(() =>
      redirect sang admin/projects
      router.navigate("/admin/projects")
       );

      /** LOCAL STORAGE
       *   const newProject = {
        id: currentProject.id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      const newProjects = projects.map((project) => {
        return project.id == newProject.id ? newProject : project;
      });
      localStorage.setItem("projects", JSON.stringify(newProjects));
      router.navigate("/admin/projects");
      */

      /**axios
        .put(`http://localhost:3000/projects/${id}`, newProject)
        .then(() => router.navigate("/admin/projects"));
      */
      updateProject(newProject)
        .then(() => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
    });
  });
  return `<div class="container mt-3">
  <div>
    <h1 class="tw-font-bold tw-text-2xl mb-2">Sửa dự án</h1>
    <form class="form-inline" id="form-edit">
      <div class="form-group mb-2">
        <input
          type="text"
          class="form-control"
          id="project-name"
          placeholder="Nhập tên dự án..."
   value="${project.name}"
        />
      </div>
      <div class="form-group mb-2">
      <input
        type="text"
        class="form-control"
        id= "project-author"
        placeholder="Nhập tên người thực hiện..."
        value="${project.author}"
      />
    </div>
      <button class="btn btn-primary mb-2">Sửa</button>
    </form>
  </div>
</div>`;
};

export default EditProject;
