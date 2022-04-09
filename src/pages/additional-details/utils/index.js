/* eslint-disable no-param-reassign */
import { network } from '../../../network';

export const handleSubmitDetails = async (data) => {
  const { userName } = data;
  delete data.userName;
  try {
    await network.patch(`/user/${userName}`, data);
  } catch (e) {
    console.log(e);
  }
};
