
import { authReducer } from "lib/cbi-authentication/reducer";
import { combineReducers } from "redux";
import { pageReducer } from "./page";

const rootReducer = combineReducers({
	auth: authReducer,
	page: pageReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
