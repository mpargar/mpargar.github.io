import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";

import "./Menu.css";
const Menu = (): JSX.Element => {
  const { visible } = useSelector((state: State) => state.menu);
	const dynamicStyle:React.CSSProperties = {
		display: visible ? 'block':'none',
	};
  return (<div className="Menu translucentBackground" style={dynamicStyle}>Hola mundo </div>);
};
export default Menu;
