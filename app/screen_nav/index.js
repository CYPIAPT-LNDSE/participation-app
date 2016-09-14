// swapScreens :: (Node, Node, String) -> void
const swapScreens = ({crntScreen, nextScreen, animOutType, animInType}) => {
  easeOut(crntScreen, animOutType);
  easeIn(nextScreen, animInType);
};

// easeOut :: (Node, String) -> void
const easeOut = (screen, animOutType) => {
  console.log(animOutType);
  screen.style.top = 0;
  screen.style.animation = `${animOutType} 1s forwards`;
};

// easeIn :: (Node, String) -> void
const easeIn = (screen, animInType) => {
  console.log(animInType);
  const direction = animInType === 'slideInUp' ? '' : '-';
  screen.style.display = 'inherit';
  screen.style.top = `${direction}${screen.clientHeight}px`;
  screen.style.animation = `slideIn 1s forwards`;
};

// getCurrentScreenFromNode :: Node -> Node
export const getCurrentScreenFromNode = node =>
  Array
  .from(node.parentNode.classList)
  .find(str => str === 'screen')
    ? node.parentNode
    : getCurrentScreenFromNode(node.parentNode);

// getScreenRefsFromNode :: Node -> {button: Node, crntScreen: Node, nextScreen: Node, animOutType: String}
const getScreenRefsFromNode = node =>
  ({
    node,
    crntScreen: getCurrentScreenFromNode(node),
    nextScreen: document.querySelector(`#${node.dataset.nextScreen}`),
    animOutType: node.dataset.animateOut,
    animInType: node.dataset.animateIn || 'slideInDown'
  });

// addNavButtonClickHandler :: {button: Node, crntScreen: Node, nextScreen: Node, animOutType: String} -> void
const addNavButtonClickHandler = (opts) =>
  opts.node
  .addEventListener('click', swapScreens.bind(null, opts));

// enableNavClicks :: void -> void
export const enableNavClicks = () =>
  Array
  .from(document.querySelectorAll('[data-next-screen]'))
  .map(getScreenRefsFromNode)
  .forEach(addNavButtonClickHandler);

// initScreenStyles :: void -> void
export const initScreenStyles = () => {
  const styleNode = document.createElement('style');
  document.head.appendChild(styleNode);

  const styleSheet = styleNode.sheet;
  const clientHeight = document.body.clientHeight;

  styleSheet.insertRule(
    `@keyframes slideOutUp { 100% { top: -${clientHeight}px; } }`,
    styleSheet.cssRules.length);
  styleSheet.insertRule(
    `@keyframes slideOutDown { 100% { top: ${clientHeight}px; } }`,
    styleSheet.cssRules.length);
};
