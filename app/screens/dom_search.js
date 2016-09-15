// getCurrentScreenFromNode :: Node -> Node
export const getCurrentScreenFromNode = node =>
  Array
  .from(node.parentNode.classList)
  .find(str => str === 'screen')
    ? node.parentNode
    : getCurrentScreenFromNode(node.parentNode);

// getScreenRefsFromNode :: Node -> {button: Node, crntScreen: Node, nextScreen: Node, animOutType: String}
export const getScreenRefsFromNode = node =>
  ({
    node,
    crntScreen: getCurrentScreenFromNode(node),
    nextScreen: document.querySelector(`#${node.dataset.nextScreen}`),
    animOutType: node.dataset.animateOut,
    animInType: node.dataset.animateIn
  });
