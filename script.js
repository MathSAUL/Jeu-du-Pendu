// JEU DU PENDU | Projet passerelle #1 | Formation Believemy

// VARIABLES UTILES ========================================================================================
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

//ENVOIE DU FORMULAIRE ==================================================================================

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	let input = document.querySelector("#motPropose");
	let saisie = input.value;
	input.value = "";
	saisieDirecte(saisie);
});

// FONCTIONS ============================================================================================

function lancerLaPartie() {
	bravo.style.visibility = "hidden";
	perdu.style.visibility = "hidden";
	genererMot();
	genererClavierVirtuel();
}

function genererMot() {
	motATrouver = listeDeMots[Math.floor(Math.random() * listeDeMots.length)];
	console.log(
		`Le mot généré parmis les ${
			listeDeMots.length
		} possibilités est: ${motATrouver.toUpperCase()}, il contient ${
			motATrouver.length
		} lettres.`
	);
	motATrouverSplit = motATrouver.split("");
	lettresManquantes = motATrouver.length;
	affichelettresManquantes.textContent = lettresManquantes;
	genererCases(motATrouver.length);
}

function genererCases(nbre) {
	for (let i = 0; i < nbre; i++) {
		afficherCase(i);
	}
	console.log("Partie initialisée, en attente d'une action utilisateur...");
}

function genererClavierVirtuel() {
	for (let i = 0; i < clavier.length; i++) {
		afficherClavierVirtuel(clavier[i]);
	}
	const touches = document.querySelectorAll(".touche");
	touches.forEach((element) => {
		element.addEventListener("click", function () {
			lettreChoisie = element.innerText.toLowerCase();
			element.className += "pressee";
			console.log(
				`La touche: ${lettreChoisie.toUpperCase()} a été pressée par l'utilisateur > Vérification`
			);
			verifierLettreChoisie();
			this.removeEventListener("click", arguments.callee, false);
		});
	});
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

function verifierLettreChoisie() {
	for (let i = 0; i < motATrouver.length; i++) {
		if (lettreChoisie == motATrouverSplit[i]) {
			console.log(
				`${lettreChoisie.toUpperCase()} est présent en CASE ${i + 1}`
			);
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
		console.log(
			`Il n'y a pas de ${lettreChoisie.toUpperCase()} dans le mot ${motATrouver.toUpperCase()}`
		);
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
	afficheLePendu(nombreDErreur);
	console.log("En attente d'une action  utilisateur...");
}

function saisieDirecte(mot) {
	if (
		isNaN(mot) &&
		mot != "" &&
		mot != null &&
		mot.length === motATrouver.length
	) {
		console.log(`L'utilisateur a entré le mot ${mot} => Vérification:`);
		if (mot === motATrouver) {
			victoire();
			console.log(`C'est gagné !`);
		} else {
			console.log(`Ce n'est pas le mot caché [${motATrouver.toUpperCase()}]`);
			nombreDErreur++;
			coupsRestants--;
			afficheCoupsRestants.textContent = coupsRestants;
			afficheLePendu(nombreDErreur);
			if (nombreDErreur === 6) {
				defaite();
			}
		}
	}
}

function afficheLePendu(erreur) {
	affichePendu.innerHTML = `<img src="coup${erreur}.png" alt="pendu" />`;
}

function victoire() {
	bravo.style.visibility = "visible";
	bravo.innerHTML = `<p>Bravo !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}

function defaite() {
	perdu.style.visibility = "visible";
	perdu.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}

// LANCEMENT DU SCRIPT ===================================================================================
lancerLaPartie();
