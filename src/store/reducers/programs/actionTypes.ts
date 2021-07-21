export enum ProgramsActionTypes {
  SET_PROGRAM_LIST = "Programs/SET_PROGRAM_LIST",
}

export interface IProgramListItem {
  label: string;
  id: number;
}

export interface IState {
  programList: IProgramListItem[];
}

export const createState = (newState: IState): IState => newState;

