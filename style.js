window.onload=function(){
let last_link=document.getElementById("last_anchor");
let other=document.getElementById("other_links");
let head= document.getElementById("head");
let n=document.querySelector("nav");
let up_arrow_button=document.getElementById("upper_btn");

    last_link.onclick=function(){
        other.style.cssText="top:72px;opacity:1;";
    }
    
head.onclick=function(){
    other.style.cssText="transition-duration:0s ;top:170px;opacity:0;";
}
// prog_one.style.cssText="animaton-name:fandl-range";

window.onscroll=function(){
    if(this.scrollY > 200){
        up_arrow_button.classList.add("show");
    }
    else{
        up_arrow_button.classList.remove("show");

    }
}
up_arrow_button.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })

}
}
