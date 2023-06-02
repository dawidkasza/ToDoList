console.log("Hello World!");

let changeColorButton = document.querySelector(".js-changeColorButton");
let body = document.body;
let colorName = document.querySelector(".js-colorName");
changeColorButton.addEventListener("click", ()=>{
    body.classList.toggle("body--dark");
    colorName.innerText = body.classList.contains("body--dark") ? "jasny":"ciemny";
})