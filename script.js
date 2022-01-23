// JEU DU PENDU | Projet passerelle #1 | Programme Rocket | Believemy.com

// VARIABLES UTILES ======================================================================================================================================================================
const url =
	"https://api.dicolink.com/v1/mots/motauhasard?avecdef=true&minlong=5&maxlong=-1&verbeconjugue=false&api_key=nVfFHYMFHpiaEH43bTPEEcJj2KITcNwy";
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

let motATrouver = "";
let motATrouverSplit;
let lettreChoisie;
let lettrePlacees = 0;
let nombreDErreur = 0;
let lettreValide = false;
let coupsRestants = 6;
let lettresManquantes;
let scoreMemoire;
let motsTrouvesMemoire;
let motAleatoireAPI;

// SELECTION DES ELEMENTS DU DOM A MODIFIER==============================================================================================================================================

let afficheRes = document.querySelector(".mot");
let afficheClavier = document.querySelector(".clavierVirtuel");
let affichePendu = document.querySelector(".score_centre");
let afficheCoupsRestants = document.querySelector(".coupsRestants");
let affichelettresManquantes = document.querySelector(".lettresManquantes");
let bravo = document.querySelector(".bravo");
let perdu = document.querySelector(".perdu");
let dicolinkApi = document.querySelector(".dicolinkApi");
let motPropose = document.querySelector("#motPropose");
let valider = document.querySelector("#submit");
document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	let input = document.querySelector("#motPropose");
	let proposition = input.value;
	input.value = "";
	verifierLaSaisie(proposition);
});

// LANCEMENT DU SCRIPT =================================================================================================================================================================
initialiserLaPartie();

// FONCTIONS ===========================================================================================================================================================================
function initialiserLaPartie() {
	initialisationAffichage();
	genererMotAleatoire();
}

function initialisationAffichage() {
	bravo.style.visibility = "hidden";
	perdu.style.visibility = "hidden";

	// Affiche le clavier virtuel dans le DOM
	for (let k = 0; k < clavier.length; k++) {
		let touche = document.createElement("div");
		touche.textContent = clavier[k];
		touche.className = "touche";
		afficheClavier.appendChild(touche);
	}
}
function genererMotAleatoire() {
	//Génére le mot aleatoire
	let requete = new XMLHttpRequest();
	requete.open("GET", url);
	requete.responseType = "json";
	requete.send();

	requete.onload = function () {
		if (requete.readyState === XMLHttpRequest.DONE) {
			if (requete.status === 200) {
				let reponse = requete.response;
				console.log(reponse);
				motATrouver = reponse[0].mot;
				console.log(
					`Le mot généré via DicoLink API est: ${motATrouver.toUpperCase()}, il contient ${
						motATrouver.length
					} lettres.`
				);
				lancerLaPartie();
			} else {
				//Si DicoLink non disponible, génère un mots aléatoire à partir du tableau listeDeMots
				motATrouver =
					listeDeMots[Math.floor(Math.random() * listeDeMots.length)];
				console.log(
					`Le mot généré parmis les ${
						listeDeMots.length
					} possibilités est: ${motATrouver.toUpperCase()}, il contient ${
						motATrouver.length
					} lettres.`
				);
				lancerLaPartie();
			}
		}
	};
}

function activerClavierVirtuel() {
	// génére un addEventListner("click") pour chaque touche.
	const touches = document.querySelectorAll(".touche");
	touches.forEach((element) => {
		element.addEventListener("click", function () {
			lettreChoisie = element.innerText.toLowerCase(); // affecte à la variable lettreChoisie le contenu dans le <div> de la touche précédemment attribué via textContent Voir**
			element.className += "pressee";
			console.log(
				`La touche: ${lettreChoisie.toUpperCase()} a été pressée par l'utilisateur > Vérification`
			);
			verifierLettreChoisie(); //Envoie la lettreChoisie pour vérification.
			this.removeEventListener("click", arguments.callee, false); //et désactive la touche jusqu'à réactualisation de la page
		});
	});
}
function lancerLaPartie() {
	//cache le bandeau de recherche Dicolink pour dévoiler le mot caché.
	dicolinkApi.style.visibility = "hidden";

	//Crée autant de cases que de lettres à trouver dans le DOM (mot caché)
	for (let i = 0; i < motATrouver.length; i++) {
		let nouvelleCase = document.createElement("div");
		nouvelleCase.textContent = "_";
		nouvelleCase.className += `case${i}`; //En attribuant à la case, une classe contenant l'indice, on pourra selectionner les cases plus facilement par la suite. Voir**
		afficheRes.appendChild(nouvelleCase);
	}

	//initialise les variables utiles
	motATrouverSplit = motATrouver.split("");
	lettresManquantes = motATrouver.length;
	affichelettresManquantes.textContent = lettresManquantes;

	console.log("Partie initialisée, en attente d'une action utilisateur...");

	//active le clavier virtuel
	activerClavierVirtuel();
}

function verifierLettreChoisie() {
	for (let i = 0; i < motATrouver.length; i++) {
		// Compare pour chaque case composant le mot caché lettreChoisie avec la lettre du mot caché.
		if (
			lettreChoisie == motATrouverSplit[i] ||
			(lettreChoisie == "e" && motATrouverSplit[i] == "é") ||
			motATrouverSplit[i] == "è" ||
			motATrouverSplit[i] == "ê" ||
			(lettreChoisie == "a" && motATrouverSplit[i] == "à") ||
			(lettreChoisie == "i" && motATrouverSplit[i] == "ï") ||
			(lettreChoisie == "o" && motATrouverSplit[i] == "ô")
		) {
			//Si la lettreChoisie = la lettre composant le mot caché, on remplace le contenu de la case par la valeur de lettreChoisie.
			console.log(
				`${lettreChoisie.toUpperCase()} est présent en CASE ${i + 1}`
			);
			document.querySelector(`.case${i}`).textContent = lettreChoisie; //On selectionne la case concernée grâce à la classe dynamique case${i}
			//On ajoute 1 au nombre de lettre trouvée (lettres placées) et on actualise le nombre de lettre manquantes
			lettrePlacees++;
			if (lettresManquantes > 0) {
				//Pour éviter que lettresManquantes devienne négative lorsque l'on découvre des lettres déjà découvertes par l'utilisation de la saisie directe.
				lettresManquantes--;
			}

			affichelettresManquantes.textContent = lettresManquantes;
			//En passant la variable lettreValide à "vrai", on garde en mémoire pour la suite qu'il ne faudra décrémenter la variable "coupsRestants".
			lettreValide = true;
			if (motATrouverSplit.length === lettrePlacees) {
				//Quand toutes les lettres ont été placées dans le mot, le mot caché est découvert, la partie est gagnée.
				victoire();
			}
		}
	}
	if (lettreValide == false) {
		//Cette condition signifie qu'une fois que la lettreChoisie a été comparé à toutes les cases constituant le mot caché,
		//qu'aucune lettre n'a été dévoilée -> Le joueur perd un point.
		console.log(
			`Il n'y a pas de ${lettreChoisie.toUpperCase()} dans le mot ${motATrouver.toUpperCase()}`
		);
		nombreDErreur++;
		coupsRestants--;
		afficheCoupsRestants.textContent = coupsRestants;
		if (nombreDErreur === 6) {
			//Si le nombre d'erreur a atteint 6, la partie se termine ici..
			defaite();
		}
	} else {
		//Cependant si la lettreChoisie précédemment est valide, alors, on réinitialise la variable lettreValide pour le coup suivant.
		lettreValide = false;
	}
	//On réactualise ensuite l'image du pendu.
	afficherLePendu(nombreDErreur);
	console.log("En attente d'une action  utilisateur...");
}

function verifierLaSaisie(saisie) {
	//Vérifie que la saisie n'est pas un nombre, qu'elle n'est pas vide, ni nulle, et qu'elle contient autant de caractère que le mot caché.
	if (
		isNaN(saisie) &&
		saisie != "" &&
		saisie != null &&
		saisie.length === motATrouver.length
	) {
		//Si oui, alors on compare la proposition du joueur avec le mot caché.
		console.log(
			`L'utilisateur a entré le mot ${saisie.toUpperCase()} => Vérification:`
		);

		let saisieSplit = saisie.split("");

		for (let i = 0; i < saisieSplit.length; i++) {
			lettreChoisie = saisieSplit[i];
			console.log(lettreChoisie);
			verifierLettreChoisie();
		}
	}
}

function afficherLePendu(erreur) {
	//Actualise de manière dynamique le chemin d'accès à l'image du pendu.
	//De cette manière, je m'affranchi de la fonction SWITCH.
	affichePendu.innerHTML = `<img src="coup${erreur}.png" alt="pendu" />`;
}

function victoire() {
	//Efface le clavier
	afficheClavier.style.visibility = "hidden";
	//Affiche le message de victoire
	bravo.style.visibility = "visible";
	afficheClavier.style.visibility = "hidden";

	bravo.innerHTML = `<p>Bravo !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;

	calculerScore();
	//Propose de recommencer la partie
	recommencer();
}

function defaite() {
	//Efface le clavier
	afficheClavier.style.visibility = "hidden";

	//Affiche le message de défaite.
	perdu.style.visibility = "visible";

	perdu.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot caché était: <b>${motATrouver}</b></p><button>Recommencer</button>`;

	//Propose de recommencer la partie
	recommencer();
}

function recommencer() {
	//Crée un bouton Recommencer qui recharge la page, un nouveau mot est alors généré...
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}

function calculerScore() {
	//fonction non implémentée dans le DOM pour le moment.
	//Permet d'enregistrer dans le navgateur le nombre de mots trouvés ainsi qu'un score
	if (localStorage.getItem("score") && localStorage.getItem("motsTrouves")) {
		scoreMemoire = parseInt(localStorage.getItem("score"));
		motsTrouvesMemoire = parseInt(localStorage.getItem("motsTrouves"));
		localStorage.removeItem("score");
		localStorage.removeItem("motsTrouves");
		localStorage.setItem(
			"score",
			parseInt(scoreMemoire + coupsRestants * 100 * (motATrouver.length / 2))
		);
		localStorage.setItem("motsTrouves", parseInt(motsTrouvesMemoire + 1));

		console.log(
			`Score total: ${localStorage.getItem(
				"score"
			)} -- Mots trouvés: ${localStorage.getItem("motsTrouves")}`
		);
	} else {
		localStorage.setItem(
			"score",
			parseInt(coupsRestants * 100 * (motATrouver.length / 2))
		);
		localStorage.setItem("motsTrouves", parseInt(1));
		console.log(
			`Score total: ${localStorage.getItem(
				"score"
			)} -- Mots trouvés: ${localStorage.getItem("motsTrouves")}`
		);
	}
}

function effacerScore() {
	//fonction non implémentée dans le DOM pour le moment.
	//Permet de supprimer les données score et nombre de mots trouvés du navigateur
	localStorage.removeItem("score");
	localStorage.removeItem("motsTrouves");
}
