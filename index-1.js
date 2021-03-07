// Slide show mobile devices
let slideState = 0;

const swipeSlideshow = (index) => {
  if (!index) {
    index = 0;
  }
  if(slideState!==index)
  {
    const swipeNext = document.querySelectorAll(".swipe")[index];
    const imageWrapperNext = document.querySelectorAll('.img-wrapper')
    const swipePrev = document.querySelectorAll(".swipe")[slideState];
    const textWrapperNext = document.querySelectorAll(".text-wrapper")[index];
    const textWrapperPrev = document.querySelectorAll(".text-wrapper")[slideState];

    imageWrapperNext[slideState].classList.remove('is-active')
    imageWrapperNext[index].classList.add('is-active')

    textWrapperNext.classList.add('is-active');
    textWrapperPrev.classList.remove('is-active');

    swipeNext.classList.add('is-active');
    swipePrev.classList.remove('is-active');
  }
  slideState = index
}
const autoSlideshow = ()=>{
    const imageWrapperNext = document.querySelectorAll('.img-wrapper')

  const textWrapperArr = document.querySelectorAll(".text-wrapper")
  const textWrapper = document.querySelectorAll(".text-wrapper")
  const swipe = document.querySelectorAll(".swipe");
  if(slideState < textWrapperArr.length - 1)
  {    
    imageWrapperNext[slideState].classList.remove('is-active')
    imageWrapperNext[slideState+1].classList.add('is-active')
    swipe[slideState].classList.remove('is-active')
    swipe[slideState + 1].classList.add('is-active')
    textWrapper[slideState].classList.remove('is-active')
    textWrapper[slideState + 1].classList.add('is-active')
    slideState +=1
  }
  else{
          
    imageWrapperNext[slideState].classList.remove('is-active')
    imageWrapperNext[0].classList.add('is-active')
    swipe[slideState].classList.remove('is-active')
    swipe[0].classList.add('is-active')
    textWrapper[slideState].classList.remove('is-active')
    textWrapper[0].classList.add('is-active')
    slideState=0
  }
}

setInterval(()=>{
   autoSlideshow()
},3000)