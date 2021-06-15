let movie = {
  age: "young",
  time: "afternoon",
  movie: "Mortal Kombat",
}
const customerKeys = Object.keys(movie);
let customerString = "";
customerKeys.forEach(function(key) {
  customerString = customerString.concat(key + ": " + movie[key] + "\n"); 
});





let movie = {
  age: "young",
  time: "afternoon",
  movie: "matinee",
}

const customer = Object.keys(movie);
let customerString= "";
customer.forEach(function(key) {
  customerString = customerString.concat(key + ": " + customer[key] + "\n");
});





// Movies

//   const mortal kombat = Object.keys(movie)
//     age:
//     time:
//     movie:
//   }
