//jshint esversion: 6
// ScrollReveal().reveal('.main');
//loader screen

const loader=$(".loader")[0];
const main=$(".main")[0];
const body=document.getElementsByTagName('body')[0];
document.addEventListener("DOMContentLoaded",()=>{
    loader.style.display="none";
    // body.style.height="unset";
    body.style.visibility="visible";
    body.style.overflow="unset";
    body.style.overflowX="hidden";
    main.style.animation="bump 0.5s 1";
});

// const main=$(".main")[0];
// main.style.transform="translateY(0px)";
// main.style.opacity="1";
//hiding the psedoplaceholder while typing
const text=$(".text")[0];
const searchbar=$(".type1")[0];

searchbar.addEventListener("focusin",function(){
    text.style.visibility="hidden";
});
searchbar.addEventListener("focusout",function(){
    text.style.visibility="visible";
    if(searchbar.value!=""){
        text.style.visibility="hidden";
    }
});

//clicking he burger animation and opening menu
const brg=$(".burger")[0];
const expand=$(".expand")[0];
const menu=$(".menu")[0];
var clicked=false;

expand.addEventListener("click",function(){
    if(clicked==false){
        clicked=true;
        // menu.style.visibility="visible";
        menu.classList.add("opened");
        brg.classList.add("exp");
        document.getElementsByTagName('body')[0].addEventListener("wheel",function(){
            menu.classList.remove("opened");
            brg.classList.remove("exp");
            clicked=false;
        });

    }else{
        clicked=false;
        menu.classList.remove("opened");
        brg.classList.remove("exp");
        let initWidth=$(document.body).innerWidth();
    }
});

//navbar change after scrolling
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("nav").style.top = "0";
//     } else {
//         document.getElementById("nav").style.top = "-8vh";
//     }
//     prevScrollpos = currentScrollPos;
// };

//image change of hero div
const link1="https://images.pushsquare.com/c46c7bb54c4c3/horizon-zero-dawn-ps4-playstation-4.original.jpg";
const link2="https://data1.origin.com/content/dam/originx/web/app/programs/Download/aboutorigin_3840x2160_battlefield1.jpg";
const link=[link1,link2];
const heroImg=$(".heroImg");
let imgInd=0;
setInterval(()=>{
    heroImg.attr('src',link[imgInd]);
    imgInd=imgInd+1;
    if(imgInd==link.length){
        imgInd=0;
    }
},2000);

//changing sign in sign up in menu
const signin=$(".col-6")[0];
const signup=$(".col-6")[1];
const swich=$(".switch")[0];
signin.addEventListener("click",()=>{
    swich.style.left="0";
    swich.style.right="50%";
});
signup.addEventListener("click",()=>{
    swich.style.left="50%";
    swich.style.right="0";
});