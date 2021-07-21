import { Dispatch } from "redux";
import { IProgramListItem, ProgramsActionTypes } from "./actionTypes";
import { ISetProgramListAction } from "./actions";

/*export const ProgramsSetProgramList = (programList: IProgramListItem[]) => {
  return (dispatch: Dispatch) => {
    const dispatchData: ISetProgramListAction = {
      type: ProgramsActionTypes.SET_PROGRAM_LIST,
      programList,
    };
    dispatch(dispatchData);
  };
};*/

export const ProgramsSetProgramList = (programList: IProgramListItem[]) => {
  return (dispatch: Dispatch<ISetProgramListAction>) => {
    dispatch({
      type: ProgramsActionTypes.SET_PROGRAM_LIST,
      programList,
    });
  };
};
