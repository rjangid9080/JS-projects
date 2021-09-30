// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
const currentYr = new Date().getFullYear();
date.innerHTML=currentYr;
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height=`${linksHeight}px`;
    }
    else{
        linksContainer.style.height=0;
    }
});

// ********** fixed navbar ************
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const navHeight = nav.getBoundingClientRect().height;    
    const scrollHeight=window.pageYOffset;
    if(scrollHeight>navHeight){
        nav.classList.add("fixed-nav");
        topLink.classList.add("show-link");
    }
    else{
        nav.classList.remove("fixed-nav");
        topLink.classList.remove("show-link");
    }
    
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop-navHeight;
        
        if(!nav.classList.contains("fixed-nav")){
            position=position-navHeight;
        }

        if(navHeight>74){
            position=position+containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position
        });
        linksContainer.style.height=0;
    });
});