const burgerKnap = document.querySelector("#burger_knap");

burgerKnap.addEventListener("click", openMenu);

function openMenu() {
    console.log("Åben burgermenu");

    burgerKnap.classList.toggle("open");
    document.querySelector("#menu").classList.toggle("toggle_menu");
}
