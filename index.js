document.getElementById("Titanic").addEventListener("click", film)
function film() {
  
document.getElementById("title").innerHTML = movies["Titanic"]["title"] 

console.log(movies)

document.getElementById("director").innerHTML = movies["Titanic"]["director"] 
console.log(movies)

document.getElementById("genre").innerHTML = movies["Titanic"]["genre"] 
console.log(movies)

document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"] 
console.log(movies)

document.getElementById("poster").src = movies["Titanic"]["poster"] 
console.log(movies)

document.getElementById("description").innerHTML = movies["Titanic"]["description"] 
console.log(movies)

document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"] 
console.log(movies)

let cast = movies["Titanic"]["cast"];
let i;
for (i = 0; i < cast.length; i++) {
    document.getElementById("cast").innerHTML = movies["Titanic"]["cast"][0]["cast"];
} 
console.log(movies)

document.getElementById("reviews").innerHTML = movies["Titanic"]["reviews"] 
console.log(movies)
}

