const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const value = document.getElementById("value")
let count = 0;
decreaseBtn.onclick= function(){
 count--;
 value.textContent= count;
 valueColor();
};
increaseBtn.onclick=function(){
    count++;
    value.textContent= count;
    valueColor();
};
resetBtn.onclick=function(){
    count=0;
    value.textContent= count;
    valueColor();
};

function valueColor(){
    if(count<0){
        value.style.color="red";
    }
    else if(count>0){
        value.style.color="green";
    }
    else{
        value.style.color="#222";
    } 
};
/*
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
let count = 0;
btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget);
        const currentBtn = e.currentTarget.classList;
        if(currentBtn.contains("decrease")){
            count--;
        }
        else if(currentBtn.contains("increase")){
            count++;
        } 
        else if(currentBtn.contains("reset")){
            count=0;
        }
        valueColor();
        value.textContent=count;
    });
});*/
// change queryselector to select individual button by id 