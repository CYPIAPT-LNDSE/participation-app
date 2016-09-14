import { enableNavClicks, initScreenStyles } from './screen_nav';

const showFirstScreen = () => {
  document.getElementById('app').style.display = 'inherit';
  document.getElementById('screen-1').style.display = 'inherit';
};

const initApp = () => {
  initScreenStyles();
  showFirstScreen();
  enableNavClicks();
};

export default initApp;
