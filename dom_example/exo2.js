const user = {
  id: 1,
  nom: "Djamboulatov",
  prenom: "Markha",
  age: 21,
  image: "./koala.png",
};


const element = document.querySelector("p")
element.style.fontSize = "11px";
element.style.color = "blue";

const element2 = document.querySelector("div")
element2.style.backgroundColor = "rgb(220, 220, 220)"

const element1 = document.querySelector("img");
element1.style.width = "100px"
element1.style.height = "100px"
element1.style.position = "relative"
element1.style.top = '0px';
element1.style.margin = '10px';

const test = document.getElementById("p1");
test.textContent = user.nom

const test2 = document.getElementById("p2");
test2.textContent = user.prenom

const test3 = document.getElementById("p3");
test3.textContent = user.age

//test.textContent = user.prenom;
//test.textContent = user.nom;
//test.textContent = user.age;
