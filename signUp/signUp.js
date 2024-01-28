const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const accept = document.querySelector('.continue');
const inputs = document.querySelector('.inputs');
const nextPageLink = document.querySelector('.nextPageLink');

const users = [
    {
        userEmail: 'mrcoins912@gmail.com',
        password: 'm09122007max'
    },

    {
        userEmail: 'kolesnikkosta572@gmail.com',
        password: 'true_sigma'
    },

    {
        userEmail: 'noname213@gmail.com',
        password: 'do_not_know'
    }
];

accept.addEventListener('click', () => {
    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;

    const emailCheck = users.some((user) => user.userEmail === userEmail);
    const passwordCheck = users.some((user) => user.password === userPassword);

    if (!emailCheck) {
        const spanWarning = document.querySelector('.wrongEmail');

        if (spanWarning) {spanWarning.remove();}

        const newSpanWarning = document.createElement('span');
        newSpanWarning.classList.add('wrongEmail');
        newSpanWarning.innerText = "Електронна адреса не вірна";

        inputs.appendChild(newSpanWarning);
    } else {
        const spanWarning = document.querySelector('.wrongEmail');

        if (spanWarning) {spanWarning.remove();}
    }

    if (!passwordCheck) {
        const spanWarning = document.querySelector('.wrongPassword');

        if (spanWarning) {spanWarning.remove();}

        const newSpanWarning = document.createElement('span');
        newSpanWarning.classList.add('wrongPassword');
        newSpanWarning.innerText = "Пароль не вірний";

        inputs.appendChild(newSpanWarning);
    } else {
        const spanWarning = document.querySelector('.wrongPassword');

        if (spanWarning) {spanWarning.remove();}
    }
    
    if (passwordCheck && emailCheck) {
        nextPageLink.setAttribute('href', 'signUp2.html');
    }
});