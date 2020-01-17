 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/om/101";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.om_haerloebet;

     document.querySelector("p").textContent = information.om_tekst1;
     document.querySelector("p+p").textContent = information.om_tekst2;
     document.querySelector("p+p+p").textContent = information.om_tekst3;



 }
