import { combineReducers } from "@reduxjs/toolkit"
import config from "./config"
import user from "./user"

const rootReducer = combineReducers({ configReducer: config.reducer, userReducer: user.reducer })

export default rootReducer
