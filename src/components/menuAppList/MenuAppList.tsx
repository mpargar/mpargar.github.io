import Icon from "../icon/Icon";
import "./MenuAppList.css";
import SearchInput from "../searchInput/SearchInput";
import MenuIconsGrid from "../menuIconsGrid/MenuIconsGrid";
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
			<MenuIconsGrid />
			<SearchInput />
    </div>
  );
};

export default MenuAppList;
