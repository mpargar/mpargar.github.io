import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import "./Menu.css";

const Menu = (): JSX.Element => {
  const { visible } = useSelector((state: State) => state.menu);
  const [classes, setClasses] = useState<string>("Menu-Close");

  const openMenu = () => {
    setClasses("Menu-Transparent");
    setTimeout(() => {
      setClasses("");
    }, 200);
  };

  const closeMenu = () => {
    setClasses("Menu-Transparent");
    setTimeout(() => {
      setClasses("Menu-Close");
    }, 200);
  };

  useEffect(() => {
    visible ? openMenu() : closeMenu();
  }, [visible]);

  return (
    <div className={`Menu translucentBackground transition-basic ${classes}`}>
      Hola mundo{" "}
    </div>
  );
};
export default Menu;
