const heading = document.getElementById("heading");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
    heading.innerText = "Hello, JavaScript!";
});
