import { router, useEffect } from "@/lib";

const EditProject = (id) => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(projects);
  const currentProject = projects.find((project) => project.id === Number(id));
  console.log(currentProject);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const projectName = document.querySelector("#project-name");
    const projectAuthor = document.querySelector("#project-author");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = {
        id: currentProject.id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      const newProjects = projects.map((project) => {
        return project.id == newProject.id ? newProject : project;
      });
      localStorage.setItem("projects", JSON.stringify(newProjects));
      router.navigate("/admin/projects");
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
   value="${currentProject.name}"
        />
      </div>
      <div class="form-group mb-2">
      <input
        type="text"
        class="form-control"
        id= "project-author"
        placeholder="Nhập tên người thực hiện..."
        value="${currentProject.author}"
      />
    </div>
      <button class="btn btn-primary mb-2">Sửa</button>
    </form>
  </div>
</div>`;
};

export default EditProject;
