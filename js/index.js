//$ Завдання 1
//*Напиши скрипт, який виконає наступні операції.
//*Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
//*Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
//*Наприклад, для першої категорії вийде:
//*Категорія: Тварини
//*Кількість елементів: 4

// const categoriesList = document.querySelector("#categories");
// const categoryItems = categoriesList.querySelectorAll(".item");

// console.log(`У списку ${categoryItems.length} категорії.`);

// categoryItems.forEach(category => {
//     const title = category.querySelector("h2").textContent;
//     const elementsCount = category.querySelectorAll("ul li").length; // Виправлено

//     console.log(`Категорія: ${title}`);
//     console.log(`Кількість елементів: ${elementsCount}`);
// });

//$ Завдання 2
//*Напиши скрипт, який для кожного елемента масиву
//*ingredients створить окремий li, після чого
//*вставить всі li за одну операцію в список
//*ul.ingredients. Для створення DOM-вузлів
//*використовуй document.createElement().

// const ingredients = [
//  'Картопля',
//  'Гриби',
//  'Часник',
//  'Помідори',
//  'Зелень',
//  'Приправи',
// ];

// const ulElement = document.getElementById('ingredients')

// ingredients.forEach(ingredient => {
//     const li = document.createElement('li')
//     li.textContent = ingredient
//     ulElement.appendChild(li)
// })

//$ Завдання 3
//*Використовуй масив об'єктів images для створення тегів img 
//*вкладених в li. Для створення розмітки використовуй шаблонні
//*рядки і insertAdjacentHTML().
//*Всі елементи галереї повинні додаватися в DOM за одну 
//*операцію вставки.
//*Додай мінімальне оформлення галереї флексбоксами або грід 
//*через css-класи.


// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.getElementById('gallery'); // отримуємо елемент ul#gallery

// // Генеруємо HTML для кожного зображення
// const galleryMarkup = images
//   .map(
//     ({ url, alt }) => 
//     `<li>
//       <img src="${url}" alt="${alt}" width="300">
//     </li>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', galleryMarkup);


//$ Завдання 4
//*Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
//*Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
//*Створи функції increment і decrement для збільшення і зменшення значення лічильника.
//*Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу


let counterValue = 0;
const valueEl = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);





