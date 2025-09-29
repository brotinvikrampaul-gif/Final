const enterBtn = document.getElementById('enterBtn');
const splash = document.getElementById('splash');
const main = document.getElementById('main');
const bgm = document.getElementById('bgm');
const nextPageBtn = document.getElementById('nextPage');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

enterBtn.addEventListener('click', () => {
  splash.classList.add('hidden');
  main.classList.remove('hidden');
  bgm.play();
});

nextPageBtn.addEventListener('click', () => {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
});

// Hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  heart.innerText = '💙';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
