import { createSlice } from '@reduxjs/toolkit';


const initialState = { items: [], isLoading: false, error: null };

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    fetchingInProgress: state => {
      state.isLoading = true;
    },
    fetchingSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchingError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    addContactsInProgress: state => {
      state.isLoading = true;
      state.error = null;
    },
    addContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    addContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    deleteContactInProgress: state => {
      state.isLoading = true;
      state.error = null;
    },
    deleteContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({id}) => id !== payload);
    },
    deleteContactError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    
  },
});
export const {
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,

  addContactsInProgress,
  addContactsSuccess,
  addContactsError,

  
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlice.actions;
export default contactSlice.reducer;
