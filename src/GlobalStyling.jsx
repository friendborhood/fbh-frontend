import electronics from './images/tags/electronics.svg';
import party from './images/tags/party.svg';
import cooking from './images/tags/cooking.svg';
import clothing from './images/tags/clothing.svg';
import tools from './images/tags/tools.svg';
import cleaning from './images/tags/cleaning.svg';

export const GLOBAL_SCARLET = '#AA332F';
export const GLOBAL_LIGHTGRAY = '#99A0A9';
export const SECONDARY_BACKGROUND = 'RGBA(153,160,169,0.11)';
export const DARK_GRAY = '#5E646B';
export const FORM_BOTTON_HEIGHT = '45px';
export const BUTTON_RADIUS = '8px';
export const GLOBAL_FONT = 'Heebo';
export const LOADER_PARAMS = {
  height: 40,
  width: 30,
  color: GLOBAL_SCARLET,
};

// Form styling:
// export const FORM_MARGIN_LEFT = '260px';
export const FORM_MARGIN_LEFT = 'clamp(0px, 10%, 260px)';

// Mobile styling:
export const MOBILE_STYLE = {
  max_width: '444px',
  navigation_padding: '11px',
  form_input_width: '356px',
  form_input_height: '36px',
  form_button_height: '37px',
  NAVIGATION_MOBILE_HEIGHT: '68px',
  MENU_ITEM_COLOR: '#5E646B',
  X_HEIGHT: '14.14px',
  X_WIDTH: '14.14px',
};

export const CATEGORY_ICON = {
  ELECTRONICS: electronics,
  PARTY: party,
  COOKING: cooking,
  CLOTHING: clothing,
  TOOLS: tools,
  CLEANING: cleaning,
};
