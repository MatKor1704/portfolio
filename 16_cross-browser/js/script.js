let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("header__nav--active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("header__nav--active");
})

 document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})

document.querySelector(".header__btn").addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("form__active");
    this.classList.add("active");
  })
document.querySelector(".form-close").addEventListener("click", function() {
     let form = document.querySelector(".form");
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__btn").classList.remove("active")
  });
  
document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".header__search")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__btn").classList.remove("active")
    }
  })

document.querySelectorAll('.how__button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how__button').forEach(function(btn){
    btn.classList.remove('how__button--active')});
    e.currentTarget.classList.add('how__button--active');

    document.querySelectorAll('.how__article').forEach(function(tabsBtn){
    tabsBtn.classList.remove('how__article--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__article--active');
    });
});

const swiper = new Swiper('.hero__swiper', {
  a11y: {
    paginationBulletMessage: 'буллет слайдера',
  },
    slidesPerView: 1,
    loop: true,
    speed:300,
    pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    },
    });

document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
     triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
      
    collapse: true
    });
    })
    
    
        