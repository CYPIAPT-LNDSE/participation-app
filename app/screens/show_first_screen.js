export const showFirstScreen = (data, screenName) => {
  document.getElementById('app').style.display = 'inherit';
  document.getElementById(screenName).style.display = 'inherit';
  if (data[screenName]) data[screenName].onLoad();
};
