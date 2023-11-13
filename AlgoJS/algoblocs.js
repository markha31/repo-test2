// A1
/*
// Initialisation (ce qui est déjà fait quand on commence le niveau sur le site)
setPos(300, 300);
setLineWidth(5);
changeColor(color.red);
faceDown();

// Réalisation (la traduction de ce qu'on a réalisé avec les blocs)
forward(100);
faceRight();
forward(50);
*/

// A2
/*
// Positionnement et couleur
setPos(300, 300);
setLineWidth(5);
changeColor(color.yellow);
faceLeft();

// Direction de la turtle

forward(50);
faceDown();
forward(50);
faceRight();
forward(100);
faceUp();
forward(100);
*/

/*
// A3
// Positionnement et couleur
setPos(300, 300);
setLineWidth(5);
changeColor(color.brown);

// Direction de la tortue 
faceLeft(90);
forward(50);
faceRight();
forward(100);
faceLeft();
forward(50);
faceUp();
forward(50);
faceDown();
forward(100);
*/

/*
// A4
// Positionnement et couleur
setPos(200, 400);
setLineWidth(5);
changeColor(color.green);
faceRight(90);

// Direction de la tortue 
forward(150);
arcLeft(50,90);
arcLeft(50,90);
forward(100);

arcRight(50,90);
arcRight(50,90);
forward(150);
*/

/*
// A5
// Positionnement et couleur
setPos(300, 200);
setLineWidth(5);
changeColor(color.purple);
faceRight(90);

// Direction de la tortue 
arcRight(100,90);
arcRight(100,90);
arcRight(100,90);
arcRight(100,90);

arcRight(50,90);
arcRight(50,90);
arcLeft(50,90);
arcLeft(50,90);
*/

/*
// A6
// Positionnement et couleur
setPos(300, 500);
setLineWidth(5);
changeColor(color.blue);
faceUp(90);

// Direction de la tortue
forward(50);
up();
forward(50);
down(50);
forward(100);
*/

/*
// A7
// Positionnement et couleur
setPos(200, 300);
setLineWidth(7);
changeColor(color.green);
faceDown(90);


// Direction de la tortue
forward(100);
arcLeft(50,90);
arcLeft(50,90);
forward(50);

up();
forward(50);
down(50);
forward(100);

arcLeft(50,90);
arcLeft(50,90);
forward(50);
*/

/*
// A8
// Positionnement et couleur
setPos(200, 300);
setLineWidth(7);
changeColor(color.red);
faceUp(90);
// Direction de la tortue
forward(50);
faceRight(90);
forward(100);
faceDown(90);
forward(200);
faceLeft(90);
forward(50);

up();
forward(50);
faceUp(90);
forward(50);
down();
forward(50);
*/

/*
// B1
// Initialisation
setPos(100,100);
faceRight();
setLineWidth(5);
changeColor(color.green);

// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}
*/

/*
// B2
// Initialisation
setPos(100,100);
faceUp();
setLineWidth(5);
changeColor(color.red);

// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/

/*
// B3
// Initialisation
setPos(300,300);
faceUp();
setLineWidth(7);
changeColor(color.red);

// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    right(90);
}
*/

/*
// B4
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.red);

// Réalisation
for (let i = 0; i < 3; i++) {
  forward(100);
  left(180 - 60);
}
*/

/*
// B5
// Initialisation
setPos(300, 300);
faceUp();
setLineWidth(7);
changeColor(color.black);

forward(100);
changeColor(color.red);
// Réalisation
for (let i = 0; i < 3; i++) {
    forward(50);
    right(180 - 60);
}
*/

/*
// B6
// Initialisation
setPos(200, 300);
faceRight();
setLineWidth(7);
changeColor(color.blue);

// Réalisation
for (let i = 0; i < 2; i++) {
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.black);

for (let i = 0; i < 3; i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}
*/

/*
// B7
// Initialisation
setPos(300, 300);
faceLeft();
setLineWidth(7);
changeColor(color.black);


// Réalisation
for (let i = 0; i < 3; i++) {
    forward(100);
    right(180 - 60);
}

faceDown();

for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    right(90);
}
*/

/*
// B8
// Initialisation
setPos(300, 300);
faceLeft();
setLineWidth(7);

// Réalisation
for (let i = 0; i < 8; i++) {
    forward(200);
    right(180 - 45);
}
*/

/*
// B9
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);

forward(50);
up();
forward(50);
down();

// Réalisation
for (let i = 0; i < 3; i++) {
    forward(100);
    right(180 - 60);
}
*/

/*
// B10
// Initialisation
setPos(150, 300);
faceRight();
setLineWidth(7);


// Réalisation 1ère étoile
for (let i = 0; i < 8; i++) {
    forward(100);
    right(180 - 45);
}

changeColor(color.white);
up();
forward(200);
down();


// Réalisation 2ème étoile
for (let i = 0; i < 8; i++) {
    forward(200);
    right(180 - 45);
}

changeColor(color.red);
up();
right(200);
forward(200);
down();


// Réalisation 3ème étoile
for (let i = 0; i < 8; i++) {
    forward(100);
    right(180 - 45);
}
*/

/*
// B11
// Initialisation
setPos(150, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

// Réalisation 1ère étoile
for (let i = 0; i < 4; i++) {
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

/*
// B12
// Initialisation
setPos(150, 300);
faceLeft();
setLineWidth(7);
changeColor(color.white);

// Réalisation
for (let i = 0; i < 3; i++) {
    left(90);
    forward(50);
}

up();
forward(50);
changeColor(color.black);
down();


for (let i = 0; i < 3; i++) {
    forward(50);
    left(90);
}
*/

/*
// B13
// Initialisation
setPos(300, 300);
faceLeft();
setLineWidth(7);
changeColor(color.white);

// Réalisation
for (let i = 0; i < 8; i++) {
    forward(100);
    left(180 - 45);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

/*
// B14
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

// Réalisation
for (let i = 0; i < 5; i++) {
    forward(50);
    right(180 - 60);
    forward(100);
    left(180 - 60);
    forward(50);
}
*/

/*
// B15
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

// Réalisation
for (let i = 0; i < 4; i++) {
    forward(50);
    arcLeft(50,90);
}
*/

/*
// B16
// Initialisation
setPos(100, 400);
faceRight();
setLineWidth(7);
changeColor(color.white);

// Réalisation
arcLeft(200, 90);
faceLeft();

for (let i = 0; i < 4; i++) {
    arcLeft(25, 90);
    arcRight(25, 90);
}
*/

/*
// C1
// Initialisation
setPos(100, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);
// Réalisation
for (let i = 0; i < 4; i++) {
    forward(100);
    for (let a = 0; a < 3; a++) {
        right(120);
        forward(100);
    }
}
*/

/*
// C2
// Initialisation
setPos(100, 500);
faceUp();
setLineWidth(7);
changeColor(color.white);
// Réalisation
for (let i = 0; i < 5; i++) {
    for (let a = 0; a < 4; a++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}
*/

/*
// C3
// Initialisation
setPos(100, 500);
faceRight();
setLineWidth(7);
changeColor(color.green);
// Réalisation
for (let i = 0; i < 3; i++) {
    for (let a = 0; a < 8; a++) {
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    shiftColor(0.25);
    down();
}
*/

/*
// C4
// Initialisation
setPos(100, 300);
faceRight();
setLineWidth(7);
// Réalisation
for (let i = 0; i < 5; i++) {
    for (let a = 0; a < 3; a++) {
        forward(50);
        left(180 - 60);
    }
    changeColor(color.black);
    for (let b = 0; b < 4; b++) {
        forward(50);
        right(180 - 90);
    }
    up();
    forward(100);
    down();
    changeColor(color.blue);
}
*/

/*
// C5
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

// Réalisation
for (let i = 0; i < 4; i++) {
    shiftColor(0.25);
    right(180-90);
    for (let a = 0; a < 8; a++) {
        forward(200);
        left(180-45);
    }
}
*/

/*
// D1
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.red);

let longueur = 100;
let angle = 135;
// Réalisation
for (let i = 0; i < 8; i++) {
    forward(longueur);
    right(180-angle);
}
*/

/*
// D2
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

let longueur1 = 50;
let longueur2 = 100;
let longueur3 = 200;

// Réalisation
    forward(longueur1);
    faceDown();
    forward(longueur2);
    faceRight();
    forward(longueur3);
    faceUp();
    forward(longueur1);
    faceLeft();
    forward(longueur2);
*/

/*
// D3
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.white);

let longueur = 150;
let angle = 45;
let longueur2 = 200;
// Réalisation

forward(longueur);
right(180-angle);
forward(longueur2);
left(180-angle);
forward(longueur);
*/

/*
// D4
// Initialisation
setPos(100, 500);
faceRight();
setLineWidth(7);
changeColor(color.white);
// Réalisation
let lng1 = 50;
let lng2 = 25;
let lng3 = 100;

for (let i = 0; i < 6; i++) {

    faceUp();
    forward(lng1);

    faceLeft();
    forward(lng1);

    faceUp();
    forward(lng2);

    faceRight();
    forward(lng3);

    faceUp();
}
*/

/*
// D4
// Initialisation
setPos(300, 300);
faceDown();
setLineWidth(7);
changeColor(color.white);
// Réalisation
let lng1 = 200;
let angle = 90;
let lng3 = 50;

forward(lng1);
left(180-angle);

forward(lng3);
left(180-angle);

forward(lng1);
changeColor(color.black);

for (let i = 0; i < 4; i++) {
    forward(lng3);
    left(180-angle);
}
*/

/*
// D9
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor(color.blue);

// Réalisation
let longueur;
longueur = 50;

for (let i = 0; i < 6; i++) {
    forward(longueur);
    right(180-60);
    longueur = longueur + 50;
}
*/

/*
// D10
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor('#FFE6EE');

// Réalisation
let longueur;
longueur = 50;

for (let i = 0; i < 10; i++) {
    forward(longueur);
    right(180-90);
    longueur = longueur + 25;
}
*/

/*
// D11
// Initialisation
setPos(100, 300);
faceRight();
setLineWidth(7);
changeColor('#FFE6EE');

// Réalisation
let longueur;
longueur = 150;

for (let i = 0; i < 5; i++) {
    for (let a = 0; a < 3; a++) {
        forward(longueur);
        left(180-60);
    }
    forward(longueur);
    longueur = longueur - 25;  
}
*/

/*
// D12
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor('#FFE6EE');

// Réalisation
let longueur;
longueur = 50;

for (let i = 0; i < 6; i++) {
    for (let a = 0; a < 3; a++) {
        forward(longueur);
        left(180-60);
    }
    forward(longueur);
    left(180-120);
    longueur = longueur + 25;  
}
*/

/*
// D13
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor('#FFE6EE');

// Réalisation
let rayon;
rayon = 50;

for (let i = 0; i < 8; i++) {
    arcRight(rayon,180);
    up();
    forward(100);
    down();
    rayon = rayon + 25;  
}
*/

// D14
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(7);
changeColor("#FFE6EE");

// Réalisation
for (let i = 0; i < 4; i++) {

  let longueur;
  longueur = 50;

  for (let a = 0; a < 4; a++) {
    forward(longueur);
    arcRight(180 - 90);
    forward(longueur);
    arcLeft(180 - 90);
    longueur = longueur + 50;
  }
  arcRight(180 - 90);
  arcRight(180 - 90);
}
