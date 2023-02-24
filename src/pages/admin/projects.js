// import { projects } from "@/data/Projects";
import { useEffect, useState } from "../../lib";
import axios from "axios";
import { getProjects, deleteProject } from "@/api/project";
const AdminProjects = () => {
  /**
   *
   * Bước 1: Khởi tạo state
   * Bước 2: render HTML
   * Bước 3: Chạy vào hàm useEffect
   *    - Lấy ra các nút remove
   *    - Thêm sự kiện click cho các nút remove
   */

  const [projects, setProject] = useState([]);
  useEffect(() => {
    /**LOCAL STORAGE
     const projects = JSON.parse(localStorage.getItem("projects")) || [];
     setProject(projects);
   ------------------------------------------------------------------------
     fetch API
     fetch("http://localhost:3000/projects")
     .then((response) => response.json())
     .then((projects) => setProject(projects));
    */
    // axios
    //   .get("http://localhost:3000/projects")
    //   .then(({ data }) => setProject(data));
    getProjects()
      .then(({ data }) => setProject(data))
      .catch((error) => console.log(error));
  }, []); // điều kiện để gọi lại useEffect

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const comfirmdel = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (comfirmdel) {
          deleteProject(id)
            .then(() => {
              //reRender
              const newProjects = projects.filter(
                (project) => project.id !== Number(id)
              );
              setProject(newProjects);
            })
            .catch((error) => console.log(error));
        }
      });
    }
  });
  return `<div class="container">
  <h1 class="tw-font-bold tw-text-2xl tw-my-3">Quản lý dự án</h1>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên dự án</th>
        <th>Người thực hiện</th>
        <th></th>
      </tr>
    </thead>
    ${projects
      .map(
        (project) => `<tbody>
    <tr>
      <td>${project.id}</td>
      <td><a href="/project-detail/${project.id}" class="tw-text-base tw-font-semibold tw-no-underline tw-text-[#222] tw-transition-all hover:tw-text-[#fd4312]">${project.name}</a></td>
      <td><a href="/project-detail/${project.id}" class="tw-text-base tw-font-semibold tw-no-underline tw-text-[#222] tw-transition-all hover:tw-text-[#fd4312]">${project.author}</a></td>
      <td>
      <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
      <a href="/admin/edit-project/${project.id}" class="btn btn-warning">Sửa</a>
      </td>
    </tr>
  </tbody>`
      )
      .join("")}
  </table>
<div>
<a href="/admin/add-project" class="btn btn-primary">Thêm dự án</a>
<a href="/" class="btn btn-secondary">Về trang chủ</a>
</div>
</div>`;
};

export default AdminProjects;
