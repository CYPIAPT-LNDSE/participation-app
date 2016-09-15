import { swapScreens } from './transitions';
import { getScreenRefsFromNode } from './dom_search';

// type ButtonClickOpts = {button: Node, crntScreen: Node, nextScreen: Node, animOutType: String}

// addNavButtonClickHandler :: ButtonClickOpts -> ScreenHooks -> void
const addNavButtonClickHandler = screenHooks => opts =>
  opts.node
  .addEventListener('click', swapScreens.bind(null, opts, screenHooks));

// enableNavLinks :: ScreenHooks -> void
export const enableNavLinks = (screenHooks) =>
  Array
  .from(document.querySelectorAll('[data-next-screen]'))
  .map(getScreenRefsFromNode)
  .forEach(addNavButtonClickHandler(screenHooks));
