// easeOut :: (Node, String) -> void
const easeOut = (screen, animOutType) => {
  screen.style.top = 0;
  screen.style.animation = `${animOutType} 0.5s forwards`;

  const onAnimationEnd = () => {
    screen.style.display = 'none';
    screen.removeEventListener('animationend', onAnimationEnd);
  };

  screen.addEventListener('animationend', onAnimationEnd);
};

// easeIn :: (Node, String) -> void
const easeIn = (screen, animInType) => {
  const direction = animInType === 'slideInUp' ? '' : '-';
  screen.style.display = 'inherit';
  screen.style.top = `${direction}${screen.clientHeight}px`;
  screen.style.animation = `slideIn 0.5s forwards`;
};

// swapScreens :: (Node, Node, String) -> void
export const swapScreens = ({crntScreen, nextScreen, animOutType, animInType}) => {
  easeOut(crntScreen, animOutType);
  easeIn(nextScreen, animInType);
};
