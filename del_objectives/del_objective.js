const information_objectives_str = localStorage.getItem('informationObjectives')
const information_objectives = JSON.parse(information_objectives_str)
const main = document.querySelector('main')
const container = document.createElement('div')

function create_objective_div(e){
    const stroke = document.createElement('div')
    const object_title = document.createElement('span')
    const delete_object = document.createElement('button')

    stroke.classList.add('stroke')
    object_title.classList.add('objectTitle')
    delete_object.classList.add('deleteObject')
    container.classList.add('container')

    stroke.append(object_title, delete_object)
    container.append(stroke)
    main.insertBefore(container, main.firstChild)

    object_title.innerText = `${e.userObjective} - ${e.userSum} грн.`
    delete_object.innerText = 'Видалити'
    
    delete_object.addEventListener('click', () => {
        let array_index = information_objectives.findIndex(item => item.userObjective === e.userObjective && item.userSum === e.userSum);
        if (array_index !== -1) {
            information_objectives.splice(array_index, 1);
            localStorage.setItem('informationObjectives', JSON.stringify(information_objectives));
            object_title.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78);'
        }
    });
}

function create(){information_objectives.forEach((e) => {create_objective_div(e)})}
create()
