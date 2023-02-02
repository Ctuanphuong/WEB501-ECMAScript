// spread operator -> copy
const person = {
  name: "Chu Tuấn Phương",
  age: 19,
};

// const person2 = {
//   ...person,
//   address: "Phu Tho",
// };
// // Object assign
// const person2 = Object.assign({ address: "Thai Binh" }, person);

// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);
person2.child.name = "Kien";
console.log(person);
console.log(person2);

const products = [1, 2, 3, 4];
// không nên dùng .push để thêm phần tử vào mảng
// products.push(5);
// nên copy lại mảng và khai báo 1 biến mới thêm giá trị
const newProducts = [-1, ...products, 5];
console.log("new Products: ", newProducts);

// Lọc mảng
const filterProducts = newProducts.filter(function (item) {
  if (item !== 5) {
    return item;
  }
});
console.log("Filter Products: ", filterProducts);
