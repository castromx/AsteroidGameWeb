const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let objects = [];

function createObject() {
  const obj = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 30 + Math.random() * 20,  // радіус від 30 до 50
    color: 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'
  };
  objects.push(obj);
}

function drawObjects() {
  objects.forEach(obj => {
    context.beginPath();
    context.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    context.fillStyle = obj.color;
    context.fill();
    context.closePath();
  });
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawObjects();
}

function detectClick(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Фільтрація об'єктів, які не були натиснуті
  objects = objects.filter(obj => {
    const distance = Math.sqrt((mouseX - obj.x) ** 2 + (mouseY - obj.y) ** 2);
    return distance > obj.radius;
  });
}

setInterval(createObject, 2000);

setInterval(update, 1000 / 60);

canvas.addEventListener('click', detectClick);
