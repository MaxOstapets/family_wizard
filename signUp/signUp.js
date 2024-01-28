const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const accept = document.querySelector('.continue')
const inputs = document.querySelector('.inputs')
const nextPageLink = document.querySelector('.nextPageLink')
const check = /[@gmail.com]/
const passwordCheckAll = ''

accept.addEventListener('click', () => {
    const userEmail = emailInput.value
    const userPassword = passwordInput.value

    let emailCheck = check.test(userEmail)

    if (!emailCheck) {
        const spanWarning = document.querySelector('.wrongEmail')

        if (spanWarning) {
            spanWarning.remove()
        }

        const newSpanWarning = document.createElement('span')
        newSpanWarning.classList.add('wrongEmail')
        newSpanWarning.innerText = "Електронна адреса не вірна"

        inputs.appendChild(newSpanWarning)
    } else {
        const spanWarning = document.querySelector('.wrongEmail')

        if (spanWarning) {
            spanWarning.remove()
        }
    }

    if (userPassword === passwordCheckAll) {
        const spanWarning = document.querySelector('.wrongPassword')

        if (spanWarning) {
            spanWarning.remove()
        }

        const newSpanWarning = document.createElement('span')
        newSpanWarning.classList.add('wrongPassword')
        newSpanWarning.innerText = "Пароль не вірний"

        inputs.appendChild(newSpanWarning)
    } else {
        const spanWarning = document.querySelector('.wrongPassword')

        if (spanWarning) {
            spanWarning.remove()
        }
    }

    if (emailCheck && userPassword !== passwordCheckAll) {
        nextPageLink.setAttribute('href', 'signUp2.html')
    }
});