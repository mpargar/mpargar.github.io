import "./MenuIconsGrid.css";
import FileImage from "../../assets/img/Arhive.svg";
import Icon from "../icon/Icon";

const MenuIconsGrid = () => {
	const handleClick = () => {};
  return (
    <div className="IconsGrid">
      {Array.from(Array(12).keys()).map((v) => (
        <div className="IconAppContainer" key={v}>
          <Icon onClick={handleClick} src={FileImage} label="Archivos" />
        </div>
      ))}
    </div>
  );
};
export default MenuIconsGrid;
