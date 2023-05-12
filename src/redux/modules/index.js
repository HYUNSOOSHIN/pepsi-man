import { combineReducers } from "redux"
import config from "./config"
import user from "./user"

const rootReducer = combineReducers({ configReducer: config.reducer, userReducer: user.reducer })

export default rootReducer
