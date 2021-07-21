import Icon from "../icon/Icon";
import MenuIcon from "../../assets/img/Menu.svg";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as MenuActionCreators from "../../store/reducers/menu/action-creators";

const MenuButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const { MenuToggleVisible } = bindActionCreators(
    MenuActionCreators,
    dispatch
  );
  const handleClick = (): void => {
    MenuToggleVisible();
  };
  return <Icon onClick={handleClick} src={MenuIcon} />;
};

export default MenuButton;
