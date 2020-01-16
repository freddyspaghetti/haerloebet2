 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/tilmelding/7";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.tilmelding_overskrift;
     document.querySelector(".billede").textContent = information.billede;
     document.querySelector(".underoverskrift").textContent = information.tilmeld_her;
     document.querySelector(".link").href = information.tilmeldingslink;
     document.querySelector(".underoverskrift_2").textContent = information.praktisk_info;
     document.querySelector(".liste").textContent = information.pris_punkt1;
     document.querySelector(".liste").textContent = information.pris_punkt2;
     document.querySelector(".liste").textContent = information.pris_punkt3;
     document.querySelector(".txt").textContent = information.inkluderet_i_prisen;
     document.querySelector(".liste").textContent = information.inkluderet_punkt1;
     document.querySelector(".liste").textContent = information.inkluderet_punkt2;
     document.querySelector(".liste").textContent = information.inkluderet_punkt3;
 }
