/* class Animal{
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    couleur;
    //Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    //méthode
    crier(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Grrr");
        }
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");
        }
        if(this.espece == "Chien" || this.espece == "chien"){
            console.log("Waouf");
        }
        if(this.espece == "COq" || this.espece == "coq"){
            console.log("Cocoricoooo");
        }
    }

    dormir(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("zzzz");
        }
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("zzzz");
        }
        if(this.espece == "Chien" || this.espece == "chien"){
            console.log("zzzz");
        }
        if(this.espece == "COq" || this.espece == "coq"){
            console.log("zzzz");
        }
    }

}

const tigre = new Animal('tigre', 4, 150, 180);
const chat = new Animal('chat', 4, 30,4);
const chien = new Animal('chien', 4, 50, 9);
const coq = new Animal('coq', 2, 40, 3);

console.log(tigre);
tigre.taille = 180;
tigre.couleur = "Blanc";
console.log(tigre);
tigre.crier();
chat.crier();
chien.crier();
coq.crier();

tigre.dormir();
chat.dormir();
chien.dormir();
coq.dormir();       */

//Exo 13

/* class Maison{
    //Attributs
    nom;
    longueur;
    largeur;
    //Constructeur
    constructor(newNom, newLongueur, newLargeur){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
    }

    perimetre(){
            return (this.longueur + this.longueur)*2;
        }
    surface(){
            return this.longueur * this.longueur;
        }
    }

const maison1 = new Maison('maison1', 100, 150);
const maison2 = new Maison('maison2', 50, 100);

console.log(maison1.nom , maison1.perimetre()); */

//Exo 14

/* class Imc{
    //Attributs
    nom;
    poids;
    taille;
    //Constructeur
    constructor(newNom, newPoids, newTaille){
        this.nom = newNom;
        this.poids = newPoids;
        this.taille = newTaille;
    }
    calculImc() {
        return this.poids / this.taille **2; 
    }
    display(){
        console.log(`${markha.nom} pèse : ${markha.poids} kg, elle fais ${markha.taille} cm et son IMC est ${markha.calculImc()}`);
    }
}

const markha = new Imc('markha', 46, 155);

console.log(markha.display());      */

//Exo 15

/* class Vehicule {
  //Attributs
  nom;
  couleur;
  nbrRoue;
  vitesse;
  //Constructeur
  constructor(nom, couleur, nbrRoue, vitesse) {
    this.nom = nom;
    this.couleur = couleur;
    this.nbrRoue = nbrRoue;
    this.vitesse = vitesse;
  }
  detect() {
    if (this.nbrRoue == 4) {
      return "une voiture";
    } else if (this.nbrRoue == 2) {
      return "une moto";
    } else {
      return "un avion boeing";
    }
  }
}

const vehicule1 = new Vehicule("Mercedes CLK", 4, 250);
const vehicule2 = new Vehicule("Honda CBR", 2, 280);
const vehicule3 = new Vehicule("Markha", 55, 255);


console.log(`${vehicule1.nom} est ${vehicule1.detect()}`);
console.log(`${vehicule2.nom} est ${vehicule2.detect()}`);
console.log(`${vehicule3.nom} est ${vehicule3.detect()}`);      */



//Exo 16
/* Créer une classe Personnage qui va contenir les éléments suivants :
-nom, force, défense, vie
-une méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à la défense (notre personnage),
Créer une classe Combat qui  va contenir les éléments suivants :
-nbr de tour, score joueur 1, score joueur 2,
-Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
Cela va s'exécuter autant de tour que la valeur nbr de tour. 
Celui qui arrive à zéro à perdu.
Elle va afficher le nom du gagnant. */

/* class Personnage {
    //Attributs
    nom;
    force;
    defense;
    vie;
    //Constructeur
    constructor(nom, force, defense, vie) {
      this.nom = nom;
      this.force = force;
      this.defense = defense;
      this.vie = vie;
    }
    attaque() {
    }
}

class Combat {
    //Attributs
    nbrdetour;
    scorej1;
    scorej2;
    //Constructeur
    constructor(nbrdetour, scorej1, scorej2) {
      this.nbrdetour = nbrdetour;
      this.scorej1 = scorej1;
      this.scorej2 = scorej2;
    }
    combats() {
    }
}       */


//Exo 17
/* 
Gérer des compte en banque :
Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
Faire un scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
Puis Alex retire 100
Puis Marco fait un virement de 300 à Clovis
Enfin Alex tente un retrait de 600
Afficher tous les soldes finaux.
Ces comptes sont placés dans un tableau associatif de clients      */


/* class CompteBancaire {
    //Attributs
    prenom;
    solde;
    rib;
    //Constructeur
    constructor(prenom, solde, rib) {
      this.prenom = prenom;
      this.solde = solde;
      this.rib = rib;
    }
    credit(){

    }
    retrait(){

    }
    visualisation(){

    }
    etat(){

    }
    virement(){

    }
}

const personne1 = new CompteBancaire("Alex", 500, 250);
const personne2 = new CompteBancaire("Clover", 400, 280);
const personne3 = new CompteBancaire("Sam", 620, 255);      */

