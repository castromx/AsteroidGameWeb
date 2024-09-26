const gameArea = document.getElementById('gameArea');

function createObject() {
  const img = document.createElement('img');
  img.src = 'dron.gif';
  img.style.left = Math.random() * (window.innerWidth - 100) + 'px'; 
  img.style.top = Math.random() * (window.innerHeight - 100) + 'px'; 
  img.addEventListener('click', () => {
    img.remove(); 
  });
  gameArea.appendChild(img);
}

setInterval(createObject, 2000);
