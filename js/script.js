const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector("#nav");
  nav.classList.toggle("ativo");
  btnMobile.classList.toggle('ativo')
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);



window.addEventListener('scroll',(event)=>{
    const menuFixed = document.querySelector('.menu-bar')
    if(document.documentElement.scrollTop > 25){
        menuFixed.classList.add('fixedMenu')
    }else{
        menuFixed.classList.remove('fixedMenu')
    }
   
    
})