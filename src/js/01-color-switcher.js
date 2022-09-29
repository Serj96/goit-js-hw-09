


const containerEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  intervalId = setInterval(() => {
    containerEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');

  clearInterval(intervalId);
});