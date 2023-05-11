import {configurationStore, configureStore} from "@reduxjs/toolkit";
import contacts from "./reducers/contactSlice";
import groceryList from "./reducers/grocerySlice";

const store = configureStore({
  reducer:{
    contacts: contacts,
    groceryList: groceryList
  }
})

export default store;