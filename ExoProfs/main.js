/*let nombre = prompt("Saisir le nombre de notes");
let somme = 0;
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("Saisir une note"));
   somme += note;
}

console.log(somme/nombre);*/


/*let nombre1 = parseInt(prompt("Saisir le 1er nombre"));
let nombre2 = parseInt(prompt("Saisir le 2eme nombre"));

let somme = nombre1 * nombre2

let test = somme>0 ? "positif":"negatif";

// test
console.log(test); */


let age = parseInt(prompt("Saisir l'age"));

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
}
