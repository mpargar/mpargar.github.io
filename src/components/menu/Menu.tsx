import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store";
import useOpacityTransitionClass from "../../hooks/useOpacityTransitionClass";
import "./Menu.css";
import { bindActionCreators } from "redux";
import * as MenuActionCreators from "../../store/reducers/menu/action-creators";
import { useRef } from "react";
import UserCard from "../userCard/UserCard";
import MenuAppList from "../menuAppList/MenuAppList";
import useContextualEvent from "../../hooks/useContextualEvent";

const Menu = (): JSX.Element => {
  const dispatch = useDispatch();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const { visible } = useSelector((state: State) => state.menu);
  const classes = useOpacityTransitionClass(visible);
  const { MenuSetVisible } = bindActionCreators(MenuActionCreators, dispatch);
  const handleClickOutside = () => {
    MenuSetVisible(false);
  };
  useContextualEvent(menuContainerRef, visible, handleClickOutside);

  return (
    <div
      tabIndex={-1}
      className={`Menu translucent-background transition-basic ${classes}`}
      ref={menuContainerRef}
    >
      <UserCard />
      <MenuAppList />
    </div>
  );
};
export default Menu;
