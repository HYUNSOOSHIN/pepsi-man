import { createAction, handleActions } from "redux-actions"

// action type
const SET_COUNT = "@PEPSI-MAN_WEB/COMMON/SET_COUNT"

// action
export const setCount = createAction(SET_COUNT)

// init state
const initState = {
  count: 0,
}

// reducer
const reducer = handleActions(
  {
    [SET_COUNT]: (state, action) => ({
      count: action.payload,
    }),
  },
  initState
)

export default reducer
