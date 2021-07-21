import { ProgramsAction } from "./actions";
import { createState, ProgramsActionTypes } from "./actionTypes";

const initialState = createState({
  programList: [],
});

const ProgramReducer = (state = initialState, action: ProgramsAction) => {
  switch (action.type) {
    case ProgramsActionTypes.SET_PROGRAM_LIST:
      return createState({
        ...initialState,
        programList: action.programList,
      });
    default:
      return state;
  }
};

export default ProgramReducer;
