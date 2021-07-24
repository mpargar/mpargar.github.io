import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store";
import useOpacityTransitionClass from "../../hooks/useOpacityTransitionClass";
import "./Menu.css";
import { bindActionCreators } from "redux";
import * as MenuActionCreators from "../../store/reducers/menu/action-creators";
import { useEffect, useRef } from "react";
import UserCard from "../userCard/UserCard";
import MenuAppList from "../menuAppList/MenuAppList";

const Menu = (): JSX.Element => {
  const dispatch = useDispatch();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const { visible } = useSelector((state: State) => state.menu);
  const classes = useOpacityTransitionClass(visible);
  const { MenuSetVisible } = bindActionCreators(MenuActionCreators, dispatch);

  const handleOnBlur = () => {
    // TODO: Fix para el error visual al blur dandole click al boton (debe arreglarse).
    setTimeout(() => MenuSetVisible(false), 200);
  };

  useEffect(() => {
    // if (visible) menuContainerRef?.current?.focus();
  }, [visible, classes]);

  return (
    <div
      tabIndex={-1}
      className={`Menu translucent-background transition-basic ${classes}`}
      onBlur={handleOnBlur}
      ref={menuContainerRef}
    >
      <UserCard />
      <MenuAppList />
    </div>
  );
};
export default Menu;
