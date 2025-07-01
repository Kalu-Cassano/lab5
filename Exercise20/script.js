const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7IHFPu2nd50&psig=AOvVaw3kuniUgHMlW6uF0XSOltq9&ust=1751447025626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDd-uCmm44DFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mobafire.com%2Fleague-of-legends%2Fskins%2Fsamira&psig=AOvVaw3kuniUgHMlW6uF0XSOltq9&ust=1751447025626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDd-uCmm44DFQAAAAAdAAAAABAL",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.leagueoflegends.com%2Fvi-vn%2Fchampions%2Fsamira%2F&psig=AOvVaw3kuniUgHMlW6uF0XSOltq9&ust=1751447025626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDd-uCmm44DFQAAAAAdAAAAABBH3"
];
let index = 0;
function show() {
    document.getElementById("slide").src = images[index];
}
function next() {
    index = (index + 1) % images.length;
    show();
}
function prev() {
    index = (index - 1 + images.length) % images.length;
    show();
}
setInterval(next, 3000);
