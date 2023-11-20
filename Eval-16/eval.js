const usersHuman = [
  {
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25,
  },
  {
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5,
  },
  {
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500,
  },
];

const usersPet = [
  {
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe",
  },
  {
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable",
  },
];

const usersXeno = [
  {
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45,
  },
  {
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35,
  },
  {
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25,
  },
];

const tabData = [];
//Les points servent a spread un tableau dans un autre i thiiink
tabData.push(...usersHuman, ...usersPet, ...usersXeno);
console.log(tabData);


// Fonction affichage d'humains
function afficherHumain(objet) {
  console.log(`name : ${objet.name}`);
  console.log(`email : ${objet.email}`);
  console.log(`age : ${objet.age}`);
}
for (const user of usersHuman) {
  afficherHumain(user);
}

// Fonction affichage d'animaux
function afficherAnimal(objet) {
  console.log(`name : ${objet.name}`);
  console.log(`espece : ${objet.espece}`);
  console.log(`age : ${objet.age}`);
  console.log(`propriétaire : ${objet.propriétaire}`);
}
for (const user of usersPet) {
  afficherAnimal(user);
}

// Fonction affichage de xenos
function afficherXeno(objet) {
  console.log(`name : ${objet.name}`);
  console.log(`espece : ${objet.espece}`);
  console.log(`age : ${objet.age}`);
  console.log(`menace : ${objet.menace}`);
}
for (const user of usersXeno) {
  afficherXeno(user);
}

// Fonction profil avec boucle if et parcours du tableau

function profil(tabData) {
  console.log("test d'affichage");
  for (const objet of tabData) {
    if (objet.type === "humain") {
      afficherHumain(objet);
    } else if (objet.type === "animal de compagnie") {
      afficherAnimal(objet);
    } else if (objet.type === "Xeno") {
      afficherXeno(objet);
    } else {
      console.log("testttt");
    }
  }
}

profil(tabData);
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

//Fonction profilAll avec boucle for of
function profilAll(bigTab) {
    for (const smlTab of bigTab) {
    // appel de profil de la part de profilAll sur chaque petit tableau
      profil(smlTab);
    }
  }
  
  profilAll(tabData);
  
