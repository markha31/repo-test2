
//Exo2
/*let nombre = prompt("Saisir le nombre de notes");
let somme = 0;
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("Saisir une note"));
   somme += note;
}

console.log(somme/nombre);*/



//Exo3
/*let nombre1 = parseInt(prompt("Saisir le 1er nombre"));
let nombre2 = parseInt(prompt("Saisir le 2eme nombre"));

let somme = nombre1 * nombre2

let test = somme>0 ? "positif":"negatif";

// test
console.log(test); */



//Exo4
/*let age = parseInt(prompt("Saisir l'age"));

switch (true) {
    case age >= 6 && age <= 7:
        console.log("Poussin")
        break;
    case age >= 8 && age <= 9:
        console.log("Pupille")
        break; 
    case age >= 10 && age <= 11:
        console.log("Minime")
        break; 
    case age >= 12:
        console.log("Cadet")
        break;
    default:
        break;
}
if (age < 6) {
    console.log("Hors catégorie ou trop jeune")
} */



//Exo5
/*let mot1 = (prompt("Saisir 1er mot"));
let mot2 = (prompt("Saisir 2ème mot"));
let mot3 = (prompt("Saisir 3ème mot"));

let tab = [mot1, mot2, mot3];

console.log(tab.sort()); */



//Exo6
let article = (prompt("Saisir un article"));
let prix = (prompt("Saisir le prix"));
let quantité = (prompt("Saisir la quantité"));

let tab = [article, prix, quantité];

for(let i = 0; i< tab; i++){
    prix * 1.20 * quantité;
}

console.log(tab);
