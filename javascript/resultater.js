 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/resultater/69";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.resultater;
     document.querySelector("#resultat_billede").src = information.resultat_billede.guid;
     document.querySelector(".link").href = information.resultat_for_2018;
     document.querySelector(".link").href = information.resultat_for_2016;
     document.querySelector(".link").href = information.resultat_for_2015;
 }
