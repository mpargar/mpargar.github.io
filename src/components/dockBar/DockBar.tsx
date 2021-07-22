import "./DockBar.css";
import { MenuButton } from "../index";

const DockBar = (): JSX.Element => {
  return (
    <div className="DockBar translucent-background">
      <MenuButton />
    </div>
  );
};

export default DockBar;
