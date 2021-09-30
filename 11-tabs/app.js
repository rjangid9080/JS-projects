const aboutContainer = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

aboutContainer.addEventListener("click",function(event){
    const id = event.target.dataset.id;
    if(id){
        tabBtns.forEach(function(btn){
            btn.classList.remove("active");
            event.target.classList.add("active");
        });
        content.forEach(function(e){
            e.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
    }
});