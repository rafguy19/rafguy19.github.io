//target all elements to save to constants
const page1btn=document.querySelector("#originsbtn");
const page2btn=document.querySelector("#usesbtn");
const page3btn=document.querySelector("#uesesbtn");
var allpages=document.querySelectorAll(".page");

hideall();

function hideall()
{ //function to hide all pages
    
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}

}

function show(pgno)
{ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});


/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus()
{ /*open and close menu*/
menuItemsList.classList.toggle("menuShow");
}