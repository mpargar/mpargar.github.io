import { IProgramListItem, ProgramsActionTypes } from "./actionTypes";

export interface ISetProgramListAction {
  type: ProgramsActionTypes.SET_PROGRAM_LIST;
  programList: IProgramListItem[];
}

export type ProgramsAction = ISetProgramListAction;
