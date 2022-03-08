import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ProfileState = {
  name: string;
};

export const initialState: ProfileState = {
  name: '',
};

export const ProfileAction = createSlice({
  name: 'ProfileAction',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {updateProfile} = ProfileAction.actions;
export default ProfileAction.reducer;
