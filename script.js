// JEU DU PENDU | Projet passerelle #1 | Formation Believemy
//Lance le code

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
	"Âne",
	"Axe",
	"Bel",
	"Bip",
	"Car",
	"Col",
	"Coq",
	"Cor",
	"Cou",
	"Cri",
	"Gag",
	"Gaz",
	"Gel",
	"Jus",
	"Net",
	"Nul",
	"Val",
	"Ski",
	"Sot",
	"Tas",
	"Tic",
	"Atre",
	"Beau",
	"Bete",
	"Boxe",
	"Brun",
	"Cerf",
	"Chez",
	"Cire",
	"Dame",
	"Dent",
	"Dock",
	"Dodo",
	"Drap",
	"Dune",
	"Emeu",
	"Fado",
	"Faux",
	"Ibis",
	"Jazz",
	"Joli",
	"Joue",
	"Kaki",
	"Logov",
	"Loin",
	"Long",
	"Lune",
	"Lynx",
	"Mine",
	"Mure",
	"Ouie",
	"Ours",
	"Pion",
	"Rhum",
	"Ride",
	"Rock",
	"Seau",
	"Test",
	"Thym",
	"Trou",
	"Truc",
	"User",
	"Vert",
	"Yogi",
	"Watt",
	"Acces",
	"Aimer",
	"Aloes",
	"Assez",
	"Avion",
	"Awale",
	"Balai",
	"Banjo",
	"Barbe",
	"Bonne",
	"Bruit",
	"Buche",
	"Cache",
	"Capot",
	"Carte",
	"Chien",
	"Crane",
	"Cycle",
	"Ebene",
	"Essai",
	"Gifle",
	"Honni",
	"Jambe",
	"Koala",
	"Livre",
	"Lourd",
	"Maman",
	"Moult",
	"Noeud",
	"Ortie",
	"Peche",
	"Poire",
	"Pomme",
	"Poste",
	"Prune",
	"Radar",
	"Radis",
	"Robot",
	"Route",
	"Rugby",
	"Seuil",
	"Taupe",
	"Tenue",
	"Texte",
	"Tyran",
	"Usuel",
	"Valse",
	"Acajou",
	"Agneau",
	"Alarme",
	"Ananas",
	"Angora",
	"Animal",
	"Arcade",
	"Aviron",
	"Azimut",
	"Babine",
	"Balade",
	"Bonzai",
	"Basson",
	"Billet",
	"Bouche",
	"Boucle",
	"Bronze",
	"Cabane",
	"Caiman",
	"Cloche",
	"Cheque",
	"Cirage",
	"Coccyx",
	"Crayon",
	"Garage",
	"Gospel",
	"Goulot",
	"Gramme",
	"Grelot",
	"Guenon",
	"Hochet",
	"Hormis",
	"Humour",
	"Hurler",
	"Jargon",
	"Limite",
	"Lionne",
	"Menthe",
	"Oiseau",
	"Podium",
	"Poulpe",
	"Poumon",
	"Puzzle",
	"Quartz",
	"Rapide",
	"Seisme",
	"Tetine",
	"Tomate",
	"Walabi",
	"Whisky",
	"Zipper",
	"Abriter",
	"Ballast",
	"Baryton",
	"Bassine",
	"Batavia",
	"Billard",
	"Bretzel",
	"Cithare",
	"Chariot",
	"Clairon",
	"Corbeau",
	"Cortege",
	"Crapaud",
	"Cymbale",
	"Dentier",
	"Djembe",
	"Drapeau",
	"Exemple",
	"Fourmis",
	"Grandir",
	"Iceberg",
	"Javelot",
	"Jockey",
	"Journal",
	"Journee",
	"Jouxter",
	"Losange",
	"Macadam",
	"Mondial",
	"Notable",
	"Oxygene",
	"Panique",
	"Pétrole",
	"Poterie",
	"Pouvoir",
	"Renzgat",
	"Scooter",
	"Senteur",
	"Sifflet",
	"Spirale",
	"Sucette",
	"Strophe",
	"Tonneau",
	"Trousse",
	"Tunique",
	"Ukulele",
	"Vautour",
	"Zozoter",
	"Aquarium",
	"Araignee",
	"Arbalete",
	"Archipel",
	"Banquise",
	"Batterie",
	"Brocante",
	"Brouhaha",
	"Capeline",
	"Clavecin",
	"Cloporte",
	"Debutant",
	"Diapason",
	"Gangster",
	"Gothique",
	"Hautbois",
	"Herisson",
	"Logiciel",
	"Objectif",
	"Paranoia",
	"Parcours",
	"Pastiche",
	"Question",
	"Quetsche",
	"Scarabee",
	"Scorpion",
	"Symptome",
	"Tabouret",
	"Tomahawk",
	"Toujours",
	"Tourisme",
	"Triangle",
	"Utopique",
	"Zeppelin",
	"Accordeon",
	"Ascenseur",
	"Ascension",
	"Aseptiser",
	"Autoroute",
	"Avalanche",
	"Balalaika",
	"Bilboquet",
	"Bourricot",
	"Brillance",
	"Cabriolet",
	"Contrario",
	"Cornemuse",
	"Dangereux",
	"Epluchage",
	"Feodalite",
	"Forteresse",
	"Gondolier",
	"Graphique",
	"Horoscope",
	"Intrepide",
	"Klaxonner",
	"Mascarade",
	"Metaphore",
	"Narrateur",
	"Peripétie",
	"Populaire",
	"Printemps",
	"Quemander",
	"Tambourin",
	"Vestiaire",
	"Xylophone",
	"Acrostiche",
	"Apocalypse",
	"Attraction",
	"Aventurier",
	"Bouillotte",
	"Citrouille",
	"Controverse",
	"Coquelicot",
	"Dissimuler",
	"Flibustier",
	"Forestiere",
	"Grenouille",
	"Impossible",
	"Labyrinthe",
	"Maharadjah",
	"Prudemment",
	"Quadriceps",
	"Soliloquer",
	"Subjective",
	"Baccalaureat",
	"Abracadabra",
	"Francophile",
	"Pandemonium",
	"Chlorophylle",
	"Metallurgie",
	"Metamorphose",
	"Montgolfiere",
	"Kalidoscope",
	"Conquistador",
	"Conspirateur",
	"Rhododendron",
	"Qualification",
	"Protozoaire",
	"Quadrilatere",
	"Zygomatique",
	"Sorcellerie",
	"Belligerant",
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

// LANCE LE CODE

start();

function start() {
	genererMot();
	genererLesVariablesDuClavier(clavier);
	genererClavierVirtuel();
}

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

function genererLesVariablesDuClavier(clavier) {
	for (var i = 0; i < clavier.length; i++) {
		window[clavier[i]] = document.querySelector(`#${clavier[i]}`);
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
