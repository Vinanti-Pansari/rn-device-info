import {updateProfile} from '../reduxStorage/slice/UserProfile';

export const updateUserProfile =
  (userName: string) => async (dispatch: any) => {
    dispatch(updateProfile(userName));
  };
