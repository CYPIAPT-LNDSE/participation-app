import { enableNavLinks, addScreenStyles } from './screens';

const showFirstScreen = () => {
  document.getElementById('app').style.display = 'inherit';
  document.getElementById('screen-1').style.display = 'inherit';
};

const initApp = () => {
  addScreenStyles();
  showFirstScreen();
  enableNavLinks();
};

export default initApp;
