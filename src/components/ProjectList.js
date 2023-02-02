import ProjectItem from "./ProjectItem";
const ProjectList = ({ projects }) => {
  return `<div class="mt-2 mb-2">${projects
    .map(
      (project) => `<div>
    <ul>
    <li class="mt-1 mb-1">
    ${ProjectItem({ project })}
    </li>
    </ul>
    </div>`
    )
    .join("")}</div>`;
};

export default ProjectList;
