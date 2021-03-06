import { log } from 'utils';

export type ScreenSize = 'initial' | 'small' | 'medium' | 'large';

const screenSizeDimesions: {[key in ScreenSize] : number} = {
  initial: 0, // server rendering
  small: 550, // portrait mobile
  medium: 1280, // landscape mobile, tablet, pc with small screen
  large: Number.POSITIVE_INFINITY, // desktop
};

// return 0, when server rendering
export const getWidth = () => {
  try { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } catch (e) { return 0 }
};

export const getHeight = () => {
  try { return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } catch (e) { return 0 }
};
const isSize = (size: ScreenSize) => getWidth() <= screenSizeDimesions[size];

export const isInitial = () => {
  return false;
  // const is = isSize('initial');
  // // is && log('isInitial', is);
  // return is;
};
export const isSmall = () => {
  return false;
  // const is = isSize('small');
  // is && log('isSmall', is);
  // return is;
};
export const isMedium = () => {
  return false;
  // const is = isSize('medium');
  // is && log('isMedium', is);
  // return is;
};
export const isLarge = () => {
  return true;
  // const is = isSize('large');
  // is && log('isLarge', is);
  // return is;
};

// export const isMoreThan1594 = () => { // 1024 + 285 + 285 (one middle and two sidebar)
//   return getWidth() >= 1594;
// };

export const getScreenSize = (): ScreenSize => (isInitial() ? 'initial' : isSmall() ? 'small' : isMedium() ? 'medium' : 'large');
