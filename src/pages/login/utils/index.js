import { network } from '../../../network';

export const handleLogin = async (userName) => {
  const { data: { message } } = await network.get();
  alert(userName);
  alert(message);
};
