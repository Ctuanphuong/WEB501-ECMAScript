const ProjectItem = ({ project }) => {
  return `<a href="/project-detail/${project.id}" class="font-semibold transition-all text-[#fd4312]  hover:text-[#03fc94]">${project.name}</a>`;
};

export default ProjectItem;
