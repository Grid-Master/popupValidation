let openBtn = document.getElementById('openBtn');
let popup = document.getElementById('popup');
let closeBtn = document.querySelector('.popup__closeBtn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

var inp = document.querySelector('.popup__form-tel');

inp.onclick = function () {
  inp.value = '+';
};

var old = 0;

inp.onkeydown = function () {
  var curLen = inp.value.length;

  if (curLen < old) {
    old--;
    return;
  }

  if (curLen == 1) inp.value = inp.value + '(';

  if (curLen == 3) inp.value = inp.value + ') ';

  if (curLen == 8) inp.value = inp.value + '-';

  if (curLen == 11) inp.value = inp.value + '-';

  old++;
};
