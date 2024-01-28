const man_name = document.querySelector('.man_name')
const woman_name = document.querySelector('.woman_name')

const man_salarie = document.querySelector('.man_salarie')
const woman_salarie = document.querySelector('.woman_salarie')
const salarie = document.querySelectorAll('.salarie')

const users_object = {}

const accept = document.querySelector('.accept')
const next_page = document.querySelector('.next_page')

const check = /[a-zA-Zа-яА-Я,./*+?^${}()]/
          
let sum_salaries = 0
let title_sum_salarie = 0

const users_str = localStorage.getItem('information_users')
const users = JSON.parse(users_str)
man_name.value = `${users.man_name}` 
woman_name.value = `${users.woman_name}`
man_salarie.value = `${users.man_salarie}`
woman_salarie.value = `${users.woman_salarie}`

//SALARIE CHECK-------------------------------------
function salarie_check(){
    const man_salarie_val = parseFloat(man_salarie.value)
    const woman_salarie_val = parseFloat(woman_salarie.value)

    users_object.man_name = man_name.value
    users_object.woman_name = woman_name.value
    users_object.man_salarie = man_salarie_val
    users_object.woman_salarie = woman_salarie_val

    sum_salaries = man_salarie_val + woman_salarie_val
    title_sum_salarie = man_salarie_val + woman_salarie_val

    salarie.forEach((el) => el.style.cssText = 'border-bottom: 3px solid #004225; color: #004225')
}

function salarie_null(){
    salarie.forEach((el) => el.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000')
    console.log("ERROR SALARIE") 
}

salarie.forEach((el) => {el.addEventListener('input', ()=>{check.test(el.value) ? salarie_null() : salarie_check()})})

//ACCEPT CLICK-------------------------------------
accept.addEventListener('click', ()=>{
    localStorage.setItem('information_users', JSON.stringify(users_object))
    localStorage.setItem('total_sum', JSON.stringify(sum_salaries))
    localStorage.setItem('title_sum_salarie', JSON.stringify(title_sum_salarie))
    console.log("Users info:", users_object);
    document.querySelector('.next_page').setAttribute('href', '../profile/profile.html')
})