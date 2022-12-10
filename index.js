const Outer1=document.querySelector(".outer1");
const androidLogo=document.querySelector(".fa-android");

const Outer2=document.querySelector(".outer2");
const appStore=document.querySelector(".fa-app-store-ios");

const Outer3=document.querySelector(".outer3");
const apple=document.querySelector(".fa-apple");

const Outer4=document.querySelector(".outer4");
const windows=document.querySelector(".fa-windows");

const Outer5=document.querySelector(".outer5");
const linux=document.querySelector(".fa-linux");

const Outer6=document.querySelector(".outer6");
const penguine=document.querySelector(".penguine");

const Outer7=document.querySelector(".outer7");
const chromeIcon=document.querySelector(".fa-chrome");

const Outer8=document.querySelector(".outer8");
const firefoxIcon=document.querySelector(".fa-firefox-browser");

const Outer9=document.querySelector(".outer9");
const edgeIcon=document.querySelector(".fa-edge")

Outer1.addEventListener("mouseover",()=>{
     androidLogo.classList.toggle("green");
     
})

Outer2.addEventListener("mouseover",()=>{
    appStore.classList.toggle("blue")
})

Outer3.addEventListener("mouseover",()=>{
    apple.classList.toggle("red");
})

Outer4.addEventListener("mouseover",()=>{
    windows.classList.toggle("windows_yellow");
    
})

Outer5.addEventListener("mouseover",()=>{
    linux.classList.toggle("yellow");
})

Outer6.addEventListener("mouseover",()=>{
    penguine.classList.toggle("yellow")
})

Outer7.addEventListener("mouseover",()=>{
    chromeIcon.classList.toggle("greenyellow")
})

Outer8.addEventListener("mouseover",()=>{
    firefoxIcon.classList.toggle("orangered")
})

Outer9.addEventListener("mouseover",()=>{
    edgeIcon.classList.toggle("skyblue")
})