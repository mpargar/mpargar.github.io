import { combineReducers } from "redux";
import ProgramReducer from "./programs/ProgramReducer";
import MenuReducer from "./menu/MenuReducer";

const reducers = combineReducers({
  programs: ProgramReducer,
	menu: MenuReducer
});

export default reducers;
