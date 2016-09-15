export { addScreenStyles } from './css_manipulations';
import { swapScreens } from './transitions';
import { getScreenRefsFromNode } from './dom_search';

// addNavButtonClickHandler :: {button: Node, crntScreen: Node, nextScreen: Node, animOutType: String} -> void
const addNavButtonClickHandler = (opts) =>
  opts.node
  .addEventListener('click', swapScreens.bind(null, opts));

// enableNavLinks :: void -> void
export const enableNavLinks = () =>
  Array
  .from(document.querySelectorAll('[data-next-screen]'))
  .map(getScreenRefsFromNode)
  .forEach(addNavButtonClickHandler);
