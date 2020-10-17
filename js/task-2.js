const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const newIngredients = (...ingredients)=>
  newIngredients.map( item => {
  const newListEl = document.createElement('li');
  newListEl.textContent = item; 
  return newListEl;
});

console.log(newIngredients);


const listEl = document.querySelector('ul');
  listEl.append(ingredients);



    //            Працює і так само без map

    
// const listEl = document.querySelector('ul');
//   listEl.append(...ingredients);

// console.log(listEl);