const accept = document.querySelector('.accept')
const next_page = document.querySelector('.next_page')

const objective = document.querySelectorAll('.inp2')
const sum = document.querySelectorAll('.sum')

const users_objectives = []
const objectives = []
const sums = []

const check = /[a-zA-Zа-яА-Я,./*+?^${}()]/
          
let sum_salaries = 0
let title_sum_salarie = 0

//SUM CHECK-------------------------------------
function sum_check(){sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #004225; color: #004225')}

function sum_null(){
    console.log("ERROR SUM") 
    sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000')
}

//SUM AND SALARIE FOREACH-------------------------------------
sum.forEach((e) => {e.addEventListener('input', ()=>{check.test(e.value) ? sum_null() : sum_check()})})


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
    localStorage.setItem('information_objectives', JSON.stringify(users_objectives))
    document.querySelector('.next_page').setAttribute('href', '../profile/profile.html')
})