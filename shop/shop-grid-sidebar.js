const slider = document.getElementById('range-input')
const selectorBtn = document.getElementById('selector')
const selectedPrice = document.getElementById('selected-value')
const progressPrice = document.getElementById('price-progress')
selectedPrice.innerHTML = slider.value

slider.oninput = function (){
    selectedPrice.innerHTML = this.value

    selectorBtn.style.left=this.value + '%'
    progressPrice.style.width=this.value + '%'
    
}

const filterBtn = document.querySelector('.open-filter')
const closeFilter = document.querySelector('.close-filter')
filterBtn.addEventListener('click',()=>{
    document.querySelector('.shop-filter-sidebar').classList.add('is-active')
})
closeFilter.addEventListener('click',()=>{
    document.querySelector('.shop-filter-sidebar').classList.remove('is-active')

})
const gridBtn = document.querySelector('.view-in-grid')
const listBtn =document.querySelector('.view-in-list')
listBtn.addEventListener('click',()=>{
    const viewIn = document.querySelector('.product-container')
    viewIn.classList.remove('product-grid-view')
    viewIn.classList.add('product-list-view')
    gridBtn.classList.remove('is-active')
    listBtn.classList.add('is-active')

})
gridBtn.addEventListener('click',()=>{
    const viewIn = document.querySelector('.product-container')
    viewIn.classList.add('product-grid-view')
    viewIn.classList.remove('product-list-view')
    gridBtn.classList.add('is-active')
    listBtn.classList.remove('is-active')
})