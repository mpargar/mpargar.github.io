import "./MenuIconsGrid.css";
import Icon from "../icon/Icon";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { IDirectoryApp, IDirectoryFolder, TDirectory } from "../../store/reducers/directories/actionTypes";

const MenuIconsGrid = () => {
  const appsDirectory = useSelector<State, TDirectory | undefined>(state => state.directories.directories.find(d => d.name === "Apps"));
  const apps = appsDirectory as IDirectoryFolder;
  const handleOpenApp = (app: IDirectoryApp) => {
    console.log("Opening...", app);
  };
  return (
    <div className="IconsGrid">
      {apps.inside.map((appItem, index) => {
        const app = appItem as IDirectoryApp;
        return (
          <div className="IconAppContainer" key={app.name + index}>
            <Icon onClick={() => handleOpenApp(app)} src={app.app.icon} label={app.name} />
          </div>
        )
      })}
    </div>
  );
};
export default MenuIconsGrid;
