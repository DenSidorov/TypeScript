const btn = document.querySelector('#btn')! // ВосклЗнак исключает ошибку, если нет btn
btn.addEventListener('click', () => {
    console.log('Clicked')
})