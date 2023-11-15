let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

})

menuLinks.forEach(function(el){
  
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

  })
})

