//Display mobile menu
const menu = document.querySelector(".nav-btn");
const hamburger = document.querySelector('.hamburger-menu')
const mobileMenu = () => {
  menu.classList.toggle("isOpen");
  hamburger.classList.toggle("isOpen");
};



//Onscroll Header
  function handleScroll() {
    if (window.scrollY >= 100 && window.scrollY<=200) {
      document.querySelector('#header-included').classList.add('scrollHeader')
    } 
    else if(window.scrollY>=200)
    {
      document.querySelector('#header-included').classList.add('reached')
      document.querySelector('#header-included').classList.remove('scrollHeader')

    }
    else {
      document.querySelector('#header-included').classList.remove('scrollHeader')
      document.querySelector('#header-included').classList.remove('reached')

    }
  }
window.addEventListener('scroll',handleScroll)
////

