import { enableUI, refreshUI } from './ui-controls';

const onLoad = () => {
  enableUI();
  refreshUI();
};

const onUnload = () => {
  console.log('Unloading questions screen');
};

export default {
  onLoad,
  onUnload
};
