export enum ProgramsActionTypes {
  SET_PROGRAM_LIST = "Programs/SET_PROGRAM_LIST",
}

export interface IProgramListItem {
  label: string;
  id: number;
}

export interface IProgramsState {
  programList: IProgramListItem[];
}

export const createProgramsState = (newState: IProgramsState): IProgramsState => newState;

