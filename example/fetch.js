fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then(({ data }) => console.log(data));
