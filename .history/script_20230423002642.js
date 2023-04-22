let openBtn = document.getElementById('openBtn');
let popup = document.getElementById('popup');
let closeBtn = document.querySelector('.popup__closeBtn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

var tel = document.querySelector('.popup__form-tel');

tel.onclick = function () {
  tel.value = '+';
};

var old = 0;

tel.onkeydown = function () {
  var curLen = tel.value.length;

  if (curLen < old) {
    old--;
    return;
  }

  if (curLen == 1) tel.value = tel.value + '(';

  if (curLen == 3) tel.value = tel.value + ') ';

  if (curLen == 8) tel.value = tel.value + '-';

  if (curLen == 11) tel.value = tel.value + '-';

  old++;
};

function submitForm() {
  let name = document.querySelector('.popup__form-name').value;
  let from = document.querySelector('.popup__form-container-from');
  let to = document.querySelector('.popup__form-container-to');
  let date = document.querySelector('.popup__form-date').value;
  let message = document.querySelector('.popup__form-message');
  console.log(date);
}
