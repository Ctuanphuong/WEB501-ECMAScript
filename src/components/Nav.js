import { menus } from "../data/Menu";
const Nav = () => {
  return `<nav>
  ${menus
    .map(
      (menu) =>
        `<a href="${menu.link}" class="tw-mx-2 tw-text-[#222] tw-font-semibold tw-transition-all hover:tw-text-[#fd4312] tw-no-underline">${menu.name}</a>`
    )
    .join("")}
    </nav>`;
};
export default Nav;
