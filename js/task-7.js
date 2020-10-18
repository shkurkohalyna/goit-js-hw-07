const fontSize = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSize.addEventListener('input', onInputChange);

function onInputChange(event) {
          textSpan.style.fontSize = event.currentTarget.value + 'px';
        }

