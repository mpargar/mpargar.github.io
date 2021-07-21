import { MenuAction } from "./actions";
import { createMenuState, MenuActionTypes } from "./actionTypes";

const initialState = createMenuState({
  visible: false,
});

const MenuReducer = (state = initialState, action: MenuAction) => {
  switch (action.type) {
    case MenuActionTypes.SET_VISIBLE:
      return createMenuState({
        ...state,
        visible: action.visible,
      });
    case MenuActionTypes.TOGGLE_VISIBLE:
      return createMenuState({
        ...state,
        visible: !state.visible,
      });
    default:
      return state;
  }
};

export default MenuReducer;
