const element = document.querySelector("h1");
element.style.fontSize = "14px";
element.innerHTML = "Nouveau contenu du titre";


const element1 = document.querySelector("p");
element1.style.fontFamily = "Arial";
element1.style.color = "green";
element1.innerHTML = "Nouveau contenu du paragraphe";


const element2 = document.querySelector("div");
element2.style.fontFamily = "Arial";
element2.style.marginTop = "30px";

document.querySelector("p").textContent = ("remplacement de texte avec textContent");
