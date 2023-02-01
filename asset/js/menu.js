const btnmenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");

btnmenu.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

