 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/stoet/82";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.stoet;
     document.querySelector("#stoet_billede").src = information.stoet_billede.guid;
     document.querySelector("p").textContent = information.stoet_haerloebet;
     document.querySelector("p+p").textContent = information.stoet_haerloebet2;
     document.querySelector("#mobilepay .underoverskrift_2").textContent = information.mobilepay;
     document.querySelector("#mobilepay p").textContent = information.nummer_til_mobilepay;
     document.querySelector("#bank .underoverskrift_2").textContent = information.bankoplysninger;
     document.querySelector("#bank p").textContent = information.regnr;
     document.querySelector("#bank p+p").textContent = information.kontonr;

     document.querySelector("#spred .underoverskrift_2").textContent = information.spred_budskabet;
     document.querySelector("#spred p").textContent = information.spred_budskabet_tekst;

 }
