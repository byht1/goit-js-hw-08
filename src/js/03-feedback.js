import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const text = document.querySelector('textarea');
const obj = {};

reestablish();

form.addEventListener('input', throttle(eventInput, 500));

form.addEventListener('submit', () => {
  conclusion();
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
});

function conclusion() {
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log('🚀 ~ email', email.value);
  console.log('🚀 ~ message', message.value);
}

function eventInput(event) {
  {
    event.preventDefault();
    if (event.target.nodeName === 'INPUT') {
      obj.email = event.target.value;
    }
    if (event.target.nodeName === 'TEXTAREA') {
      obj.text = event.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  }
}

function reestablish() {
  const localServer = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!localServer) {
    return;
  }

  if (localServer.email) {
    email.value = localServer.email;
  }
  if (localServer.text) {
    text.value = localServer.text;
  }
}
