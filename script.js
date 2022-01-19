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
	"ane",
	"axe",
	"bel",
	"bip",
	"car",
	"col",
	"coq",
	"cor",
	"cou",
	"cri",
	"gag",
	"gaz",
	"gel",
	"jus",
	"net",
	"nul",
	"val",
	"ski",
	"sot",
	"tas",
	"tic",
	"atre",
	"beau",
	"bete",
	"boxe",
	"brun",
	"cerf",
	"chez",
	"cire",
	"dame",
	"dent",
	"dock",
	"dodo",
	"drap",
	"dune",
	"emeu",
	"fado",
	"faux",
	"ibis",
	"jazz",
	"joli",
	"joue",
	"kaki",
	"logov",
	"loin",
	"long",
	"lune",
	"lynx",
	"mine",
	"mure",
	"ouie",
	"ours",
	"pion",
	"rhum",
	"ride",
	"rock",
	"seau",
	"test",
	"thym",
	"trou",
	"truc",
	"user",
	"vert",
	"yogi",
	"watt",
	"acces",
	"aimer",
	"aloes",
	"assez",
	"avion",
	"awale",
	"balai",
	"banjo",
	"barbe",
	"bonne",
	"bruit",
	"buche",
	"cache",
	"capot",
	"carte",
	"chien",
	"crane",
	"cycle",
	"ebene",
	"essai",
	"gifle",
	"honni",
	"jambe",
	"koala",
	"livre",
	"lourd",
	"maman",
	"moult",
	"noeud",
	"ortie",
	"peche",
	"poire",
	"pomme",
	"poste",
	"prune",
	"radar",
	"radis",
	"robot",
	"route",
	"rugby",
	"seuil",
	"taupe",
	"tenue",
	"texte",
	"tyran",
	"usuel",
	"valse",
	"acajou",
	"agneau",
	"alarme",
	"ananas",
	"angora",
	"animal",
	"arcade",
	"aviron",
	"azimut",
	"babine",
	"balade",
	"bonzai",
	"basson",
	"billet",
	"bouche",
	"boucle",
	"bronze",
	"cabane",
	"caiman",
	"cloche",
	"cheque",
	"cirage",
	"coccyx",
	"crayon",
	"garage",
	"gospel",
	"goulot",
	"gramme",
	"grelot",
	"guenon",
	"ochet",
	"hormis",
	"humour",
	"hurler",
	"jargon",
	"Limite",
	"ionne",
	"menthe",
	"oiseau",
	"podium",
	"poulpe",
	"poumon",
	"puzzle",
	"quartz",
	"rapide",
	"seisme",
	"tetine",
	"tomate",
	"walabi",
	"whisky",
	"zipper",
	"abriter",
	"ballast",
	"baryton",
	"bassine",
	"batavia",
	"billard",
	"bretzel",
	"cithare",
	"chariot",
	"clairon",
	"corbeau",
	"cortege",
	"crapaud",
	"cymbale",
	"dentier",
	"djembe",
	"drapeau",
	"exemple",
	"fourmis",
	"grandir",
	"iceberg",
	"javelot",
	"jockey",
	"journal",
	"journee",
	"jouxter",
	"losange",
	"macadam",
	"mondial",
	"notable",
	"oxygene",
	"panique",
	"petrole",
	"poterie",
	"pouvoir",
	"renzgat",
	"scooter",
	"senteur",
	"sifflet",
	"spirale",
	"sucette",
	"strophe",
	"tonneau",
	"trousse",
	"tunique",
	"ukulele",
	"vautour",
	"zozoter",
	"aquarium",
	"araignee",
	"arbalete",
	"archipel",
	"banquise",
	"batterie",
	"brocante",
	"brouhaha",
	"capeline",
	"clavecin",
	"cloporte",
	"cebutant",
	"diapason",
	"gangster",
	"gothique",
	"hautbois",
	"herisson",
	"logiciel",
	"objectif",
	"paranoia",
	"parcours",
	"pastiche",
	"question",
	"quetsche",
	"scarabee",
	"scorpion",
	"symptome",
	"tabouret",
	"tomahawk",
	"toujours",
	"tourisme",
	"triangle",
	"utopique",
	"zeppelin",
	"accordeon",
	"ascenseur",
	"ascension",
	"aseptiser",
	"autoroute",
	"avalanche",
	"balalaika",
	"bilboquet",
	"bourricot",
	"brillance",
	"cabriolet",
	"contrario",
	"cornemuse",
	"dangereux",
	"epluchage",
	"feodalite",
	"forteresse",
	"gondolier",
	"graphique",
	"goroscope",
	"intrepide",
	"klaxonner",
	"mascarade",
	"metaphore",
	"narrateur",
	"peripétie",
	"populaire",
	"printemps",
	"quemander",
	"tambourin",
	"vestiaire",
	"xylophone",
	"acrostiche",
	"apocalypse",
	"attraction",
	"aventurier",
	"bouillotte",
	"citrouille",
	"controverse",
	"coquelicot",
	"dissimuler",
	"flibustier",
	"forestiere",
	"grenouille",
	"impossible",
	"labyrinthe",
	"maharadjah",
	"prudemment",
	"quadriceps",
	"soliloquer",
	"subjective",
	"baccalaureat",
	"abracadabra",
	"francophile",
	"pandemonium",
	"chlorophylle",
	"metallurgie",
	"metamorphose",
	"montgolfiere",
	"kaleidoscope",
	"conquistador",
	"conspirateur",
	"rhododendron",
	"qualification",
	"protozoaire",
	"quadrilatere",
	"zygomatique",
	"sorcellerie",
	"belligerant",
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
	genererCases(motATrouver.length);
	motATrouverSplit = motATrouver.split("");
	lettresManquantes = motATrouver.length;
	affichelettresManquantes.textContent = lettresManquantes;
}

function genererCases(nombre) {
	for (let i = 0; i < nombre; i++) {
		afficherCase(i);
	}
}

function genererClavierVirtuel() {
	for (let i = 0; i < clavier.length; i++) {
		afficherClavierVirtuel(clavier[i]);
	}
}

function afficherCase(i) {
	let nouvelleCase = document.createElement("div");
	nouvelleCase.textContent = "  ";
	nouvelleCase.className += `case${i}`;
	afficheRes.appendChild(nouvelleCase);
}

function afficherClavierVirtuel(nomDeLaTouche) {
	let touche = document.createElement("div");
	touche.textContent = nomDeLaTouche;
	touche.className = "touche";
	touche.id += nomDeLaTouche;
	afficheClavier.appendChild(touche);
}

function victoire() {
	//C'est gagné
	bravo.style.visibility = "visible";
	bravo.innerHTML = `<p>Bravo !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}

function defaite() {
	// alert(`Vous avez perdu! Le mot à trouver était: ${motATrouver}`);
	perdu.style.visibility = "visible";
	perdu.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}
function saisieDirecte(mot) {
	if (
		isNaN(mot) &&
		mot != "" &&
		mot != null &&
		mot.length === motATrouver.length
	) {
		if (mot === motATrouver) {
			victoire();
		} else {
			//C'est perdu
			nombreDErreur++;
			coupsRestants--;
			afficheCoupsRestants.textContent = coupsRestants;
			afficheLePendu();
			if (nombreDErreur === 6) {
				defaite();
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
				victoire();
			}
		}
	}
	if (lettreValide == false) {
		nombreDErreur++;
		coupsRestants--;
		afficheCoupsRestants.textContent = coupsRestants;
		if (nombreDErreur === 6) {
			defaite();
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
