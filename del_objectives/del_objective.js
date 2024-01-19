let information_objectives = JSON.parse(localStorage.getItem('information_objectives'))
let outputElement = document.getElementById('output');


    if (outputElement) {
        outputElement.textContent = JSON.stringify(parsedData, null, 2);
    } else {
    console.log('Дані відсутні в localStorage');
}