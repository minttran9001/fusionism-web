//Automatically Slide show

const circle = document.querySelectorAll(".circle");
const slider = document.getElementById("slider-auto");
let slide = document.querySelectorAll(".slide");

let interval = 3000;
let index = 1;
const firstClone = slide[0].cloneNode(true);
const lastClone = slide[slide.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider.append(firstClone);
slider.prepend(lastClone);

const slideWidth = slide[index].clientWidth;

slider.style.transform = `translateX(${-slideWidth * index}px)`;

const nextSlide = () => {
  if (index >= slide.length - 1) return;
  if(index - 1 >= circle.length - 1)
  {
    circle[index - 1].classList.remove('is-active')
    circle[0].classList.add('is-active')
  }
  else{
    circle[index - 1].classList.remove('is-active')
    circle[index].classList.add('is-active')
  }
  index++;
  slider.style.transform = `translateX(${-slideWidth * index}px)`;
  slider.style.transition = ".7s";
  clearInterval(interval)
};
const prevSlide = () => {
  if (index <= 0) return;
  if(index - 1 <= 0)
  {
    circle[index - 1].classList.remove('is-active')
    circle[circle.length - 1].classList.add('is-active')
  }
  else{
    circle[index - 1].classList.remove('is-active')
    circle[index - 2].classList.add('is-active')
  }
  index--;

  slider.style.transform = `translateX(${-slideWidth * index}px)`;
  slider.style.transition = ".7s";
  clearInterval(interval)

};
slider.addEventListener("transitionend", () => {
  slide = document.querySelectorAll(".slide");
  if (slide[index].id === firstClone.id) {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slide[index].id === lastClone.id) {
    slider.style.transition = "none";
    index = slide.length - 2;
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  
});
setInterval(() => nextSlide(), interval);
//Draggable slide show
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  let pos = e.pageX - slider.offsetLeft;
  const walk = pos - startX;
  if (walk > 50 || walk < -50) {
    if (walk < 50) {
      nextSlide();
      isDown = false;
    } else {
      prevSlide();
      isDown = false;
    }
  }
});
