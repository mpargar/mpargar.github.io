import "./DockBar.css";
import { MenuButton } from "../index";

const DockBar = (): JSX.Element => {
  return (
    <div className="DockBar translucentBackground">
      <MenuButton />
    </div>
  );
};

export default DockBar;
