// easeOut :: (Node, String) -> void
const easeOut = (screen, animOutType, screenHook) => {
  screen.style.top = 0;
  screen.style.animation = `${animOutType} 0.5s forwards`;

  const onAnimationEnd = () => {
    if (screenHook) screenHook.onUnload(screen);
    screen.style.display = 'none';
    screen.removeEventListener('animationend', onAnimationEnd);
  };

  screen.addEventListener('animationend', onAnimationEnd);
};

// easeIn :: (Node, String) -> void
const easeIn = (screen, animInType, screenHook) => {
  const direction = animInType === 'slideInUp' ? '' : '-';
  screen.style.display = 'inherit';
  screen.style.top = `${direction}${screen.clientHeight}px`;
  screen.style.animation = `slideIn 0.5s forwards`;

  const onAnimationEnd = () => {
    if (screenHook) screenHook.onLoad(screen);
    screen.removeEventListener('animationend', onAnimationEnd);
  };

  screen.addEventListener('animationend', onAnimationEnd);
};

// swapScreens :: (ButtonOpts, ScreenHooks) -> void
export const swapScreens = ({crntScreen, nextScreen, animOutType, animInType}, screenHooks) => {
  easeOut(crntScreen, animOutType, screenHooks[crntScreen.id]);
  easeIn(nextScreen, animInType, screenHooks[nextScreen.id]);
};
