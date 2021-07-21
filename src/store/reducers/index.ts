import { combineReducers } from "redux";
import ProgramReducer from "./programs/ProgramReducer";

const reducers = combineReducers({
  programs: ProgramReducer,
});

export default reducers;
