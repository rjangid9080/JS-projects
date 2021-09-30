const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorCode = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    const randomIndex = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomIndex];
    colorCode.textContent = colors[randomIndex];

});