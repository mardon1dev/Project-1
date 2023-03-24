const images = document.querySelectorAll(".image");

images.forEach(image=>{
  image.addEventListener("click", ()=>{
    removeActivePanles();
    image.classList.add("active")
  })
});

function removeActivePanles() {
  images.forEach(image=>{
    image.classList.remove("active")
  })
};