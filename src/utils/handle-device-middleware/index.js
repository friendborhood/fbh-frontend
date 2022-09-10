/* eslint-disable no-unused-expressions */
import { toast } from 'react-toastify';

export const displayMessage = (message) => {
  toast(message, { position: toast.POSITION.BOTTOM_LEFT });
};
