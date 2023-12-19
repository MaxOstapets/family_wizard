const email_inp = document.querySelector('.email')
const password_inp = document.querySelector('.password')
const accept = document.querySelector('.continue')
const inputs = document.querySelector('.inputs')
const next_page_link = document.querySelector('.next_page_link')

const users = [
    {
        user_email: 'mrcoins912@gmail.com',
        password: 'm09122007max'
    },

    {
        user_email: 'kolesnikkosta572@gmail.com',
        password: 'true_sigma'
    },

    {
        user_email: 'noname213@gmail.com',
        password: 'do_not_know'
    }
]

accept.addEventListener('click', () => {
    const user_email = email_inp.value
    const user_password = password_inp.value

    console.log('Імейл:', user_email)
    console.log('Пароль:', user_password)

    const email_check = users.some((user) => user.user_email === user_email)
    const password_check = users.some((user) => user.password === user_password)

    if(!email_check){
        console.log("Email OK")
        const span_warning = document.querySelector('.wrong_email');

        if(span_warning){span_warning.remove();}

        const new_span_warning = document.createElement('span')
        new_span_warning.classList.add('wrong_email')
        new_span_warning.innerText = "Електронна адреса не вірна"

        inputs.appendChild(new_span_warning)

        console.log("Fuck you, and your email");
    }else{ 
        const span_warning = document.querySelector('.wrong_email');

        if(span_warning){span_warning.remove();}

        console.log("Email OK");
    }

    if(!password_check){
        const span_warning = document.querySelector('.wrong_password');

        if(span_warning){span_warning.remove();}

        const new_span_warning = document.createElement('span')
        new_span_warning.classList.add('wrong_password')
        new_span_warning.innerText = "Пароль не вірний"

        inputs.appendChild(new_span_warning)

        console.log("Fuck you, and your password");
    }else{
        const span_warning = document.querySelector('.wrong_password');

        if(span_warning){span_warning.remove();}

        console.log("Password OK");
    }

    if (password_check && email_check){
        next_page_link.setAttribute('href', 'signUp2.html')
    }

})