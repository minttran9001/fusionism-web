
let tabState = 0
function changeTab(index)
{
    const lastTab =  document.querySelectorAll('.tab-pane')[tabState]
    const nextTab = document.querySelectorAll('.tab-pane')[index]
    const lastNav = document.querySelectorAll('.nav-review-item')[tabState]
    const nextNav = document.querySelectorAll('.nav-review-item')[index]
    nextTab.classList.add('show')
    lastTab.classList.remove('show')
    lastNav.classList.remove('show')
    nextNav.classList.add('show')
    tabState = index
}