// side menu close
var hidee = document.getElementById("menu-close")
var hidden = document.getElementById("side-menu")
hidee.addEventListener("click",function(){
    hidden.style.marginLeft="0px"
}
    )
var mclose=document.getElementById("menuclose")
mclose.addEventListener("click",function(){
    hidden.style.marginLeft="-60%"
})
// side nav close
var sidenav = document.getElementById("side-navbar")
var navlist = document.querySelector(".nav-menu-btn")
navlist.addEventListener("click",function(){
    sidenav.style.marginTop="0px"
})
var navclose = document.getElementById("nav-close")
navclose.addEventListener("click",function(){
    sidenav.style.marginTop="-60%"
})
