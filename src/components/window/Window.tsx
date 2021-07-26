import React from "react";
import { IWindowMenuItem, WindowMenuItem } from "./WindowMenuItem";
import WindowControlButton from "./WindowControlButton";

interface IWindowProps {
  children: React.ReactNode;
  menu: IWindowMenuItem[];
}

const Window = ({ children, menu }: IWindowProps): JSX.Element => {
  return (
    <div className="Window">
      <div className="Window-top-bar">
        <div className="Window-menu">
          {menu.map((menuItemData) => (
            <WindowMenuItem {...menuItemData} key={menuItemData.label} />
          ))}
        </div>
        <div className="Window-label">Label Test</div>
        <div className="Window-controls">
          <WindowControlButton
            action={() => console.log("Min")}
            buttonClass="Minimize"
          />
          <WindowControlButton
            action={() => console.log("Maximize")}
            buttonClass="Maximize"
          />
          <WindowControlButton
            action={() => console.log("Close")}
            buttonClass="Close"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
export default Window;
