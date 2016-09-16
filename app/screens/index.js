import { addScreenStyles } from './css_manipulations';
import { enableNavLinks } from './enable_navlinks';
import { showFirstScreen } from './show_first_screen';

const initScreens = (screenHooks, firstScreenName) => {
  addScreenStyles();
  showFirstScreen(screenHooks, firstScreenName);
  enableNavLinks(screenHooks);
};

export default initScreens;
