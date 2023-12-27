const man_name = document.querySelector('.man_name')
const woman_name = document.querySelector('.woman_name')

const man_salarie = document.querySelector('.man_salarie')
const woman_salarie = document.querySelector('.woman_salarie')

const accept = document.querySelector('.accept')
const next_page = document.querySelector('.next_page')

const objective = document.querySelectorAll('.inp2')
const sum = document.querySelectorAll('.sum')

const users_objectives = []
const objectives = []
const sums = []

const sum_check = /[a-dA-D.*+?^${}()]/

accept.addEventListener('click', ()=>{
    const user_man_name = man_name.value
    const user_woman_name = woman_name.value

    // const sum_salaries = user_man_salarie + user_woman_salarie

    if (isNaN(man_salarie.value) || isNaN(woman_salarie.value)){
        console.log("error");
    }else{
        const user_man_salarie = parseFloat(man_salarie.value)
        const user_woman_salarie = parseFloat(woman_salarie.value)  
        const sum_salaries = user_man_salarie + user_woman_salarie
        
        const user_object = new Object()
        user_object.man_object_name = user_man_name
        user_object.woman_object_name = user_woman_name
        user_object.man_object_salarie = user_man_salarie
        user_object.woman_object_salarie = user_woman_salarie    
        console.log('Users object:', user_object);    
        console.log('Загальна сума зарплати:', sum_salaries);
    }

    // objective.forEach((e) => objectives.push(e.value));
    // sum.forEach((e) => {
    //     if(sum_check.test(e.value)){console.log('Error');}else{sums.push(e.value)}
    // });

    // for(let i = 0; i < 3; i++){
    //     const user_object_objectives = new Object();
    //     user_object_objectives.objective = objectives[i]
    //     user_object_objectives.sum = sums[i]
    //     users_objectives.push(user_object_objectives)
    // }
    
    
    // console.log('Загальний масив:', users_objectives);

    // localStorage.setItem('Information', JSON.stringify(users_objectives))
    
})