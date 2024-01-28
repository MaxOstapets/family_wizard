const manName = document.querySelector('.manName')
const womanName = document.querySelector('.womanSame')

const manSalarie = document.querySelector('.manSalarie')
const womanSalarie = document.querySelector('.womanSalarie')
const salarie = document.querySelectorAll('.salarie')

const usersObject = {}

const accept = document.querySelector('.accept')
const nextPage = document.querySelector('.nextPage')

const check = /[a-zA-Zа-яА-Я,./*+?^${}()]/

let sumSalaries = 0
let titleSumSalarie = 0

// SALARIE CHECK-------------------------------------
function salarieCheck() {
    const manSalarieVal = parseFloat(manSalarie.value)
    const womanSalarieVal = parseFloat(womanSalarie.value)

    usersObject.manName = manName.value
    usersObject.womanName = womanName.value
    usersObject.manSalarie = manSalarieVal
    usersObject.womanSalarie = womanSalarieVal

    sumSalaries = manSalarieVal + womanSalarieVal
    titleSumSalarie = manSalarieVal + womanSalarieVal

    salarie.forEach((el) => (el.style.cssText = 'border-bottom: 3px solid #004225; color: #004225'))
}

function salarieNull() {
    salarie.forEach((el) => (el.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000'))
}

salarie.forEach((el) => {
    el.addEventListener('input', () => {
        check.test(el.value) ? salarieNull() : salarieCheck()
    })
})

// ACCEPT CLICK-------------------------------------
accept.addEventListener('click', () => {
    localStorage.setItem('informationUsers', JSON.stringify(usersObject))
    localStorage.setItem('totalSum', JSON.stringify(sumSalaries))
    localStorage.setItem('titleSumSalarie', JSON.stringify(titleSumSalarie))
    nextPage.setAttribute('href', '../profile/profile.html')
})