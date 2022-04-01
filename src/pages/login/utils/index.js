import { network } from '../../../network';

export const handleLogin = async (userName) => {
  try {
    await network.post(`/user/auth/${userName}`);
    return true;
  } catch (e) {
    alert('this user does not exist');
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
    alert(e);
    return false;
  }
};
