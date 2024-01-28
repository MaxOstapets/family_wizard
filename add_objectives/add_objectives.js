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

let parse_storage = JSON.parse(localStorage.getItem('information_objectives'))

//SUM CHECK-------------------------------------
const sum_check = () =>{sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #004225; color: #004225')}

const sum_null = () =>{sum.forEach((e) => e.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000')}

//SUM AND SALARIE FOREACH-------------------------------------
sum.forEach((e) => {e.addEventListener('input', ()=>{check.test(e.value) ? sum_null() : sum_check()})})

//ACCEPT CLICK-------------------------------------
accept.addEventListener('click', ()=>{
    users_objectives.length = 0

    objective.forEach((e) => objectives.push(e.value))
    sum.forEach((e) => sums.push(parseFloat(e.value)))

    for (let i = 0; i < 3; i++) {
        const users_obj_and_sum = {}
        users_obj_and_sum.user_objective = objectives[i]
        users_obj_and_sum.user_sum = sums[i]        
        users_objectives.push(users_obj_and_sum)
    }
    const updated_users_objectives = parse_storage.concat(users_objectives);

    localStorage.setItem('information_objectives', JSON.stringify(updated_users_objectives))
    document.querySelector('.next_page').setAttribute('href', '../profile/profile.html')
})