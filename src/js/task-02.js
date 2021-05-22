// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в
//  список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingreItemsEl = document.querySelector('#ingredients')
const element = [];
for (let i = 0; i< ingredients.length; i+=1) {
    const indexEl = ingredients[i];
const newItem = document.createElement('li')
newItem.textContent = indexEl
element.push(newItem)
}
console.log(element)
ingreItemsEl.append(...element)