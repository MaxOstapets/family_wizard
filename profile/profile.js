// INFO VARIABLES
const informationUsersStr = localStorage.getItem('information_users');
const informationObjectivesStr = localStorage.getItem('information_objectives');
const totalSumStr = localStorage.getItem('total_sum');
const titleSumSalarieStr = localStorage.getItem('title_sum_salarie');
const sumArray = [];
let sumNumber = 0;

// PARSE VARIABLES
const informationUsers = JSON.parse(informationUsersStr);
const informationObjectives = JSON.parse(informationObjectivesStr);
const totalSum = JSON.parse(totalSumStr);
const titleSumSalarie = JSON.parse(titleSumSalarieStr);

// QUERY SELECTOR VARIABLES
const manNameSalarie = document.querySelector('.manNameSalarie');
const womanNameSalarie = document.querySelector('.womanNameSalarie');
let totalSalarieSum = document.querySelector('.totalSalarieSum');
const averageExpense = document.querySelector('.averageExpense');
let sum = document.querySelector('.sum');
const objectivesSum = document.querySelector('.objectivesSum');

// AVERAGE EXPENSE && OBJECTIVES SUM
const averageExpenseCalc = () => {
    for (let i = 0; i < sumArray.length; i++) {
        sumNumber += sumArray[i];
    }

    let averageExpenseNum = sumNumber / sumArray.length;
    averageExpense.innerText = `Середня сума витрат: ${Math.floor(averageExpenseNum)} грн.`;
    objectivesSum.innerText = `Сума витрат: ${sumNumber} грн.`;
};

// CREATE AND DELETE DIV WITH OBJECTIVES
const main = document.querySelector('main');
const objectivesDiv = document.createElement('div');
objectivesDiv.classList.add('objectives');

sum.innerText = `Загальна сума: ${titleSumSalarie} грн.`;

const createDivObjective = (e) => {
    let objectiveDiv = document.createElement('div');
    let textObjective = document.createElement('span');
    let iconAndSum = document.createElement('div');
    let sumObjective = document.createElement('span');
    let checkIcon = document.createElement('img');

    objectiveDiv.classList.add('objective');
    textObjective.classList.add('textObjective');
    iconAndSum.classList.add('iconAndSum');
    sumObjective.classList.add('sumObjective');
    checkIcon.classList.add('checkIcon');

    objectiveDiv.append(textObjective, iconAndSum);
    iconAndSum.append(sumObjective, checkIcon);
    main.append(objectivesDiv);

    const deleteDiv = () => {
        const uniqueIdentifier = `${e.user_objective}-${e.user_sum}`;
        const arrayIndex = informationObjectives.findIndex((item) => {
            const itemIdentifier = `${item.user_objective}-${item.user_sum}`;
            return itemIdentifier === uniqueIdentifier;
        });

        if (arrayIndex !== -1) {
            informationObjectives.splice(arrayIndex, 1);
            localStorage.setItem('information_objectives', JSON.stringify(informationObjectives));
            checkIcon.setAttribute('src', '../img/profile/checkedElipse.png');
            objectiveDiv.style.cssText = 'text-decoration: line-through; color: rgb(78, 78, 78); border: 3px solid rgb(78, 78, 78);';
        }
    };

    const minusNumber = () => {
        let minusSumNumber = sumNumber - e.user_sum;
        sumNumber = minusSumNumber;
        objectivesSum.innerText = `Сума витрат: ${minusSumNumber} грн.`;

        let minusSumSalarie = titleSumSalarie - e.user_sum;
        localStorage.setItem('title_sum_salarie', JSON.stringify(minusSumSalarie));
        sum.innerText = `Загальна сума: ${minusSumSalarie} грн.`;
    };

    textObjective.innerText = e.user_objective;
    sumObjective.innerText = `${e.user_sum} грн`;
    checkIcon.setAttribute('src', '../img/profile/checkIcon.png');

    objectivesDiv.appendChild(objectiveDiv);

    sumArray.push(e.user_sum);

    objectiveDiv.addEventListener('click', () => {
        deleteDiv();
        minusNumber();
    });
};

// INNER TEXT
manNameSalarie.innerText = `${informationUsers.man_name}: зарплата ${informationUsers.man_salarie} грн.`;
womanNameSalarie.innerText = `${informationUsers.woman_name}: зарплата ${informationUsers.woman_salarie} грн.`;
totalSalarieSum.innerText = `Сума зарплат разом: ${totalSum} грн.`;

// FUNCTIONS CALL
function createObjective() {
    informationObjectives.forEach((e) => createDivObjective(e));
}
createObjective();
averageExpenseCalc(sumArray);