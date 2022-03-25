import { network } from '../../../network';

export const handleLogin = async (userName) => {
  try {
    const { data } = await network.post(`/user/auth/${userName}`);
    alert(JSON.stringify(data));
    return true;
  } catch (e) {
    alert('this user does not exist');
    return false;
  }
};
