 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/kontakt/109";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.kontakt;
     document.querySelector("#kontakt_billede").src = information.billede.guid;
     document.querySelector("#information .underoverskrift_2").textContent = information.kontaktinformation;
     document.querySelector("#information .txt").textContent = information.kontaktinformation_tekst;
     document.querySelector("#medier .underoverskrift_2").textContent = information.follow;
     document.querySelector("#medier .txt").textContent = information.follow_tekst;

 }
