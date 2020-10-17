const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
for (let i = 0; i < ingredients.length; i+=1) {
    const ingredient = ingredients[i];
    const newListEl = document.createElement('li');

    ingredients.push(newListEl);
}
  
  
//   newListEl.textContent = 
  
  console.log(ingredients);
  
  
  
  const listEl = document.querySelector('ul');
  listEl.append(...ingredients);