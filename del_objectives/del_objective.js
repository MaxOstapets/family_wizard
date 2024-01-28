const information_objectives_str = localStorage.getItem('information_objectives')
const information_objectives = JSON.parse(information_objectives_str)
const main = document.querySelector('main')
const container = document.createElement('div')

function create_objective_div(e){
    const stroke = document.createElement('div')
    const object_title = document.createElement('span')
    const delete_object = document.createElement('button')

    stroke.classList.add('stroke')
    object_title.classList.add('object_title')
    delete_object.classList.add('delete_object')
    container.classList.add('container')

    stroke.append(object_title, delete_object)
    container.append(stroke)
    main.insertBefore(container, main.firstChild)

    object_title.innerText = `${e.user_objective} - ${e.user_sum} грн.`
    delete_object.innerText = 'Видалити'
    
    delete_object.addEventListener('click', () => {
        let array_index = information_objectives.findIndex(item => item.user_objective === e.user_objective && item.user_sum === e.user_sum);
        if (array_index !== -1) {
            information_objectives.splice(array_index, 1);
            localStorage.setItem('information_objectives', JSON.stringify(information_objectives));
            object_title.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78);'
        }
    });
}

function create(){information_objectives.forEach((e) => {create_objective_div(e)})}
create()
