import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('allContacts', async () => {
  try{
    const {data} = await axios.get('/api/contacts');
    return data;
  } catch(err) {
    console.log(err)
  }
})

const contactSlice = createSlice({
  name: 'contacts',
  inititalState: [],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchContacts.fulfilled,(state,action) =>{
      return action.payload
    })
  }
})

export default contactSlice.reducer;