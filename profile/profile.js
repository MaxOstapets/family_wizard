//INFO VARIABLES------------------------------------------------------------------
const information_users_str = localStorage.getItem('informationUsers')
const information_objectives_str = localStorage.getItem('informationObjectives')
const total_sum_str = localStorage.getItem('totalSum')
const title_sum_salarie_str = localStorage.getItem('titleSumSalarie')
const sum_array = []
let sum_number = 0

//PARSE VARIABLES------------------------------------------------------------------
const information_users = JSON.parse(information_users_str)
const information_objectives = JSON.parse(information_objectives_str)
const total_sum = JSON.parse(total_sum_str)
const title_sum_salarie = JSON.parse(title_sum_salarie_str)

//QUERY SELECTOR VARIABLES------------------------------------------------------------------
const man_name_salarie = document.querySelector('.manNameSalarie')
const woman_name_salarie = document.querySelector('.womanNameSalarie')
let total_salarie_sum = document.querySelector('.totalSalarieSum')
const average_expense = document.querySelector('.averageExpense')
let sum = document.querySelector('.sum') 
const objectives_sum = document.querySelector('.objectivesSum')

//AVERAGE EXPENSE && OBJECTIVES SUM------------------------------------------------------------------
function average_expense_calc(){
    for (let i = 0; i < sum_array.length; i++){sum_number += sum_array[i]}
    
    let average_expense_num = sum_number / sum_array.length
    average_expense.innerText = `Середня сума витрат: ${Math.floor(average_expense_num)} грн.`
    objectives_sum.innerText = `Сума витрат: ${sum_number} грн.`
}

//CREATE AND DELETE DIV WITH OBJECTIVES------------------------------------------------------------------
const main = document.querySelector('main')
const objectives_div = document.createElement('div')
objectives_div.classList.add('objectives')

sum.innerText = `Загальна сума: ${title_sum_salarie} грн.`

function create_div_objective(e){
    let objective_div = document.createElement('div')
    let text_objective = document.createElement('span')
    let icon_and_sum = document.createElement('div')
    let sum_objective = document.createElement('span')
    let check_icon = document.createElement('img')
    
    objective_div.classList.add('objective')
    text_objective.classList.add('textObjective')
    icon_and_sum.classList.add('iconAndSum')
    sum_objective.classList.add('sumObjective')
    check_icon.classList.add('checkIcon')
    
    objective_div.append(text_objective, icon_and_sum)
    icon_and_sum.append(sum_objective, check_icon)
    main.append(objectives_div)

    function delete_div() {
        const uniqueIdentifier = `${e.userObjective}-${e.userSum}`;
        const array_index = information_objectives.findIndex(item => {
            const itemIdentifier = `${item.userObjective}-${item.userSum}`
            return itemIdentifier === uniqueIdentifier
        })

        if (array_index !== -1) {
            information_objectives.splice(array_index, 1)
            localStorage.setItem('informationObjectives', JSON.stringify(information_objectives))
            check_icon.setAttribute('src', '../img/profile/checkedElipse.png')
            objective_div.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78); border: 3px solid rgb(78, 78, 78);'
        }
    }
    
    function minus_number(){
        let minus_sum_number = sum_number - e.userSum
        sum_number = minus_sum_number              
        objectives_sum.innerText = `Сума витрат: ${minus_sum_number} грн.`

        let minus_sum_salarie = title_sum_salarie - e.userSum
        localStorage.setItem('titleSumSalarie', JSON.stringify(minus_sum_salarie))
        sum.innerText = `Загальна сума: ${minus_sum_salarie} грн.`
    }

    text_objective.innerText = e.userObjective
    sum_objective.innerText = e.userSum
    check_icon.setAttribute('src', '../img/profile/checkIcon.png')
    
    objectives_div.appendChild(objective_div)

    sum_array.push(e.userSum)
    
    objective_div.addEventListener('click', ()=>{delete_div(), minus_number()})
}

//INNER TEXT------------------------------------------------------------------
man_name_salarie.innerText = `${information_users.manName}: зарплата ${information_users.manSalarie} грн.`
woman_name_salarie.innerText = `${information_users.womanName}: зарплата ${information_users.womanSalarie} грн.`
total_salarie_sum.innerText = `Сума зарплат разом: ${total_sum} грн.`

//FUNCTIONS CALL
function create_objective(){information_objectives.forEach((e) => create_div_objective(e))}
create_objective()
average_expense_calc(sum_array) 