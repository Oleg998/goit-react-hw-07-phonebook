import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operation';

const initialState = { items: [], isLoading: false, error: null };

const statusPending = state =>{
  state.isLoading=true;
  state.error=null
}

const statusRejected = (state , {payload})=>{
  state.isLoading=false;
  state.error=payload
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, statusPending)

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, statusRejected)
      .addCase(addContacts.pending, statusPending)

      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContacts.rejected,statusRejected)
      .addCase(deleteContacts.pending,statusPending)

      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContacts.rejected, statusRejected);
  },
});

export default contactSlice.reducer;
