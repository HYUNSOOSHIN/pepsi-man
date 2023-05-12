import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkmode: false,
}

const configReducer = createSlice({
  name: "configReducer",
  initialState,
  reducers: {
    setDarkmode: (state, action) => ({ ...state, darkmode: action.payload }),
  },
})

export const { setDarkmode } = configReducer.actions

export default configReducer
