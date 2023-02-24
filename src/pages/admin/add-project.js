import { router, useEffect } from "../../lib";
// import { projects } from "../../data/Projects";
import axios from "axios";
import { addProjects } from "@/api/project";
const AddProject = () => {
  // LOCAL STORAGE
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    const projectAuthor = document.querySelector("#project-author");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //disabled reload
      const project = {
        name: projectName.value,
        author: projectAuthor.value,
      };

      /** LOCAL STORAGE
      console.log(project);
      projects.push(project);
      localStorage.setItem("projects", JSON.stringify(projects));
      console.log(projects);
      */

      /**FETCH API
     fetch("http://localhost:3000/projects", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(project),
     }).then(() => router.navigate("/admin/projects"));
    */
      /** axios
        .post("http://localhost:3000/projects", project)
        .then(() => router.navigate("/admin/projects"));
     */
      addProjects(project)
        .then(() => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
    });
  });
  return `<div class="container mt-3">
  <div>
    <h1 class="tw-font-bold tw-text-2xl mb-2">Thêm dự án</h1>
    <form class="form-inline" id="form-add">
      <div class="form-group mb-2">
        <input
          type="text"
          class="form-control"
          id="project-name"
          placeholder="Nhập tên dự án..."
        />
      </div>
      <div class="form-group mb-2">
      <input
        type="text"
        class="form-control"
        id= "project-author"
        placeholder="Nhập tên người thực hiện..."
      />
    </div>
      <button class="btn btn-primary mb-2 btn-add">Thêm</button>
    </form>
  </div>
</div>`;
};

export default AddProject;
