// object {key: value}

const person = {
  name: "Chu Tuan Phuong",
  age: 19,
  address: {
    city: "Ha Noi",
    district: "Minh Khai",
  },
  sex: "male",
};

// const {
//   name,
//   age,
//   address: { city, district },
//   sex,
// } = person;
// console.log("My info: " + name, age, "\n", district, city);
/* const { city, district } = person.address;
 console.log("Living: " + address); */

const showInfo = ({ name, age }) => {
  console.log("My info: " + name, age);
};
showInfo(person);

// Array
// function useStates() {
//   return ["Chu Tuan Phuong", 19, "Ha Noi", "Programmer"];
// }
// const [name, age, ...other] = useStates();
// console.log("Name: " + name, "age: " + age);
