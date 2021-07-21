export enum MenuActionTypes {
  SET_VISIBLE = "Menu/SET_VISIBLE",
	TOGGLE_VISIBLE = "Menu/TOGGLE_VISIBLE",
}

export interface IMenuState {
  visible: boolean;
}

export const createMenuState = (newState: IMenuState): IMenuState => newState;
