const man_name = document.querySelector('.man_name')
const woman_name = document.querySelector('.woman_name')

const man_salarie = document.querySelector('.man_salarie')
const woman_salarie = document.querySelector('.woman_salarie')
const salarie = document.querySelectorAll('.salarie')

const users_object = {}

const accept = document.querySelector('.accept')
const next_page = document.querySelector('.next_page')

const objective = document.querySelectorAll('.inp2')
const sum = document.querySelectorAll('.sum')

const users_objectives = []
const objectives = []
const sums = []

const check = /[a-zA-Zа-яА-Я,./*+?^${}()]/
          
let sum_salaries = 0

//SALARIE CHECK-------------------------------------
function salarie_check(){
    const man_salarie_val = parseFloat(man_salarie.value)
    const woman_salarie_val = parseFloat(woman_salarie.value)

    users_object.man_name = man_name.value
    users_object.woman_name = woman_name.value
    users_object.man_salarie = man_salarie_val
    users_object.woman_salarie = woman_salarie_val

    sum_salaries = man_salarie_val + woman_salarie_val

    salarie.forEach((el) => el.style.cssText = 'border-bottom: 3px solid #004225; color: #004225')
}

function salarie_null(){
    salarie.forEach((el) => el.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000')
    console.log("ERROR SALARIE") 
}

//SUM CHECK-------------------------------------
function sum_check(){sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #004225; color: #004225')}

function sum_null(){
    console.log("ERROR SUM") 
    sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000')
}

//SUM AND SALARIE FOREACH-------------------------------------
sum.forEach((e) => {e.addEventListener('input', ()=>{check.test(e.value) ? sum_null() : sum_check()})})

salarie.forEach((el) => {el.addEventListener('input', ()=>{check.test(el.value) ? salarie_null() : salarie_check()})})

//ACCEPT CLICK-------------------------------------
accept.addEventListener('click', ()=>{
    objective.forEach((e) => objectives.push(e.value))
    sum.forEach((e) => sums.push(parseFloat(e.value)))

    for (let i = 0; i < 3; i++) {
        const users_obj_and_sum = {}
        users_obj_and_sum.user_objective = objectives[i]
        users_obj_and_sum.user_sum = sums[i]        
        users_objectives.push(users_obj_and_sum)
    }
    console.log(users_objectives);
    console.log(sum_salaries);
    localStorage.setItem('Information objectives', JSON.stringify(users_objectives))
    localStorage.setItem('Information users', JSON.stringify(users_object))
    localStorage.setItem('Total sum', JSON.stringify(sum_salaries))
    document.querySelector('.next_page').setAttribute('href', '../profile/profile.html')
})
