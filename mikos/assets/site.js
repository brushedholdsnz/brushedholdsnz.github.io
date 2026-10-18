document.documentElement.classList.add('js');
const header=document.querySelector('.header');
const toggle=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
function closeMenu(){header.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',toggle.dataset.openLabel)}
toggle.addEventListener('click',()=>{const opened=header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?toggle.dataset.closeLabel:toggle.dataset.openLabel)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('menu-open')){closeMenu();toggle.focus()}});
window.matchMedia('(max-width:760px)').addEventListener('change',closeMenu);
