/*
// traversing the dom
const quesBtns = document.querySelectorAll(".question-btn");

quesBtns.forEach(function(ques){
    ques.addEventListener("click",function(currentBtn){
        const question=currentBtn.currentTarget.parentElement.parentElement;
        /*if(question.classList.contains("show-text")){
            question.classList.remove("show-text");
        }
        else{
            question.classList.add("show-text");
        }
        question.classList.toggle("show-text");
    });
});*/

//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});
