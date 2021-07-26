import React from "react";
import { IWindowMenuItem, WindowMenuItem } from "./WindowMenuItem";
import WindowControlButton from "./WindowControlButton";

interface IProcessData {
  icon: string;
  label: string;
}

interface IWindowProps {
  children: React.ReactNode;
  menu: IWindowMenuItem[];
  processData: IProcessData;
}

const Window = ({ children, menu, processData }: IWindowProps): JSX.Element => {
  return (
    <div className="Window">
      <div className="Window-top-bar">
        <div className="Window-menu">
          {menu.map((menuItemData) => (
            <WindowMenuItem {...menuItemData} key={menuItemData.label} />
          ))}
        </div>
        <div className="Window-title">
          <img className="Window-icon" src={processData.icon} />
          {processData.label}
        </div>
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
