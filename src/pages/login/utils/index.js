import { displayMessage } from '../../../utils/handle-device-middleware';
import { END_POINTS, network } from '../../../network';

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
export const handleAuth = async ({ userName, code, googleAuth }) => {
  try {
    let token = false;
    const { status, data } = await network.post(`${END_POINTS.USER}/login`, { userName, code, googleAuth });
    if (status === 200) {
      ({ token } = data);
    }
    return token;
  } catch (e) {
    return false;
  }
};
