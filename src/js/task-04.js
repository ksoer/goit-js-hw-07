// Счетчик состоит из спана и кнопок, которые должны увеличивать
//  и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
//  значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
//  значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
//  интерфейса

const counterEl = document.querySelector('#counter')
const btnDown = counterEl.firstElementChild
const btnUp = counterEl.lastElementChild
const valueEl = document.querySelector('#value')

let counterValue = 0
const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

// let value = 0
const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
btnUp.addEventListener('click', increment)
btnDown.addEventListener('click', decrement)
