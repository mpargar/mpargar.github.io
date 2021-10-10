import { combineReducers } from "redux";
import MenuReducer from "./menu/MenuReducer";
import DirectoriesReducer from "./directories/DirectoriesReducer";

const reducers = combineReducers({
	menu: MenuReducer,
	directories: DirectoriesReducer
});

export default reducers;
