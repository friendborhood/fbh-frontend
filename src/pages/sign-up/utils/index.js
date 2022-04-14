import { toast } from 'react-toastify';
import { END_POINTS, network } from '../../../network';
import { BAD_REQUEST_CODE, UNKNOWN_SERVER_ERROR } from '../../consts';

export const handleSignUp = async (data) => {
  try {
    const { data: newUserData } = await network.post(END_POINTS.USER, data);
    console.log(`user has been added ${JSON.stringify(newUserData)}`);
    return true;
  } catch (e) {
    const toastMessage = e.response.status === BAD_REQUEST_CODE
      ? e.response.data.error : UNKNOWN_SERVER_ERROR;
    toast(toastMessage);
    console.log(e);
    return false;
  }
};
