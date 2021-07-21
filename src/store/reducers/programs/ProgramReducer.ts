import { ProgramsAction } from "./actions";
import { createProgramsState, ProgramsActionTypes } from "./actionTypes";

const initialState = createProgramsState({
  programList: [],
});

const ProgramReducer = (state = initialState, action: ProgramsAction) => {
  switch (action.type) {
    case ProgramsActionTypes.SET_PROGRAM_LIST:
      return createProgramsState({
        ...state,
        programList: action.programList,
      });
    default:
      return state;
  }
};

export default ProgramReducer;
