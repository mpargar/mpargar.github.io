import "./SearchInput.css";
import MdiIcon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchInput = () => {
  return (
    <div className="SearchInput">
      <input type="text" placeholder="Search..." />
      <MdiIcon
        className="SearchInputIcon"
        path={mdiMagnify}
        size={1}
        color="black"
      />
    </div>
  );
};
export default SearchInput;
