// addScreenStyles :: void -> void
export const addScreenStyles = () => {
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
