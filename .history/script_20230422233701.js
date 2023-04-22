let openBtn = document.getElementById('openBtn');
let popup = document.getElementById('popup');
let closeBtn = document.querySelector('.popup__closeBtn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});