import { MenuActionTypes } from "./actionTypes";

export interface ISetVisibleAction {
	type: MenuActionTypes.SET_VISIBLE;
	visible: boolean;
}

export interface IToggleVisibleAction {
	type: MenuActionTypes.TOGGLE_VISIBLE;
}

export type MenuAction = ISetVisibleAction | IToggleVisibleAction;
