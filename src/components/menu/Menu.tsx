import { useSelector } from "react-redux";
import { State } from "../../store";
import useOpacityTransitionClass from "../../hooks/useOpacityTransitionClass";
import "./Menu.css";

const Menu = (): JSX.Element => {
  const { visible } = useSelector((state: State) => state.menu);
	const classes = useOpacityTransitionClass(visible);
  return (
    <div className={`Menu translucentBackground transition-basic ${classes}`}>
      Hola mundo{" "}
    </div>
  );
};
export default Menu;
