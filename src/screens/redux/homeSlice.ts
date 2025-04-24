import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types';

interface HomeState {
  data: User[];
  isLoading: boolean;
  error: string;
}

const initialState: HomeState = {
  data: [],
  isLoading: true,
  error: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    fetchHomeRequest: state => {
      state.isLoading = true;
    },
    fetchHomeSuccess: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchHomeFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {fetchHomeRequest, fetchHomeSuccess, fetchHomeFailure} =
  homeSlice.actions;

export default homeSlice.reducer;
