// src/redux/usernameSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsernameState {
  list: string[];
  loading: boolean;
}

const initialState: UsernameState = {
  list: [],
  loading: false,
};

const usernameSlice = createSlice({
  name: 'usernames',
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addUsername, setLoading } = usernameSlice.actions;
export default usernameSlice.reducer;
