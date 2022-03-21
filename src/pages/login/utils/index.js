import { network } from '../../../network';

export const handleLogin = async (userName) => {
  const { data } = await network.post(`/user/auth/${userName}`);
  alert(JSON.stringify(data));
  console.log(JSON.stringify(data));
};
