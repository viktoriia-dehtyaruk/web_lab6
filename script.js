// 1 завдання
function showInputValue() {
    let inputValue = document.getElementById('inputField').value;
    console.log(inputValue);
}
// 3 завдання
function hideText() {
    const inputField = document.getElementById('inputFieldHide');
    const button = document.getElementById('toggleButton');
    
    if (inputField.type === 'password') {
        // pозкрити текст
        inputField.type = 'text';
        button.textContent = 'Приховати';
    } else {
        // приховати текст
        inputField.type = 'password';
        button.textContent = 'Розкрити';
    }
}

// 5 завдання
window.addEventListener('click', function(event) {
    // встановлюємо слухач подій для кліків на вікні
    const placeDiv = document.getElementById('place');
    // елемент, на який клікнули, чи знаходиться він всередині елемента placeDiv
    const isClickInside = placeDiv.contains(event.target);
    console.log(isClickInside);
});

// 7 завдання 
document.addEventListener('DOMContentLoaded', function() {
    // знаходимо список категорій
    const categoriesList = document.querySelector('#categories');
    // всі елементи li з класом item
    const categoriesItems = categoriesList.querySelectorAll('.item');
    console.log(`Number of categories: ${categoriesItems.length}`);

    // виконуємо перебір кожного елемента li.item
    categoriesItems.forEach(item => {
        // знаходимо заголовок категорії
        const categoryTitle = item.querySelector('h2').textContent;
        // всі елементи li всередині поточної категорії
        const categoryElements = item.querySelectorAll('ul li');
        // заголовок та кількість елементів в категорії
        console.log(`Category: ${categoryTitle}`);
        console.log(`Elements: ${categoryElements.length}`);
    });
});

// 8 завдання 
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки
    
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
        
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
        
    const formData = {
        email: email,
        password: password
    };
        
    console.log(formData);
    form.reset(); // очищаємо форму
});

// 9 завдання
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  document.querySelector('.change-color').addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('.color').textContent = newColor;
});

// 10 завдання
// створюємо блоки з випадковим кольором фону та змінюємо їхні розміри в залежності від їх позиції
function createBoxes(amount) {
const boxesContainer = document.getElementById('boxes');
for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
}}
// видаляємо всі створені блоки
function destroyBoxes() {
const boxesContainer = document.getElementById('boxes');
boxesContainer.innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.getElementById('numbers');
// подія при натисканні на кнопку "Create". 
createButton.addEventListener('click', function() {
const amount = parseInt(input.value);
// перевірка введеної користувачем кількості блоків, створення блоків
if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
} else {
    alert('Please enter a number between 1 and 100.');
}
});
destroyButton.addEventListener('click', destroyBoxes);