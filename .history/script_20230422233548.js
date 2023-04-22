let openBtn = document.getElementById('openBtn');
let popup = document.getElementById('popup');
let closeBtn = document.getElementsByClassName('popup__closeBtn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  console.log(1);
  popup.style.display = 'none';
});
