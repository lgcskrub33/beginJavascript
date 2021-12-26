// const h1=document.getElementById("something");

// const hellos = document.getElementsByClassName("hello");

// const h1 = document.getElementsByTagName("h1");

// const h1 = document.querySelector("#hello");
// const h1 = document.getElementById("hello");


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}




// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }

h1.addEventListener("click",handleTitleClick);

// function handleh1Click(){
//     const currentColor = h1.style.color;
//     let newColor;

//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleh1Click);

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gon!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL GOOD");
// }



// h1.onclick = handleh1Click;
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave",handleMouseLeave);


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);