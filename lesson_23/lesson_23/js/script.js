"use strict";

// Задача №1
// Отримати в константу елемент < body >
const bodyElement = document.body;
console.log(bodyElement);

//     Задача №2
// Написати функцію, яка додає в < body > список UL
// з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)
function addListToBody(liCount = 5) {
   const ulElement = document.createElement('ul');
   for (let i = 0; i < liCount; i++) {
      const liElement = document.createElement('li');
      liElement.textContent = `List item ${i + 1}`;
      ulElement.append(liElement);
   }
   bodyElement.append(ulElement);
}

addListToBody(3); // Example call with 3 items

// Задача №3
// Додати до елементу < body > класс loaded.
// Потім перевірити чи є клас loaded у елемента < body >
//     і, якщо є, додати стиль кольору тесту зедлений.
bodyElement.classList.add('loaded');

if (bodyElement.classList.contains('loaded')) {
   bodyElement.style.color = 'green';
}

//         Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
//     та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
   item.classList.add('active');
   item.textContent = `Елемент №${index + 1}`;
});

//         Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
const button = document.querySelector('.button');
if (button) {
   button.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
}

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
const link = document.querySelector('.link');
if (link) {
   link.setAttribute('data-value', '100');
   const dataValue = parseInt(link.getAttribute('data-value'));
   if (dataValue < 200) {
      link.style.color = 'red';
   }
}