const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let objects = [];

// Створення випадкових об'єктів (круги)
function createObject() {
  const obj = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 30 + Math.random() * 20,  // радіус від 30 до 50
    color: 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'
  };
  objects.push(obj);
}

// Малювання об'єктів
function drawObjects() {
  objects.forEach(obj => {
    context.beginPath();
    context.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    context.fillStyle = obj.color;
    context.fill();
    context.closePath();
  });
}

// Оновлення гри
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawObjects();
}

// Перевірка натискання на об'єкт
function detectClick(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Фільтрація об'єктів, які не були натиснуті
  objects = objects.filter(obj => {
    const distance = Math.sqrt((mouseX - obj.x) ** 2 + (mouseY - obj.y) ** 2);
    return distance > obj.radius;
  });
}

// Додавання нових об'єктів кожні 2 секунди
setInterval(createObject, 2000);

// Оновлення гри кожні 60 FPS
setInterval(update, 1000 / 60);

// Слухач кліків
canvas.addEventListener('click', detectClick);
