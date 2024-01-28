const manName = document.querySelector('.manName');
const womanName = document.querySelector('.womanName');

const manSalarie = document.querySelector('.manSalarie');
const womanSalarie = document.querySelector('.womanSalarie');
const salarie = document.querySelectorAll('.salarie');

const usersObject = {};

const accept = document.querySelector('.accept');
const nextPage = document.querySelector('.nextPage');

const objective = document.querySelectorAll('.inp2');
const sum = document.querySelectorAll('.sum');

const usersObjectives = [];
const objectives = [];
const sums = [];

const check = /[a-zA-Zа-яА-Я,./*+?^${}()]/;

let sumSalaries = 0;
let titleSumSalarie = 0;

// SALARIE CHECK -------------------------------------
function salarieCheck() {
    const manSalarieVal = parseFloat(manSalarie.value);
    const womanSalarieVal = parseFloat(womanSalarie.value);

    usersObject.manName = manName.value;
    usersObject.womanName = womanName.value;
    usersObject.manSalarie = manSalarieVal;
    usersObject.womanSalarie = womanSalarieVal;

    sumSalaries = manSalarieVal + womanSalarieVal;
    titleSumSalarie = manSalarieVal + womanSalarieVal;

    salarie.forEach((el) => (el.style.cssText = 'border-bottom: 3px solid #004225; color: #004225'));
}

function salarieNull() {
    salarie.forEach((el) => (el.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000'));
    console.log('ERROR SALARIE');
}

// SUM CHECK -------------------------------------
function sumCheck() {
    sum.forEach((e) => (e.style.cssText = 'border-bottom: 3px solid #004225; color: #004225'));
}

function sumNull() {
    console.log('ERROR SUM');
    sum.forEach((e) => (e.style.cssText = 'border-bottom: 3px solid #8d0000; color: #8d0000'));
}

// SUM AND SALARIE FOREACH -------------------------------------
sum.forEach((e) => {
    e.addEventListener('input', () => {
        check.test(e.value) ? sumNull() : sumCheck();
    });
});

salarie.forEach((el) => {
    el.addEventListener('input', () => {
        check.test(el.value) ? salarieNull() : salarieCheck();
    });
});

// ACCEPT CLICK -------------------------------------
accept.addEventListener('click', () => {
    objective.forEach((e) => objectives.push(e.value));
    sum.forEach((e) => sums.push(parseFloat(e.value)));

    for (let i = 0; i < 3; i++) {
        const usersObjAndSum = {};
        usersObjAndSum.userObjective = objectives[i];
        usersObjAndSum.userSum = sums[i];
        usersObjectives.push(usersObjAndSum);
    }

    console.log(usersObjectives);
    console.log(sumSalaries);
    localStorage.setItem('informationObjectives', JSON.stringify(usersObjectives));
    localStorage.setItem('informationUsers', JSON.stringify(usersObject));
    localStorage.setItem('totalSum', JSON.stringify(sumSalaries));
    localStorage.setItem('titleSumSalarie', JSON.stringify(titleSumSalarie));
    nextPage.setAttribute('href', '../profile/profile.html');
});