/* eslint-disable no-param-reassign */
import { END_POINTS, network } from '../../../network';

export const handleSubmitDetails = async (data) => {
  delete data.userName;
  try {
    await network.patch(END_POINTS.ME, data);
  } catch (e) {
    console.log(e);
  }
};
