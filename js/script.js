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



window.addEventListener('scroll',()=>{
    const menuFixed = document.querySelector('.menu-bar')
    if(document.documentElement.scrollTop > 25){
        menuFixed.classList.add('fixedMenu')
    }else{
        menuFixed.classList.remove('fixedMenu')
    }
})

const servicoDesktop = document.querySelector('.servi');
const dropdown = document.querySelector('.dropdown');
const liMenu = document.querySelectorAll('.li-drop');

servicoDesktop.addEventListener('click', (event) => {
  event.stopPropagation();

  if (dropdown.contains(event.target)) {
    dropdown.classList.add('ativo');
  } else {
    dropdown.classList.toggle('ativo');
  }


});

document.addEventListener('click', (event) => {

  if (dropdown.classList.contains('ativo') && !dropdown.contains(event.target)) {
    dropdown.classList.remove('ativo');
      liMenu.forEach((item)=>{
    item.classList.remove('ativo')
  })
  }
});




liMenu.forEach((item) => {
  item.addEventListener('click', () => {
    liMenu.forEach((menuItem) => {
      menuItem.classList.remove('ativo');
    });
    item.classList.add('ativo');
  });
});

function funcionamento(){
  const funcionamento = document.querySelector('.horario')
  const status = funcionamento.querySelector('span')
  let semana = funcionamento.dataset.semana.split(',').map(Number)
  let horario = funcionamento.dataset.horario.split(',').map(Number)
  console.log(semana);

  let dataAgora = new Date()
  let diaAgora = dataAgora.getDay()
  console.log(diaAgora);
  let horarioAgora = dataAgora.getUTCHours() - 3

  let semanaAberto = semana.indexOf(diaAgora) !== -1
  let horarioAberto = (horarioAgora >= horario[0] && horarioAgora < horario[1])

  console.log(semanaAberto,horarioAberto);
  if(semanaAberto && horarioAberto){
    status.innerText = 'Aberto'
    status.classList.add('aberto')
    console.log('ssss');
  }
}

funcionamento()

