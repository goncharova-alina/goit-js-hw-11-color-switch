const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

  let timerId;
  let timerIsActive = false;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function start() {
  if (timerIsActive) {
    return;
  }
  timerIsActive = true;
  refs.startBtn.disabled = true;

  timerId = setInterval(() => {
    const number = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[number];
  }, 1000);
}

function stop() {
  timerIsActive = false;
  refs.startBtn.disabled = false;
  clearInterval(timerId);
  }

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);



