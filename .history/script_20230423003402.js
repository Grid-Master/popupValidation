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

tel.onkeydown = function () {
  var curLen = tel.value.length;

  if (curLen == 1) tel.value = tel.value + '(';

  if (curLen == 3) tel.value = tel.value + ') ';

  if (curLen == 8) tel.value = tel.value + '-';

  if (curLen == 11) tel.value = tel.value + '-';
};

function submitForm() {
  let name = document.querySelector('.popup__form-name');
  let from = document.querySelector('.popup__form-container-from');
  let to = document.querySelector('.popup__form-container-to');
  let date = document.querySelector('.popup__form-date');
  let message = document.querySelector('.popup__form-message');

  if (name.value && from.value && to.value && date.value && message.value) {
    console.log(name.value, tel.value, from.value, to.value, date.value, message.value);
    name.value = '';
    from.value = '';
    to.value = '';
    date.value = '';
    message.value = '';
    tel.value = '';
  } else {
    alert('Заполните все поля');
  }
}
