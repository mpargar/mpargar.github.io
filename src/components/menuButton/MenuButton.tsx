import Icon from "../icon/Icon";
import MenuIcon from "../../assets/img/Menu.svg";

const MenuButton = (): JSX.Element => {
  const handleClick = (): void => {
    console.log("Menu Click...");
  };
  return <Icon onClick={handleClick} src={MenuIcon} />;
};

export default MenuButton;
