// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const textSizeControlEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


textSizeControlEl.addEventListener('input', changeSize)

function changeSize (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';

}