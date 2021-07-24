import Icon from "../icon/Icon";
import FileImage from "../../assets/img/Arhive.svg";
import "./MenuAppList.css";
import SearchInput from "../searchInput/SearchInput";
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
      <div className="IconsGrid">
        {Array.from(Array(12).keys()).map((v) => (
          <div className="IconAppContainer" key={v}>
            <Icon onClick={handleClick} src={FileImage} label="Archivos" />
          </div>
        ))}
      </div>
			<SearchInput />
    </div>
  );
};

export default MenuAppList;
