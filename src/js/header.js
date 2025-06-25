const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerNavListElm = document.querySelector('[data-menu-nav-list]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});

burgerNavListElm.addEventListener('click', e => {
    if (e.target.tagName === 'A') { 
      burgerMenuEl.dataset.visible = 'close';  
    }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1199) { 
    burgerMenuEl.dataset.visible = 'close';  
  }
})

