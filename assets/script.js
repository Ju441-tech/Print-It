const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/******************Création des flèches**********/

	const bannerDiv=document.getElementById("banner");
	const arrowLeft=document.createElement("img");
	const arrowRight=document.createElement("img");
	

	arrowLeft.setAttribute("class", "arrow arrow_left");
	arrowRight.setAttribute("class","arrow arrow_right");
	arrowLeft.setAttribute("src","./assets/images/arrow_left.png");
	arrowRight.setAttribute("src","./assets/images/arrow_right.png");
	bannerDiv.appendChild(arrowLeft);
	bannerDiv.appendChild(arrowRight);
/************************************************** */
/*****Etape 2: Création des  eventlistners******* */
/**************************************************** */
	function flecheGauche(){
		alert("Vous avez appuyé sur la flèche gauche");
		
	}
	function flecheDroite(){
		alert("Vous avez appuyé sur la flèche droite");
		

			
	}
	arrowLeft.addEventListener("click",  placeBulletPointLeft);
	
	arrowRight.addEventListener("click", placeBulletPointRIght);
/********************************************************************************************************************************* */
/****************Etape 3: création bulletPoints le if construit pointsplein si i==indice slider, le else construit un point vide************** */
/*************************************************************************************************************************************** */
const dotsDiv=document.getElementsByClassName("dots");
let counterImage=0; /*****Counter est la variable indispensable pou faire fonctionner et varier la suite */
function bulletPoints(){
	/***on essaie de rajouter le pointSelected  (factice) dans if de boucle for qui suit**/
	for(let i=0;i<slides.length;i++){
		const point=document.createElement("div");
		point.setAttribute("id","dot"+i);
		if (i===counterImage){			
			point.setAttribute("class","dot dot_selected");			
		}else{				
			point.setAttribute("class","dot");
			/*On ajoute un setAttribute pour mettre une id différente pour identifier chaque point TRES IMPORTANT POUR LA SUITE !!!!*****/			
		}
		dotsDiv[0].append(point)};
		/*****************tous les points créés (ainsi que le point plein représentent désormais des divs qui ont une id "dot0", "dot1", "dot2"..
		 * .que l'on pourra exploiter individuellement, grâce à un setAttribute supplémentaire ("id","dot"+i) qui donne par exemple id:dot0;
		 * ****************** */
	};
bulletPoints();/*****On appelle la fonction pour faire apparaitre les  bulletPoints****** */

/**************************************************** */
/*****Etape 4 : modifier le slide au click du bouton */
/*************************************************** */
function placeBulletPointRIght1(){
	counterImage++;
	/****Traitement des bulletsPoints************ */
	const pointSelected=document.getElementById("dot"+counterImage);/**on créer un nouveau pointPlein qui sera à droite du précédent */
	pointSelected.setAttribute("class","dot dot_selected");
	const pointVide =document.getElementById("dot"+(counterImage-1));/**On remplace le point plein précédent par un pointVide */
	pointVide.setAttribute("class","dot");
	/***********Traitement des images************** */
	const acceuilImg=document.getElementById("acceuilImg");/******on appelle l'élément img  */
	acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);/*****puis, pour changer cette image, on lui change son attribut src */
	/**********Traitement des tags (textes********) */
	const acceuilTag=document.getElementById("acceuilTag");
	acceuilTag.innerHTML=slides[counterImage].tagLine;
};
function placeBulletPointLeft2(){
	counterImage--;
	const pointSelected=document.getElementById("dot"+counterImage);
	pointSelected.setAttribute("class","dot dot_selected");
	const pointVide =document.getElementById("dot"+(counterImage+1));
	pointVide.setAttribute("class","dot");
	/***************************************************** */
	const acceuilImg=document.getElementById("acceuilImg");
		acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);
	/******************************************************** */
	const acceuilTag=document.getElementById("acceuilTag");
		acceuilTag.innerHTML=slides[counterImage].tagLine;

};
/******************************************************************************** */
/********Etape5 : Mettre en place le défilement infini (if...else) */
/***************************************************************** */

function placeBulletPointRIght(){
	const acceuilImg=document.getElementById("acceuilImg");
	const acceuilTag=document.getElementById("acceuilTag");
	if (counterImage<slides.length-1){
	counterImage++;
	const pointSelected=document.getElementById("dot"+counterImage);
	pointSelected.setAttribute("class","dot dot_selected");
	const pointVide =document.getElementById("dot"+(counterImage-1));
	pointVide.setAttribute("class","dot");
	acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);	
	acceuilTag.innerHTML=slides[counterImage].tagLine;
	}else{
		counterImage=0;
		const pointSelected=document.getElementById("dot"+counterImage);
		pointSelected.setAttribute("class","dot dot_selected");
		const pointVide =document.getElementById("dot"+(slides.length-1));/***********Attention!!!! C'était à modifier!!! ("dot"+(3)) */
		pointVide.setAttribute("class","dot");
		acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);
		acceuilTag.innerHTML=slides[counterImage].tagLine;
	};
};



function placeBulletPointLeft(){
	const acceuilImg=document.getElementById("acceuilImg");
	const acceuilTag=document.getElementById("acceuilTag");
	if (counterImage>+0){
	counterImage--;
	const pointSelected=document.getElementById("dot"+counterImage);
	pointSelected.setAttribute("class","dot dot_selected");
	const pointVide =document.getElementById("dot"+(counterImage+1));
	pointVide.setAttribute("class","dot");
		acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);
		acceuilTag.innerHTML=slides[counterImage].tagLine;
	}else{
		counterImage=3;
		const pointSelected=document.getElementById("dot"+counterImage);
	pointSelected.setAttribute("class","dot dot_selected");
	const pointVide =document.getElementById("dot0");/******Là aussi, valeur à changer on passe à 0 donc "dot0"!!!!!!! */
	pointVide.setAttribute("class","dot");
		acceuilImg.setAttribute("src","./assets/images/slideshow/"+slides[counterImage].image);
		acceuilTag.innerHTML=slides[counterImage].tagLine;
		
	}

};
