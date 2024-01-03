//INFO VARIABLES
const information_users_str = localStorage.getItem('information_users')
const information_objectives_str = localStorage.getItem('information_objectives')
const total_sum_str = localStorage.getItem('total_sum')

//PARSE VARIABLES
const information_users = JSON.parse(information_users_str)
const information_objectives = JSON.parse(information_objectives_str)
const total_sum = JSON.parse(total_sum_str)

//QUERY SELECTOR VARIABLES
const man_name_salarie = document.querySelector('.man_name_salarie')
const woman_name_salarie = document.querySelector('.woman_name_salarie')
const total_salarie_sum = document.querySelector('.total_salarie_sum')
const average_expense = document.querySelector('.average_expense')
const sum = document.querySelector('.sum') 

//INNER TEXT
man_name_salarie.innerText = `${information_users.man_name}: зарплата ${information_users.man_salarie} грн.`
woman_name_salarie.innerText = `${information_users.woman_name}: зарплата ${information_users.woman_salarie} грн.`
total_salarie_sum.innerText = `Сума зарплат разом: ${total_sum} грн.`
//average_expense
sum.innerText = `Загальна сума: ${total_sum}`

//CREATE DIV WITH OBJECTIVES
const objectives = document.querySelector('.objectives')

function create_div_objective(e) {
    objectives.innerHTML += `
        <div class="objective">
            <span class="text_objective">${e.user_objective}</span>
            <div class="icon_and_sum">
                <span class="sum_objective">${e.user_sum}</span>
                <img src="../img/profile/check_icon.png" class="check_icon" alt="">
            </div>
        </div>`
        
}

function create_objective() {
    information_objectives.forEach((e) => create_div_objective(e))
}

create_objective()

console.log(objectives)

console.log(information_users)
console.log(information_objectives)
console.log(total_sum)
