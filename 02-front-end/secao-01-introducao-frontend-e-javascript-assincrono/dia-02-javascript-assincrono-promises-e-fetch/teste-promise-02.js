// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then(response => response.json())
//   .then(data => console.log(data.forms[0].name))
//   .catch(error => console.log(error.message));

fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {console.log(data)})
  .catch(error => console.log(error.message));