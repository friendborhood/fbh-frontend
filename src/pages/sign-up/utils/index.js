import { network } from '../../../network';

export const handleSignUp = async (data) => {
  const { data: { message } } = await network.get();
  alert(JSON.stringify(data));
  alert(message);
};
