const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector("#nav");
  nav.classList.toggle("ativo");
  btnMobile.classList.toggle('ativo')
  if(nav.classList.contains('ativo')){
    document.body.classList.add('no-scroll')
  }else{
    document.body.classList.remove('no-scroll')
  }
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

const servicoDesktop = document.querySelector('.servi');
const dropdown = document.querySelector('.dropdown');

// Event listener para abrir e fechar o dropdown
servicoDesktop.addEventListener('click', (event) => {
  // Evita que o evento de clique se propague para o body
  event.stopPropagation();

  // Verifique se o elemento clicado está dentro do dropdown
  if (dropdown.contains(event.target)) {
    dropdown.classList.add('ativo');
  } else {
    dropdown.classList.toggle('ativo');
  }
});

// Event listener para fechar o dropdown quando se clica fora dele
document.addEventListener('click', (event) => {
  // Verifique se o dropdown está aberto e se o clique não ocorreu dentro do dropdown
  if (dropdown.classList.contains('ativo') && !dropdown.contains(event.target)) {
    dropdown.classList.remove('ativo');
  }
});


const liMenu = document.querySelectorAll('.li-drop');

liMenu.forEach((item) => {
  item.addEventListener('click', () => {
    liMenu.forEach((menuItem) => {
      menuItem.classList.remove('ativo');
    });
    item.classList.add('ativo');
  });
});