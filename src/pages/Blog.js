import Header from "../components/Header";
import Footer from "../components/Footer";
const Blog = () => {
  return `<div>
  ${Header()}</div>
  <div class="container">
  <h1 class="tw-text-2xl tw-font-bold tw-mt-5">Blog</h1>
  </div>
  ${Footer()}
  `;
};

export default Blog;
