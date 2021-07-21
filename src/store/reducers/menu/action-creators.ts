import { Dispatch } from "react";
import { MenuAction } from "./actions";
import { MenuActionTypes } from "./actionTypes";

export const MenuSetVisible =
  (visible: boolean) => (dispatch: Dispatch<MenuAction>) => {
    dispatch({
      type: MenuActionTypes.SET_VISIBLE,
      visible,
    });
  };

export const MenuToggleVisible = () => (dispatch: Dispatch<MenuAction>) => {
  dispatch({
    type: MenuActionTypes.TOGGLE_VISIBLE,
  });
};
