import "./DockBar.css";
import MenuButton from "../menuButton/MenuButton";

const DockBar = (): JSX.Element => {
  return (
    <div className="DockBar DockBarDark">
			<MenuButton />
    </div>
  );
};

export default DockBar;
