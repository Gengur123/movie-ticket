//UI logic

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const movieInput = $("#movie").val();
    const timeInput = $("#time").val();
    const ageInput = $("#age").val();

  })
})
let movie = {
  age: "young",
  time: "afternoon",
  movie: "Mortal Kombat",
}
const customerKeys = Object.keys(movie);
let customerString = "";
customerKeys.forEach(function (key) {
  customerString = customerString.concat(key + ": " + movie[key] + "\n");
});

// Business logic
if (ageInput === "young/old")
  movieRate = 12
} else {
  movieRate = 15
} if (movieInput === "morning")
  movieTime 
} else {
  sum = 2
}
if (movieInput === "morning")
  sum = 1
} else {
  sum = 2
}

