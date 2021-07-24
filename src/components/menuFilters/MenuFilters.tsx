import "./MenuFilters.css";
import Icon from "../icon/Icon";
import {
  mdiSortAlphabeticalVariant,
  //  mdiSortAlphabeticalAscendingVariant,
  //  mdiSortAlphabeticalDescendingVariant,
  mdiHistory,
} from "@mdi/js";

const MenuFilters = () => {
	const handleClick = () => {};
  return (
    <div className="Filters">
      <Icon onClick={handleClick} icon={mdiSortAlphabeticalVariant} />
      <Icon onClick={handleClick} icon={mdiHistory} />
    </div>
  );
};
export default MenuFilters;
