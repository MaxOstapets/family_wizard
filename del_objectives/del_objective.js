const createObjectiveDiv = (e) => {
    const stroke = document.createElement('div');
    const objectTitle = document.createElement('span');
    const deleteObject = document.createElement('button');

    stroke.classList.add('stroke');
    objectTitle.classList.add('objectTitle');
    deleteObject.classList.add('deleteObject');
    container.classList.add('container');

    stroke.append(objectTitle, deleteObject);
    container.append(stroke);
    main.insertBefore(container, main.firstChild);

    objectTitle.innerText = `${informationObjectives.userObjective} - ${informationObjectives.userSum} грн.`;
    deleteObject.innerText = 'Видалити';

    deleteObject.addEventListener('click', () => {
        const arrayIndex = informationObjectives.findIndex(item => item.userObjective === e.userObjective && item.userSum === e.userSum);

        if (arrayIndex !== -1) {
            informationObjectives.splice(arrayIndex, 1);
            localStorage.setItem('information_objectives', JSON.stringify(informationObjectives));
            objectTitle.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78);';
        }
    });
};

createObjectiveDiv();