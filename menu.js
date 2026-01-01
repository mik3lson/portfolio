const menu = document.querySelector(".menu");
const trigger = document.querySelector(".menu-trigger");

trigger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
