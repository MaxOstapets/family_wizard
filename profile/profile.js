//INFO VARIABLES------------------------------------------------------------------
const information_users_str = localStorage.getItem('information_users')
const information_objectives_str = localStorage.getItem('information_objectives')
const total_sum_str = localStorage.getItem('total_sum')
const sum_array = []
let sum_number = 0

//PARSE VARIABLES------------------------------------------------------------------
const information_users = JSON.parse(information_users_str)
const information_objectives = JSON.parse(information_objectives_str)
const total_sum = JSON.parse(total_sum_str)
let title_salarie = JSON.parse(total_sum_str)

//QUERY SELECTOR VARIABLES------------------------------------------------------------------
const man_name_salarie = document.querySelector('.man_name_salarie')
const woman_name_salarie = document.querySelector('.woman_name_salarie')
let total_salarie_sum = document.querySelector('.total_salarie_sum')
const average_expense = document.querySelector('.average_expense')
let sum = document.querySelector('.sum') 
const objectives_sum = document.querySelector('.objectives_sum')

//AVERAGE EXPENSE && OBJECTIVES SUM------------------------------------------------------------------
function average_expense_calc(){
    for (let i = 0; i < sum_array.length; i++) {
        sum_number += sum_array[i]
    }
    
    let average_expense_num = sum_number / sum_array.length
    console.log("Average expense:", Math.floor(average_expense_num));
    average_expense.innerText = `Середня сума витрат: ${Math.floor(average_expense_num)} грн.`
    objectives_sum.innerText = `Сума витрат: ${sum_number} грн.`
}

//DATE FUNCTION------------------------------------------------------------------
function date_fix(){
    const date = new Date ()
    const month = date.getMonth()
    console.log("Місяць:", month);
}

//CREATE DIV WITH OBJECTIVES------------------------------------------------------------------
const main = document.querySelector('main')
const objectives_div = document.createElement('div')
objectives_div.classList.add('objectives')

function create_div_objective(e) {
    const objective_div = document.createElement('div')
    const text_objective = document.createElement('span')
    const icon_and_sum = document.createElement('div')
    const sum_objective = document.createElement('span')
    const check_icon = document.createElement('img')

    objective_div.classList.add('objective')
    text_objective.classList.add('text_objective')
    icon_and_sum.classList.add('icon_and_sum')
    sum_objective.classList.add('sum_objective')
    check_icon.classList.add('check_icon')

    objective_div.append(text_objective, icon_and_sum)
    icon_and_sum.append(sum_objective, check_icon)
    main.append(objectives_div)

    text_objective.innerText = e.user_objective
    sum_objective.innerText = e.user_sum
    check_icon.setAttribute('src', '../img/profile/check_icon.png')

    objectives_div.appendChild(objective_div)

    sum_array.push(e.user_sum)

    objective_div.addEventListener('click', ()=>{
        let minus_sum_number = sum_number - e.user_sum
        sum_number = minus_sum_number

        let minus_sum_salarie = title_salarie - e.user_sum
        title_salarie = minus_sum_salarie

        objectives_sum.innerText = `Сума витрат: ${minus_sum_number} грн.`
        check_icon.setAttribute('src', '../img/profile/checked_elipse.png')
        sum.innerText = `Загальна сума: ${minus_sum_salarie} грн.`

        objective_div.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78); border: 3px solid rgb(78, 78, 78);'

        date_fix()
    })
}

//INNER TEXT------------------------------------------------------------------
man_name_salarie.innerText = `${information_users.man_name}: зарплата ${information_users.man_salarie} грн.`
woman_name_salarie.innerText = `${information_users.woman_name}: зарплата ${information_users.woman_salarie} грн.`
total_salarie_sum.innerText = `Сума зарплат разом: ${total_sum} грн.`
sum.innerText = `Загальна сума: ${title_salarie} грн.`

function create_objective(){information_objectives.forEach((e) => create_div_objective(e))}

create_objective()
average_expense_calc(sum_array) 

//CONSOLE LOG INFORMATION------------------------------------------------------------------
console.log("Array with sums:", sum_array);
console.log("Information about users:", information_users)
console.log("Information about objectives:", information_objectives)
console.log("Total salarie sum:", total_sum)