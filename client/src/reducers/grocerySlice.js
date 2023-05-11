import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGroceryList = createAsyncThunk('allGroceries', async () => {
  try{
    const {data} = await axios.get('/api/groceriesList');
    return data;
  } catch(err) {
    console.log(err)
  }
})

const grocerySlice = createSlice({
  name: 'groceryList',
  inititalState: [],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchGroceryList.fulfilled,(state,action) =>{
      return action.payload
    })
  }
})

export default grocerySlice.reducer;