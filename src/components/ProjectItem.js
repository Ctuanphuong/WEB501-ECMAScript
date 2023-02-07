const ProjectItem = ({ project }) => {
  return `<a href="/project-detail/${project.id}" class="tw-text-xl tw-no-underline tw-font-semibold tw-transition-all tw-text-[#fd4312]  hover:tw-text-[#03fc94]">${project.name}</a>`;
};

export default ProjectItem;
