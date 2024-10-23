
document.getElementById("bgColor").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});


document.getElementById("fontSize").addEventListener("input", function () {
  document.body.style.fontSize = this.value + "px";
});


document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });


document.getElementById("fontStyle").addEventListener("change", function () {
  document.body.style.fontFamily = this.value;
});
