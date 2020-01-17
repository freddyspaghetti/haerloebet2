 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     console.log("getJson");

     const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/program/33";

     //Henter data i filen som er defineret ovenfor
     const jsonData = await fetch(url);

     //Indsætter dataen i mit array
     information = await jsonData.json();

     console.log(information);
     showInformation();
 }


 function showInformation() {
     console.log("Show information");

     document.querySelector(".overskrift").textContent = information.program_og_rute;
     document.querySelector("#distancer .underoverskrift").textContent = information.distancer;
     document.querySelector("#distancer .liste1 li").textContent = information.distance1;
     document.querySelector("#distancer .liste1 li+li").textContent = information.distance2;
     document.querySelector("#programmet .underoverskrift").textContent = information.programmet;
     document.querySelector("#programmet .liste2 li").textContent = information.timing1;
     document.querySelector("#programmet .liste2 li+li").textContent = information.timing2;
     document.querySelector("#programmet .liste2 li+li+li").textContent = information.timing3;
     document.querySelector("#programmet .liste2 li+li+li+li").textContent = information.timing5;
     document.querySelector("#programmet .liste2 li+li+li+li+li").textContent = information.timing4;
     document.querySelector("#programmet .liste2 li+li+li+li+li+li").textContent = information.timing6;
     document.querySelector("#programmet .liste2 li+li+li+li+li+li+li").textContent = information.timing7;
     document.querySelector("#ruten .underoverskrift").textContent = information.om_ruten;


     document.querySelector("#ruten p").textContent = information.om_om_ruten1;
     document.querySelector("#ruten p+p").textContent = information.om_om_ruten2;
     document.querySelector("#ruten p+p+p").textContent = information.om_om_ruten3;

     //indsæt billedet her med REST API//

     document.querySelector("#kort_over_ruten").src = information.kort_over_ruten.guid;
 }
