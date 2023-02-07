import { router, useEffect } from "../../lib";
// import { projects } from "../../data/Projects";
const AddProject = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    const projectAuthor = document.querySelector("#project-author");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //disabled reload
      const project = {
        id: projects.length + 1,
        name: projectName.value,
        author: projectAuthor.value,
      };
      console.log(projects);
      projects.push(project);
      localStorage.setItem("projects", JSON.stringify(projects));
      // console.log(projects);
      router.navigate("/admin/projects");
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
