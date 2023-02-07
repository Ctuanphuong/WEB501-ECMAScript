import ProjectItem from "./ProjectItem";
const ProjectList = ({ projects }) => {
  return `<div class="container tw-mt-2 tw-mb-2">${projects
    .map(
      (project) => `<div>
    <ul class="p-0 m-0">
    <li class="tw-pt-2">
    ${ProjectItem({ project })}
    </li>
    </ul>
    </div>`
    )
    .join("")}</div>`;
};

export default ProjectList;
