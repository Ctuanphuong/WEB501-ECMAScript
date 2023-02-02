import { menus } from "../data/Menu";
const Nav = () => {
  return `<nav>
  ${menus
    .map(
      (menu) =>
        `<a href="${menu.link}" class="mx-2 font-semibold hover:text-[#fd4312] transition-all">${menu.name}</a>`
    )
    .join("")}</nav>`;
};
export default Nav;
