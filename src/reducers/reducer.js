import { createAction, handleActions } from "redux-actions"

// action type
const SET_USER = "@PEPSI_MAN/COMMON/SET_USER"

// action
export const setUser = createAction(SET_USER)

// init state
const initState = {
  user: {},
}

// reducer
const reducer = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initState
)

export default reducer
