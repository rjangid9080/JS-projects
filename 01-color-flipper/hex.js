const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorCode = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    const code=resultCode();
    document.body.style.backgroundColor=`#${code}`;
    colorCode.textContent=`#${code}`;

});
function resultCode(){
    let code = '';
    for(let i=0;i<6;i++){
        code +=hex[Math.floor(Math.random()*hex.length)];
    }
    return code;
}
