document.addEventListener('DOMContentLoaded', function () {
    let information_objectives = JSON.parse(localStorage.getItem('information_objectives'));
    let outputContainer = document.querySelector('.stroke');

    console.log(information_objectives);

    if (information_objectives && information_objectives.length > 0) {
        information_objectives.forEach((objective, index) => {
            // Create container div for each pair of text and button
            let rowContainer = document.createElement('div');
            rowContainer.className = 'row-container';

            let contentElement = document.createElement('div');
            contentElement.className = 'object_title';

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete_object';
            deleteButton.textContent = 'Видалити';

            deleteButton.addEventListener('click', function () {
                information_objectives.splice(index, 1);

                localStorage.setItem('information_objectives', JSON.stringify(information_objectives));

                rowContainer.parentNode.removeChild(rowContainer);

                console.log('Element and button successfully removed from localStorage');
            });

            rowContainer.appendChild(contentElement);
            rowContainer.appendChild(deleteButton);
            outputContainer.appendChild(rowContainer);

            updateDisplay(contentElement, objective);
        });
    } else {
        alert('Data is missing in localStorage');
        window.location.href = '../profile/profile.html';
    }

    function updateDisplay(outputElement, objective) {
        const { user_objective, user_sum } = objective;
        const displayText = `${user_objective} - ${user_sum}грн`;
        outputElement.textContent = displayText;
        console.log(displayText);
    }
});