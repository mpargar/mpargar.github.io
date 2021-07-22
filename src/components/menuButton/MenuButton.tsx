import Icon from "../icon/Icon";
import MenuIcon from "../../assets/img/Menu.svg";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as MenuActionCreators from "../../store/reducers/menu/action-creators";
import { State } from "../../store";

const MenuButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const { MenuSetVisible } = bindActionCreators(MenuActionCreators, dispatch);
  const { visible } = useSelector((state: State) => state.menu);

  const handleClick = (): void => {
    MenuSetVisible(true);
  };

  return <Icon onClick={handleClick} src={MenuIcon} disabled={visible} />;
};

export default MenuButton;
