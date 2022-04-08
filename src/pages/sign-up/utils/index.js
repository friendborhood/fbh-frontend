import { END_POINTS, network } from '../../../network';

export const handleSignUp = async (data) => {
  try {
    const { data: newUserData } = await network.post(END_POINTS.USER, data);
    console.log(`user has been added ${JSON.stringify(newUserData)}`);
    return true;
  } catch (e) {
    alert(`error ${e}`);
    return false;
  }
};
