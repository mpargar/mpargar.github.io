import "./DockBar.css";
import MenuIcon from "../../assets/img/Menu.svg";
import Icon from "../icon/Icon";

const DockBar = (): JSX.Element => {
  const handleClick = (): void => {};
  return (
    <div className="DockBar DockBarDark">
      <Icon onClick={handleClick} src={MenuIcon} />
    </div>
  );
};

export default DockBar;
