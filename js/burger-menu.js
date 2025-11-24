const burgerMenu = document.querySelector(".burger-menu");
const modal = document.querySelector(".backdrop");
const btn_close_backdrop = document.querySelector(".btn-close-backdrop")

burgerMenu.addEventListener("click", () => {
    modal.classList.toggle("is-hidden");
});
btn_close_backdrop.addEventListener("click", () => {
    modal.classList.toggle("is-hidden");
});
