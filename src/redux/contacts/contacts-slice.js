import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { items:[], isLoading: false, error: null };

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    fetchingInProgress:(state)=> {
      state.isLoading = true;
    },
    fetchingSuccess: (state, { payload }) => {
      state.isLoading = true;
      state.items = payload;
  },
    fetchingError:(state, { payload }) =>{
      state.isLoading = false;
      state.error = payload;
    },
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});
export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlice.actions;
export default contactSlice.reducer;
