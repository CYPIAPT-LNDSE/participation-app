import { enableNavLinks, addScreenStyles, showFirstScreen } from './screens';
import resultScreen from './result_screen';
import circlesScreen from './circles';
import questionsScreen from './questions_screen';

// type ScreenHooks = { [key]: { onLoad: Function, onUnload: Function } }

// screenHooks :: ScreenHooks
const screenHooks = {
  'questions-screen': questionsScreen,
  'results-screen': resultScreen,
  'circles-screen': circlesScreen
};

const initApp = () => {
  addScreenStyles();
  showFirstScreen(screenHooks, 'questions-screen');
  enableNavLinks(screenHooks);
};

export default initApp;
