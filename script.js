// JEU DU PENDU | Projet passerelle #1 | Programme Rocket | Believemy.com

// VARIABLES UTILES ======================================================================================================================================================================
const url =
	"https://api.dicolink.com/v1/mots/motauhasard?avecdef=true&minlong=3&maxlong=13&verbeconjugue=false&api_key=nVfFHYMFHpiaEH43bTPEEcJj2KITcNwy";
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
	"perip??tie",
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
let motAleatoireAPI;
let motATrouver = "";
let motATrouverSplit;
let lettreChoisie;
let lettrePlacees = 0;
let nombreDErreur = 0;
let lettreValide = false;
let coupsRestants = 6;
let lettresManquantes;
let scoreMemoire = 0;
let motsTrouvesMemoire = 0;

// SELECTION DES ELEMENTS DU DOM A MODIFIER==============================================================================================================================================

let afficheRes = document.querySelector(".mot");
let afficheClavier = document.querySelector(".clavierVirtuel");
let affichePendu = document.querySelector(".score_centre");
let afficheCoupsRestants = document.querySelector(".coupsRestants");
let affichelettresManquantes = document.querySelector(".lettresManquantes");
let resultatPartie = document.querySelector(".resultatPartie");
let dicolinkApi = document.querySelector(".dicolinkApi");
let motPropose = document.querySelector("#motPropose");
let valider = document.querySelector("#submit");
let motsTrouves = document.querySelector(".nbremots");
let scoreTotal = document.querySelector(".score_total");
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
	resultatPartie.style.visibility = "hidden";
	calculerScore();
	// Affiche le clavier virtuel dans le DOM
	for (let k = 0; k < clavier.length; k++) {
		let touche = document.createElement("div");
		touche.textContent = clavier[k];
		touche.className = "touche";
		afficheClavier.appendChild(touche);
	}
}

function genererMotAleatoire() {
	//G??n??re le mot aleatoire
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
					`Le mot g??n??r?? via DicoLink API est: ${motATrouver.toUpperCase()}, il contient ${
						motATrouver.length
					} lettres.`
				);
				lancerLaPartie();
			} else {
				//Si DicoLink non disponible, g??n??re un mots al??atoire ?? partir du tableau listeDeMots
				motATrouver =
					listeDeMots[Math.floor(Math.random() * listeDeMots.length)];
				console.log(
					`Le mot g??n??r?? parmis les ${
						listeDeMots.length
					} possibilit??s est: ${motATrouver.toUpperCase()}, il contient ${
						motATrouver.length
					} lettres.`
				);
				lancerLaPartie();
			}
		}
	};
}

function lancerLaPartie() {
	//cache le bandeau de recherche Dicolink pour d??voiler le mot cach??.
	dicolinkApi.style.visibility = "hidden";

	//Cr??e autant de cases que de lettres ?? trouver dans le DOM (mot cach??)
	for (let i = 0; i < motATrouver.length; i++) {
		let nouvelleCase = document.createElement("div");
		nouvelleCase.textContent = "_";
		nouvelleCase.className += `case${i}`; //En attribuant ?? la case, une classe contenant l'indice, on pourra selectionner les cases plus facilement par la suite. Voir**
		afficheRes.appendChild(nouvelleCase);
	}

	//initialise les variables utiles
	motATrouverSplit = motATrouver.split("");
	lettresManquantes = motATrouver.length;
	affichelettresManquantes.textContent = lettresManquantes;

	console.log("Partie initialis??e, en attente d'une action utilisateur...");

	//active le clavier virtuel
	activerClavierVirtuel();
}

function activerClavierVirtuel() {
	// g??n??re un addEventListner("click") pour chaque touche.
	const touches = document.querySelectorAll(".touche");
	touches.forEach((element) => {
		element.addEventListener("click", function () {
			lettreChoisie = element.innerText.toLowerCase(); // affecte ?? la variable lettreChoisie le contenu dans le <div> de la touche pr??c??demment attribu?? via textContent Voir**
			element.className += "pressee";
			console.log(
				`La touche: ${lettreChoisie.toUpperCase()} a ??t?? press??e par l'utilisateur > V??rification`
			);
			verifierLettreChoisie(); //Envoie la lettreChoisie pour v??rification.
			this.removeEventListener("click", arguments.callee, false); //et d??sactive la touche jusqu'?? r??actualisation de la page
		});
	});
}

function verifierLettreChoisie() {
	for (let i = 0; i < motATrouver.length; i++) {
		// Compare pour chaque case composant le mot cach?? lettreChoisie avec la lettre du mot cach??.
		if (
			lettreChoisie == motATrouverSplit[i] ||
			(lettreChoisie == "e" && motATrouverSplit[i] == "??") ||
			motATrouverSplit[i] == "??" ||
			motATrouverSplit[i] == "??" ||
			(lettreChoisie == "a" && motATrouverSplit[i] == "??") ||
			(lettreChoisie == "i" && motATrouverSplit[i] == "??") ||
			(lettreChoisie == "o" && motATrouverSplit[i] == "??")
		) {
			//Si la lettreChoisie = la lettre composant le mot cach??, on remplace le contenu de la case par la valeur de lettreChoisie.
			console.log(
				`${lettreChoisie.toUpperCase()} est pr??sent en CASE ${i + 1}`
			);
			document.querySelector(`.case${i}`).textContent = motATrouverSplit[i]; //On selectionne la case concern??e gr??ce ?? la classe dynamique case${i}
			//On ajoute 1 au nombre de lettre trouv??e (lettres plac??es) et on actualise le nombre de lettre manquantes
			lettrePlacees++;
			if (lettresManquantes > 0) {
				//Pour ??viter que lettresManquantes devienne n??gative lorsque l'on d??couvre des lettres d??j?? d??couvertes par l'utilisation de la saisie directe.
				lettresManquantes--;
			}

			affichelettresManquantes.textContent = lettresManquantes;
			//En passant la variable lettreValide ?? "vrai", on garde en m??moire pour la suite qu'il ne faudra d??cr??menter la variable "coupsRestants".
			lettreValide = true;
			if (motATrouverSplit.length === lettrePlacees) {
				//Quand toutes les lettres ont ??t?? plac??es dans le mot, le mot cach?? est d??couvert, la partie est gagn??e.
				victoire();
			}
		}
	}
	if (lettreValide == false) {
		//Cette condition signifie qu'une fois que la lettreChoisie a ??t?? compar?? ?? toutes les cases constituant le mot cach??,
		//qu'aucune lettre n'a ??t?? d??voil??e -> Le joueur perd un point.
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
		//Cependant si la lettreChoisie pr??c??demment est valide, alors, on r??initialise la variable lettreValide pour le coup suivant.
		lettreValide = false;
	}
	//On r??actualise ensuite l'image du pendu.
	afficherLePendu(nombreDErreur);
	console.log("En attente d'une action  utilisateur...");
}

function verifierLaSaisie(saisie) {
	if (
		isNaN(saisie) &&
		saisie != "" &&
		saisie != null &&
		saisie.length === motATrouver.length
	) {
		console.log(`L'utilisateur a entr?? le mot ${saisie} => V??rification:`);
		if (saisie === motATrouver) {
			victoire();
			console.log(`C'est gagn?? !`);
		} else {
			console.log(`Ce n'est pas le mot cach?? [${motATrouver.toUpperCase()}]`);
			nombreDErreur++;
			coupsRestants--;
			afficheCoupsRestants.textContent = coupsRestants;
			afficherLePendu(nombreDErreur);
			if (nombreDErreur === 6) {
				defaite();
			}
		}
	}
}

function afficherLePendu(erreur) {
	//Actualise de mani??re dynamique le chemin d'acc??s ?? l'image du pendu.
	//De cette mani??re, je m'affranchi de la fonction SWITCH.
	affichePendu.innerHTML = `<img src="coup${erreur}.png" alt="pendu" />`;
}

function victoire() {
	//Efface le clavier
	afficheClavier.style.visibility = "hidden";
	//Affiche le message de victoire
	resultatPartie.style.visibility = "visible";
	resultatPartie.style.backgroundColor = "green";
	resultatPartie.style.color = "#f1f1f1";
	afficheClavier.style.visibility = "hidden";
	localStorage.setItem("motsTrouves", parseInt(motsTrouvesMemoire + 1));
	calculerScore();
	resultatPartie.innerHTML = `<p>Bravo !</p> <p>Le mot cach?? ??tait: <b>${motATrouver}</b></p>
	<p>Vous avez gagn?? ${
		coupsRestants * 100 * (motATrouver.length / 2)
	} points ! <p>
	<button>Recommencer</button>`;
	//Propose de recommencer la partie
	recommencer();
}

function defaite() {
	//Efface le clavier
	afficheClavier.style.visibility = "hidden";

	//Affiche le message de d??faite.
	resultatPartie.style.visibility = "visible";
	resultatPartie.style.backgroundColor = "coral";

	resultatPartie.innerHTML = `<p>Oups... C'est la loose !</p> <p>Le mot cach?? ??tait: <b>${motATrouver}</b></p><button>Recommencer</button>`;

	//Propose de recommencer la partie
	recommencer();
}

function recommencer() {
	//Cr??e un bouton Recommencer qui recharge la page, un nouveau mot est alors g??n??r??...
	let btn = document.querySelector("button");
	btn.addEventListener("click", () => {
		location.reload();
	});
}

function calculerScore() {
	if (localStorage.getItem("score") && localStorage.getItem("motsTrouves")) {
		scoreMemoire = parseInt(localStorage.getItem("score"));
		motsTrouvesMemoire = parseInt(localStorage.getItem("motsTrouves"));
		localStorage.removeItem("score");
		localStorage.removeItem("motsTrouves");
		localStorage.setItem(
			"score",
			parseInt(scoreMemoire + coupsRestants * 100 * (motATrouver.length / 2))
		);
		localStorage.setItem("motsTrouves", parseInt(motsTrouvesMemoire));
		scoreTotal.innerHTML = `<p>Score total:</p><p> ${localStorage.getItem(
			"score"
		)} points`;
		motsTrouves.innerHTML = `<p>Mots trouv??s:</p><p> ${localStorage.getItem(
			"motsTrouves"
		)}`;
	} else {
		localStorage.setItem(
			"score",
			parseInt(coupsRestants * 100 * (motATrouver.length / 2))
		);
		localStorage.setItem("motsTrouves", parseInt(0));
	}
}

function effacerScore() {
	//fonction non impl??ment??e dans le DOM pour le moment.
	//Permet de supprimer les donn??es score et nombre de mots trouv??s du navigateur
	localStorage.removeItem("score");
	localStorage.removeItem("motsTrouves");
}
