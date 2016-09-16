import './scss/main.scss';
import initScreens from './screens';
import resultScreen from './result_screen';
import circlesScreen from './circles_screen';
import questionsScreen from './questions_screen';
import homepageScreen from './homepage_screen';

const screenHooks = {
  'questions-screen': questionsScreen,
  'results-screen': resultScreen,
  'circles-screen': circlesScreen,
  'homepage-screen': homepageScreen
};

initScreens(screenHooks, 'homepage-screen');
