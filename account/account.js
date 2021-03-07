let state = 0
const changeMenu = (index)=>{
    const lastTab =  document.querySelectorAll('.tab-item')[state]
    const lastContent = document.querySelectorAll('.account-content')[state]
    const tab = document.querySelectorAll('.tab-item')[index]
    const content = document.querySelectorAll('.account-content')[index]
    lastContent.classList.remove('selected')
    lastTab.classList.remove('selected')
    tab.classList.add('selected')
    content.classList.add('selected')
    state = index
}