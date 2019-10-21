import merge from 'lodash/merge';
import colors from './colors.ts';
import tags from './tags.ts';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  serif: 'Untitled Serif',
  sansSerif: 'Futura',
  slogan: 'GT America Cond',
  funHeader: 'Larish Alte',
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const fontWeights = {
  slogan: `400`,
};

const fontSizes = {
  p: `20px`,
};

const widths = {
  regular: `580px`,
};


const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  widths,
  breakpoints,
  tags,
});
