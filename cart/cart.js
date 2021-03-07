
const descrease = (index)=>{
    const quantityBox = document.querySelectorAll('.pro-qty')[index]
    const currentValue =  parseInt(quantityBox.querySelector('.input-qty').value)

    quantityBox.querySelector('.input-qty').value = parseInt(currentValue - 1)}
const inscrease = (index)=>{
    const quantityBox = document.querySelectorAll('.pro-qty')[index]
    const currentValue =  parseInt(quantityBox.querySelector('.input-qty').value)

    quantityBox.querySelector('.input-qty').value = parseInt(currentValue + 1)
    
}