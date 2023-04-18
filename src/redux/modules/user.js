import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => ({ ...state, user: action.payload }),
  },
})

export const { setUser } = userReducer.actions

export default userReducer
