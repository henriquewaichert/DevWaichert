let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let nav = document.querySelector('nav')


trilho.addEventListener('click', ()=>{
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  nav.classList.toggle('dark')
})

const abaMenu = document.querySelector('.aba-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#Close-menu');
const closemenu = document.querySelector('.close-menu');

abaMenu.addEventListener('click', () => {
    trilho.classList.add('esconder-bolinha');
    menu.style.display = 'block';
    closeMenu.style.display = 'block';
    closemenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  if (window.innerWidth >= 320 && window.innerWidth <= 479) {
      trilho.classList.remove('esconder-bolinha'); 
      menu.style.display = 'none'; 
      closeMenu.style.display = 'none'; 
  }
});

closemenu.addEventListener('click', () => {
  trilho.classList.remove('esconder-bolinha');
  menu.style.display = 'none';
  closemenu.style.display = 'none';
});

