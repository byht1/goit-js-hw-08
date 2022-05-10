import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const localHost = Number(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(local, 1000));
player.setCurrentTime(localHost);

function local({ percent, seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);

  reset(percent);
}

function reset(value) {
  if (value < 0.99) {
    return;
  }
  localStorage.setItem('videoplayer-current-time', 0);
}
