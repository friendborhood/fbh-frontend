import { network } from '../../../network';

export const handleSubmitDetails = async (data) => {
  const { userName } = data;
  try {
    await network.patch(`/user/${userName}`, data);
  } catch (e) {
    console.log(e);
  }
};
