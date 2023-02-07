// import { projects } from "@/data/Projects";
import { useEffect, useState } from "../../lib";

const AdminProjects = () => {
  /**
   *
   * Bước 1: Khởi tạo state
   * Bước 2: render HTML
   * Bước 3: Chạy vào hàm useEffect
   *    - Lấy ra các nút remove
   *    - Thêm sự kiện click cho các nút remove
   */

  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://reqres.in/api/users?page=2")
    //   .then((response) => response.json())
    //   .then(({ data }) => console.log(data));

    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    setData(projects);
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const newData = data.filter((project) => project.id != id);
        setData(newData);
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
    ${data
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
