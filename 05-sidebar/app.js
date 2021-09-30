const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".main-container");

toggleBtn.onclick= function () {
   if (sidebar.classList.contains("show-sidebar")) {
     sidebar.classList.remove("show-sidebar");
     removeGrey(container);
     
   } else {
     sidebar.classList.add("show-sidebar");
     if(window.innerWidth<600){
      container.classList.add("grey");
     }
   }
};

closeBtn.onclick=function () {
  sidebar.classList.remove("show-sidebar");
  removeGrey(container);
};

document.body.onclick=function(e){
  if(sidebar.classList.contains("show-sidebar") && e.target.classList.contains("main-container")){
    sidebar.classList.remove("show-sidebar");
    removeGrey(container);
  }
};

function removeGrey(item){
  if(item.classList.contains("grey")){
    item.classList.remove("grey");
  }
}
// in responsiv view make sure the sidebar width is half the viewports width 
// now darken the nonsidebar half with grey background and opacity = 0.5
// now on clicking the nonsidebar half the sidebar closes 