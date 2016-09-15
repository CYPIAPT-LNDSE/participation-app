import { enableNavLinks, addScreenStyles } from './screens';
import resultScreen from './result_screen';
import circlesScreen from './circles';

const showFirstScreen = () => {
  document.getElementById('app').style.display = 'inherit';
  document.getElementById('screen-1').style.display = 'inherit';
  screenHooks['screen-1'].onLoad();
};

// type ScreenHooks = { [key]: { onLoad: Function, onUnload: Function } }

// screenHooks :: ScreenHooks
const screenHooks = {
  'screen-1': resultScreen,
  'screen-2': circlesScreen
};

const initApp = () => {
  addScreenStyles();
  showFirstScreen();
  enableNavLinks(screenHooks);
  // provisionScreens();
  // resultScreen.onLoad();
};

export default initApp;
