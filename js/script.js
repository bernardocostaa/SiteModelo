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

const funcionamentoHTML = document.querySelector('.horario')
if(funcionamentoHTML){
  function funcionamento(){
    const status = funcionamentoHTML.querySelector('span')
    let semana = funcionamentoHTML.dataset.semana.split(',').map(Number)
    let horario = funcionamentoHTML.dataset.horario.split(',').map(Number)
    console.log(semana);
  
    let dataAgora = new Date()
    let diaAgora = dataAgora.getDay()
    let horarioAgora = dataAgora.getUTCHours() - 3
  
    let semanaAberto = semana.indexOf(diaAgora) !== -1
    let horarioAberto = (horarioAgora >= horario[0] && horarioAgora < horario[1])
  
    console.log(semanaAberto,horarioAberto);
    if(semanaAberto && horarioAberto){
      status.innerText = 'Aberto'
      status.classList.add('aberto')
    }
  }
  
  funcionamento()
}


const faqList = document.querySelectorAll('.cada-faq')
if(faqList.length){
  faqList.forEach((item)=>{
    item.addEventListener('click',() =>{
      const faq = item.querySelector('.cada-faq h3')
      const faqp = item.querySelector('.cada-faq p')
      const btnFaq = faq.querySelector('img')
      btnFaq.classList.toggle('ativo')
      faqp.classList.toggle('ativo')
    })
  })
}
