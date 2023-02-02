import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return `<div>
  ${Header()}</div>
  <h1 class="text-2xl font-bold mt-5">Home Page</h1>
  ${Footer()}
  `;
};

export default Home;
