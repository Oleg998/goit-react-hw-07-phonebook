import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact :{
        reducer: (state , {payload})=> [...state, payload],
        prepare:data=>{
            return {
                payload:{
                    id:nanoid(),
                    ...data,
                }
            }
        }
    },
    deleteContact: (state, { payload }) =>state.filter(item => item.id !== payload),
  },
});
export const {addContact , deleteContact}=contactSlice.actions;
export default contactSlice.reducer