import "./MenuAppList.css";
import SearchInput from "../searchInput/SearchInput";
import MenuIconsGrid from "../menuIconsGrid/MenuIconsGrid";
import MenuFilters from "../menuFilters/MenuFilters";

const MenuAppList = () => {
  return (
    <div className="MenuAppList">
			<MenuFilters />
			<MenuIconsGrid />
			<SearchInput />
    </div>
  );
};

export default MenuAppList;
