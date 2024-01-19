document.addEventListener('DOMContentLoaded', function () {
    let information_objectives = JSON.parse(localStorage.getItem('information_objectives'));
    let outputElements = document.getElementsByClassName('object_title');
    let deleteObjects = document.getElementsByClassName('delete_object');

    console.log(information_objectives);

    // Додати обробник подій для кожної кнопки delete_object
    Array.from(deleteObjects).forEach((deleteObject, index) => {
        deleteObject.addEventListener('click', function () {
            // Визначити індекс кнопки delete_object, яка була натискана
            const buttonIndex = Array.from(deleteObjects).indexOf(deleteObject);

            // Перевірити, чи індекс дійсний
            if (buttonIndex !== -1) {
                // Видалити елементи з індексом buttonIndex
                information_objectives.splice(buttonIndex, 1);

                // Оновити localStorage
                localStorage.setItem('information_objectives', JSON.stringify(information_objectives));

                // Видалити елемент та його батьківський елемент (кнопку)
                deleteObject.parentNode.remove();

                console.log('Елемент та кнопка успішно видалені з localStorage');
            } else {
                console.log('Помилка: Невірний індекс кнопки delete_object');
            }
        });
    });

    // Функція для оновлення відображення на сторінці
    function updateDisplay() {
        Array.from(outputElements).forEach((outputElement, index) => {
            if (information_objectives && information_objectives[index]) {
                const { user_objective, user_sum } = information_objectives[index];
                const displayText = `${user_objective} - ${user_sum}грн`;
                outputElement.textContent = displayText;
                console.log(displayText);
            } else {
                outputElement.textContent = '';
            }
        });
    }

    // Вивести інформацію при завантаженні сторінки
    updateDisplay();
});