// for loop
const languages = ["JavaScript", "PHP", "Ruby"];
for (let i = 0; i < languages.length; i++) {
  console.log("for: ", languages[i]);
}
// for/in loop
for (let i in languages) {
  console.log("for in: ", languages[i]);
}
// for/of loop
for (let i of languages) {
  console.log("for of: ", i);
}

//foreach loop
languages.forEach((item, index) => console.log(item, index));

// map: lặp qua các phần tử, chuyển đổi mảng cũ thành 1 mảng mới(sửa)
const newMapLanguages = languages.map((item, index) => {
  return `${index + 1} ${item}`;
});
console.log("Map: ", newMapLanguages);

//filter => Tạo ra 1 mảng mới, lọc ra các phần tử thỏa mãn điều kiện
const newFilterLanguages = languages.filter((item) => {
  return item !== "Ruby";
});
console.log("Filter: ", newFilterLanguages);

// reduce

const numbers = [
  { id: 1, name: "Product A", price: 200 }, // accumulator
  { id: 2, name: "Product B", price: 300 },
  { id: 3, name: "Product C", price: 400 },
];
const total = numbers.reduce(
  (accumulator, nextValue) => accumulator + nextValue.price,
  0
);
console.log("reduce", total);

// Find -> Tìm phần tử trong mảng -> trả về 1 phần tử thỏa mãn điều kiện
const products2 = [
  { id: 1, name: "Product A", price: 200 }, // item
  { id: 2, name: "Product B", price: 300 }, // item
  { id: 3, name: "Product C", price: 400 }, // item
];

const foundProduct = products2.find((item) => item.id == 2);
console.log("Find: ", foundProduct);
