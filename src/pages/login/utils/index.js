import { displayMessage } from '../../../generic-utils/alert-message';
import { network } from '../../../network';

const alertNotExist = (userName) => displayMessage(`user ${userName} does not exist`);
export const parseGmailToValidUserName = (gmail) => {
  const leftSideOfEmail = gmail.split('@')[0];
  const userNameAfterRemoveNonAlphaNum = leftSideOfEmail.replace(/[^a-z0-9]/gi, '');
  return userNameAfterRemoveNonAlphaNum;
};
export const handleLogin = async (userName) => {
  try {
    await network.post(`/user/auth/${userName}`);
    return true;
  } catch (e) {
    alertNotExist(userName);
    return false;
  }
};
export const handleGoogleLogin = async (userName) => {
  try {
    await network.get(`/user/${userName}`);
    return true;
  } catch (e) {
    console.log(e);
    alertNotExist(userName);
    return false;
  }
};
export const handleAuthValidation = async ({ userName, code }) => {
  try {
    console.log(userName, code);
    const { status } = await network.get(`/user/auth/validate/${userName}`, { params: { code } });
    console.log(status);
    if (status === 200) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
