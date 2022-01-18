// JEU DU PENDU | Projet passerelle #1 | Formation Believemy
const clavier = [
	"a",
	"z",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"q",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"m",
	"w",
	"x",
	"c",
	"v",
	"b",
	"n",
];

const listeDeMots = [
	"moto",
	"chateau",
	"chat",
	"chien",
	"arbre",
	"clown",
	"voiture",
	"believemy",
	"garage",
	"javascript",
	"programmeur",
	"ordinateur",
	"informaticien",
	"avion",
	"pilote",
	"football",
	"ornithorynque",
	"pyramide",
	"zebre",
	"looping",
	"cratere",
	"coder",
	"lapin",
	"alouette",
	"parapluie",
	"cartable",
	"aeronef",
	"planetarium",
	"cryptomonnaie",
	"coronavirus",
	"epidemie",
	"vaccin",
	"paludisme",
	"jardinage",
];

let motATrouver;
let motATrouverSplit;
let lettresjouees = [];
let lettreChoisie;
let lettrePlacees = 0;
let nombreDErreur = 0;
let lettreValide = false;
let coupsRestants = 6;
let lettresManquantes;

let afficheRes = document.querySelector(".mot");
let afficheClavier = document.querySelector(".clavierVirtuel");
let affichePendu = document.querySelector(".score_centre");
let afficheCoupsRestants = document.querySelector(".coupsRestants");
let affichelettresManquantes = document.querySelector(".lettresManquantes");
let bravo = document.querySelector(".bravo");
let perdu = document.querySelector(".perdu");
let motPropose = document.querySelector("#motPropose");
let valider = document.querySelector("#submit");

bravo.style.visibility = "hidden";
perdu.style.visibility = "hidden";

genererMot();
genererClavierVirtuel();

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");
let g = document.querySelector("#g");
let h = document.querySelector("#h");
let i = document.querySelector("#i");
let j = document.querySelector("#j");
let k = document.querySelector("#k");
let l = document.querySelector("#l");
let m = document.querySelector("#m");
let n = document.querySelector("#n");
let o = document.querySelector("#o");
let p = document.querySelector("#p");
let q = document.querySelector("#q");
let r = document.querySelector("#r");
let s = document.querySelector("#s");
let t = document.querySelector("#t");
let u = document.querySelector("#u");
let v = document.querySelector("#v");
let w = document.querySelector("#w");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let z = document.querySelector("#z");

function genererMot() {
	motATrouver = listeDeMots[Math.floor(Math.random() * listeDeMots.length)];
	afficherCases(motATrouver.length);
	motATrouverSplit = motATrouver.split("");
	lettresManquantes = motATrouver.length;
	affichelettresManquantes.textContent = lettresManquantes;
}

function afficherCases(nombre) {
	for (let i = 0; i < nombre; i++) {
		genererCase(i);
	}
}

function genererCase(i) {
	let nouvelleCase = document.createElement("div");
	nouvelleCase.textContent = "  ";
	nouvelleCase.className += `case${i}`;
	afficheRes.appendChild(nouvelleCase);
}

function genererClavierVirtuel() {
	for (let i = 0; i < clavier.length; i++) {
		genererTouche(clavier[i]);
	}
}

function genererTouche(nomDeLaTouche) {
	let touche = document.createElement("div");
	touche.textContent = nomDeLaTouche;
	touche.className = "touche";
	touche.id += nomDeLaTouche;
	afficheClavier.appendChild(touche);
}

function saisieDirecte(mot) {
	if (isNaN(mot) && mot != "" && mot != null) {
		if (mot === motATrouver) {
			//C'est gagné
			bravo.style.visibility = "visible";
			bravo.innerHTML = `<p>Bravo !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
			let btn = document.querySelector("button");
			btn.addEventListener("click", () => {
				location.reload();
			});
		} else {
			//C'est perdu
			nombreDErreur++;
			coupsRestants--;
			afficheCoupsRestants.textContent = coupsRestants;
			afficheLePendu();
			if (nombreDErreur === 6) {
				// alert(`Vous avez perdu! Le mot à trouver était: ${motATrouver}`);
				perdu.style.visibility = "visible";
				perdu.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
				let btn = document.querySelector("button");
				btn.addEventListener("click", () => {
					location.reload();
				});
			}
		}
	}
}
function verifierLettreChoisie() {
	for (let i = 0; i < motATrouverSplit.length; i++) {
		if (lettreChoisie == motATrouverSplit[i]) {
			document.querySelector(`.case${i}`).textContent = lettreChoisie;
			lettrePlacees++;
			lettresManquantes--;
			affichelettresManquantes.textContent = lettresManquantes;
			lettreValide = true;
			if (motATrouverSplit.length === lettrePlacees) {
				// alert("Vous avez gagné");
				bravo.style.visibility = "visible";
				bravo.innerHTML = `<p>Bravo !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
				let btn = document.querySelector("button");
				btn.addEventListener("click", () => {
					location.reload();
				});
			}
		}
	}
	if (lettreValide == false) {
		nombreDErreur++;
		coupsRestants--;
		afficheCoupsRestants.textContent = coupsRestants;
		if (nombreDErreur === 6) {
			// alert(`Vous avez perdu! Le mot à trouver était: ${motATrouver}`);
			perdu.style.visibility = "visible";
			perdu.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
			let btn = document.querySelector("button");
			btn.addEventListener("click", () => {
				location.reload();
			});
		}
	} else {
		lettreValide = false;
	}
	lettreChoisie = "";
	afficheLePendu();
}

function afficheLePendu() {
	switch (nombreDErreur) {
		case 0:
			affichePendu.innerHTML = `<img src="coup0.png" alt="pendu" />`;
			break;
		case 1:
			affichePendu.innerHTML = `<img src="coup1.png" alt="pendu" />`;
			break;
		case 2:
			affichePendu.innerHTML = `<img src="coup2.png" alt="pendu" />`;
			break;
		case 3:
			affichePendu.innerHTML = `<img src="coup3.png" alt="pendu" />`;
			break;
		case 4:
			affichePendu.innerHTML = `<img src="coup4.png" alt="pendu" />`;
			break;
		case 5:
			affichePendu.innerHTML = `<img src="coup5.png" alt="pendu" />`;
			break;
		case 6:
			affichePendu.innerHTML = `<img src="coup6.png" alt="pendu" />`;
			break;
		default:
			affichePendu.innerHTML = `<img src="coup0.png" alt="pendu" />`;
			break;
	}
}

a.addEventListener("click", function () {
	lettreChoisie = "a";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

b.addEventListener("click", function () {
	lettreChoisie = "b";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

c.addEventListener("click", function () {
	lettreChoisie = "c";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

d.addEventListener("click", function () {
	lettreChoisie = "d";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

e.addEventListener("click", function () {
	lettreChoisie = "e";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

f.addEventListener("click", function () {
	lettreChoisie = "f";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

g.addEventListener("click", function () {
	lettreChoisie = "g";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

h.addEventListener("click", function () {
	lettreChoisie = "h";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

i.addEventListener("click", function () {
	lettreChoisie = "i";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

j.addEventListener("click", function () {
	lettreChoisie = "j";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

k.addEventListener("click", function () {
	lettreChoisie = "k";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

l.addEventListener("click", function () {
	lettreChoisie = "l";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

m.addEventListener("click", function () {
	lettreChoisie = "m";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

n.addEventListener("click", function () {
	lettreChoisie = "n";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

o.addEventListener("click", function () {
	lettreChoisie = "o";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

p.addEventListener("click", function () {
	lettreChoisie = "p";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

q.addEventListener("click", function () {
	lettreChoisie = "q";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

r.addEventListener("click", function () {
	lettreChoisie = "r";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

s.addEventListener("click", function () {
	lettreChoisie = "s";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

t.addEventListener("click", function () {
	lettreChoisie = "t";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

u.addEventListener("click", function () {
	lettreChoisie = "u";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

v.addEventListener("click", function () {
	lettreChoisie = "v";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

w.addEventListener("click", function () {
	lettreChoisie = "w";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

x.addEventListener("click", function () {
	lettreChoisie = "x";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

y.addEventListener("click", function () {
	lettreChoisie = "y";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

z.addEventListener("click", function () {
	lettreChoisie = "z";
	this.className += "pressee";
	verifierLettreChoisie();
	this.removeEventListener("click", arguments.callee, false);
});

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	let input = document.querySelector("#motPropose");
	let saisie = input.value;
	input.value = "";
	saisieDirecte(saisie);
});

//DEBUGG
console.log(
	`Le mot à trouver est: ${motATrouver}, il contient ${motATrouver.length} lettres.`
);
