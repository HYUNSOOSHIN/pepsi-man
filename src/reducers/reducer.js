import { createAction, handleActions } from "redux-actions"

// action type
const SET_USER = "@PEPSI_MAN/COMMON/SET_USER"
const SET_TALK = "@PEPSI-MAN/COMMON/SET_TALK"

// action
export const setUser = createAction(SET_USER)
export const setTalk = createAction(SET_TALK)

// init state
const initState = {
  user: {},
  talk: {},
}

// reducer
const reducer = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [SET_TALK]: (state, action) => ({
      ...state,
      talk: state.talks.filter((i) => i.talkSeq === Number(action.payload))[0],
    }),
  },
  initState
)

export default reducer
