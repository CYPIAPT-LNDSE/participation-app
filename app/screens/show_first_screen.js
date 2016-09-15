export const showFirstScreen = (data, screenName) => {
  document.getElementById('app').style.display = 'inherit';
  document.getElementById(screenName).style.display = 'inherit';
  data[screenName].onLoad();
};
