import { enableNavLinks, addScreenStyles, showFirstScreen } from './screens';
import resultScreen from './result_screen';
import circlesScreen from './circles';
import questionsScreen from './questions_screen';
import homepageScreen from './homepage_screen';

// type ScreenHooks = { [key]: { onLoad: Function, onUnload: Function } }

// screenHooks :: ScreenHooks
const screenHooks = {
  'questions-screen': questionsScreen,
  'results-screen': resultScreen,
  'circles-screen': circlesScreen,
  'homepage-screen': homepageScreen
};

const initApp = () => {
  addScreenStyles();
  showFirstScreen(screenHooks, 'homepage-screen');
  enableNavLinks(screenHooks);
};

export default initApp;
