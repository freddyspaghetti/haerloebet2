//Definerer variablen hvor alle vores posts kommer ind i et array
let sponsor = [];

let imgCount = 0;

//Definerer destinationen hvor hver article skal sættes ind
const dest = document.querySelector(".sponsorer");

//Definerer templaten hvor som hver øl post skal følge
const temp = document.querySelector("template");

document.addEventListener("DOMContentLoaded", start);

function start() {
    getJson();
    search();
}

async function getJson() {
    console.log("getJson");

    const url = "http://freddyspaghetti.dk/haerloebet/wordpress/wp-json/wp/v2/sponsorer?per_page=100";

    //Henter data i filen som er defineret ovenfor
    const jsonData = await fetch(url);

    //Indsætter dataen i mit array
    sponsor = await jsonData.json();

    console.log(sponsor);
    showSponsor();
}

function showSponsor() {
    console.log("VIS-SPONSOR");
    dest.innerHTML = "";
    //For hvert array objekt skriver jeg dataen ind i en template
    sponsor.forEach(sponsor => {

                if (kategori == "alle" || kategori == sponsor.kategori) {

                    const klon = temp.cloneNode(true).content;

                    klon.querySelector(".sponsornavn").textContent = sponsor.sponsor;
                    klon.querySelector(".sponsor_img").src = sponsor.sponsorbillede.guid;
                    klon.querySelector(".sponsor_img").alt = sponsor.alt_tag;
                    klon.querySelector(".beskrivelse").textContent = sponsor.beskrivelse;



                    document.querySelectorAll(".sponsor_img").forEach(billede => {
                        billede.addEventListener("load", () => {
                            imgCount++;
                            console.log("Antal billeder loadet: " + imgCount);
                            billede.style.zIndex = "10";

                            if (imgCount === sponsor.length) {
                                console.log("Alle billeder loaded");
                                document.querySelectorAll(".loader").forEach(loader => {
                                    loader.style.display = "none";
                                })

                            } else if (imgCount > sponsor.length) {
                                document.querySelectorAll(".loader").forEach(loader => {
                                    loader.style.display = "none";
                                })

                            }
                        });


                    })
                }
