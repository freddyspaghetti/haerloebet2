 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/tilmelding";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }
