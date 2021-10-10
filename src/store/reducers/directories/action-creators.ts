import { Dispatch } from "react";
import { DirectoriesAction } from "./actions";
import { DirectoriesActionTypes } from "./actionTypes";

export const OpenDirectory = (route: String) => (dispatch: Dispatch<DirectoriesAction>) => {
  dispatch({
    type: DirectoriesActionTypes.OPEN_DIRECTORY,
    route
  })
};