import { createSlice } from '@reduxjs/toolkit'

const dropSlice = createSlice({
  name: 'drop',
  initialState: { 
    menuVisible: false,
    sideBarVisible: false,
  },
  reducers:{
    ShowMenu(state){
      state.menuVisible = true;
    },
    HideMenu(state){
      state.menuVisible = false;
    },
    ToggleSideBar(state){
      state.sideBarVisible = !state.sideBarVisible;
    },
  }
})

export const menuAction = dropSlice.actions;
export default dropSlice.reducer;