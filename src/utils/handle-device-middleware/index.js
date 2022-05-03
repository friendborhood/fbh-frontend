/* eslint-disable no-unused-expressions */
import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';

// place holder
export const displayMessage = (message) => {
  isMobile ? toast(message) : toast(message);
};
