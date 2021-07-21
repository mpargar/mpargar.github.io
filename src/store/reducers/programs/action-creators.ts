import { Dispatch } from "redux";
import { IProgramListItem, ProgramsActionTypes } from "./actionTypes";
import { ISetProgramListAction } from "./actions";

export const ProgramsSetProgramList =
  (programList: IProgramListItem[]) =>
  (dispatch: Dispatch<ISetProgramListAction>) => {
    dispatch({
      type: ProgramsActionTypes.SET_PROGRAM_LIST,
      programList,
    });
  };
