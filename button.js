const button = document.getElementById("formButton");
const form = document.getElementById("myForm");

button.addEventListener("click", function() {
    form.style.display = "block";
    button.style.display = "none";
});