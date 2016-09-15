let activeData;

const MIN_SCORE = 1;
const MAX_SCORE = 5;
const DEFAULT_SCORE = 3;

const ACTIVITY_DATA = [
  {
    description: 'Smelly french cheese',
    colour: 'blue',
    tag: 'brie'
  },
  {
    description: 'Good old english',
    colour: 'red',
    tag: 'cheddar'
  },
  {
    description: 'Dutch courage?',
    color: 'yellow',
    tag: 'emmental'
  }
];

const loadData = () => {
  const storedData = window.localStorage.getItem('activeData');
  activeData =
    storedData
      ? JSON.parse(storedData)
      : [];
};

const getNextActivity = () =>
  activeData.length < ACTIVITY_DATA.length
    ? ACTIVITY_DATA[activeData.length]
    : null;

const getCurrentActivity = () =>
  activeData[activeData.length - 1];

const setNextActivity = () => {
  if (getNextActivity()) {
    activeData.push(Object.assign({ score: DEFAULT_SCORE }, getNextActivity()));
  }
  document.querySelector('#display-activity').textContent =
    getCurrentActivity().description;
};

const saveData = () => {
  window.localStorage.setItem('activeData', JSON.stringify(activeData));
  console.log(window.localStorage.getItem('activeData'));
};

const scoreDown = () => {
  if (getCurrentActivity().score === MIN_SCORE) return;
  getCurrentActivity().score -= 1;
  updateScoreDisplay();
  saveData();
};

const scoreUp = () => {
  if (getCurrentActivity().score === MAX_SCORE) return;
  getCurrentActivity().score += 1;
  updateScoreDisplay();
  saveData();
};

const updateScoreDisplay = () => {
  document.querySelector('#activity-score-view').textContent =
    getCurrentActivity().score;
};

const enableUI = () => {
  document.querySelector('#activity-score-down')
    .addEventListener('click', scoreDown);

  document.querySelector('#activity-score-up')
    .addEventListener('click', scoreUp);

  updateScoreDisplay();
};

const onLoad = () => {
  loadData();
  setNextActivity();
  enableUI();
};

const onUnload = () => {
  console.log('Unloading questions screen');
};

export default {
  onLoad,
  onUnload
};
