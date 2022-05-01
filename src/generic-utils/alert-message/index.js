import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';

export const displayMessage = (message) => (isMobile ? alert(message) : toast(message));
