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

