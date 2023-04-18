import { combineReducers } from "redux"
import user from "./user"

const rootReducer = combineReducers({ userReducer: user.reducer })

export default rootReducer
