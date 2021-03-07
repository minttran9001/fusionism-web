//Display search box
const searchBtn = document.querySelector("#search");
const closeBtn = document.querySelector(".search-close");

const searchBox = document.querySelector(".offcanvas-search-wrapper");
const openSearchBox = () => {
  searchBox.classList.add("show");
};
const closeSearchBox = () => {
  searchBox.classList.remove("show");
};
searchBtn.addEventListener("click", openSearchBox);
closeBtn.addEventListener("click", closeSearchBox);

//Dispay cart sidebar

const cartBtn = document.querySelector("#cart");
const closeCartBtn = document.querySelector(".cart-close");
const cartBg = document.querySelector(".cart-background-close");
const cartSidebar = document.querySelector(".offcanvas-cart-wrapper");

const openCartSidebar = () => {
  cartSidebar.classList.add("show");
};
const closeCartSidebar = () => {
  cartSidebar.classList.remove("show");
};

cartBtn.addEventListener("click", openCartSidebar);
closeCartBtn.addEventListener("click", closeCartSidebar);
cartBg.addEventListener("click", closeCartSidebar);
//Display and handle scroll to top button
const scrollBtn = document.querySelector(".scroll-top")

window.onscroll = function() {scrollFunction()};
function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.opacity = "1";
    } else {
      scrollBtn.style.opacity = "0";
    }
}
scrollBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
});
