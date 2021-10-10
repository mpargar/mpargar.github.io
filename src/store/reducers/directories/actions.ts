import { DirectoriesActionTypes } from "./actionTypes";

export interface IOpenDirectory {
  type: DirectoriesActionTypes.OPEN_DIRECTORY;
  route: String,
}

export type DirectoriesAction = IOpenDirectory;