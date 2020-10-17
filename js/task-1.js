const listEl = document.querySelector("ul#categories").children;
console.log(`В списке ${listEl.length} категории.`);

const itemName = document.querySelectorAll("li.item");

itemName.forEach((name)=> {
console.log(`Категория: ${name.firstElementChild.textContent}`)
console.log(`Количество элементов: ${name.querySelectorAll("li").length}`)
});
