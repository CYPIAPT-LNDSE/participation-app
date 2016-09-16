import { enableUI, refreshUI } from './ui-controls';

const onLoad = () => {
  enableUI();
  refreshUI();
};

const onUnload = () => {
};

export default {
  onLoad,
  onUnload
};
