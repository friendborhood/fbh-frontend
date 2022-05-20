/* eslint-disable no-param-reassign */
import { END_POINTS, network } from '../../../network';

export const handleSubmitDetails = async (data) => {
  delete data.userName;
  let response;
  try {
    response = await network.patch(END_POINTS.ME, data);
  } catch (e) {
    response = e.response.data.error;
  }
  return response;
};
