const search = document.querySelector(".search");
const toggledInput = document.querySelector(".input");
const btn = document.querySelector(".btn");
const body = document.querySelector(".body1");
btn.addEventListener("click", ()=>{
    search.classList.toggle("active");
    toggledInput.focus();  
    body.classList.toggle("white")
    search.value = "";
})