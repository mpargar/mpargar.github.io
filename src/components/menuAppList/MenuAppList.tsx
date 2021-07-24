import Icon from "../icon/Icon";
import FileImage from "../../assets/img/Arhive.svg";
import MdiIcon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./MenuAppList.css";
import {
  mdiSortAlphabeticalVariant,
  //  mdiSortAlphabeticalAscendingVariant,
  //  mdiSortAlphabeticalDescendingVariant,
  mdiHistory,
} from "@mdi/js";

const MenuAppList = () => {
  const handleClick = () => {};
  return (
    <div className="MenuAppList">
      <div className="Filters">
        <Icon onClick={handleClick} icon={mdiSortAlphabeticalVariant} />
        <Icon onClick={handleClick} icon={mdiHistory} />
      </div>
      <div className="AppsContainer">
        <div className="IconsGrid">
          {Array.from(Array(12).keys()).map((v) => (
            <div className="IconAppContainer" key={v}>
              <Icon onClick={handleClick} src={FileImage} label="Archivos" />
            </div>
          ))}{" "}
        </div>
      </div>
      <div className="SearchInput">
        <input type="text" placeholder="Search..." />
        <MdiIcon
          className="SearchInputIcon"
          path={mdiMagnify}
          size={1}
          color="black"
        />
      </div>
    </div>
  );
};

export default MenuAppList;
