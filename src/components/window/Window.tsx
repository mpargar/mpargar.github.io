import React, { useRef } from "react";
import WindowMenuItem, { IWindowMenuItem } from "./WindowMenuItem";
import WindowControlButton from "./WindowControlButton";
import useMakeDraggable from "../../hooks/useMakeDraggable";

interface IProcessData {
  icon: string;
  label: string;
}

export interface IWindowProps {
  children: React.ReactNode;
  menu: IWindowMenuItem[];
  processData: IProcessData;
}

const Window = ({ children, menu, processData }: IWindowProps): JSX.Element => {
  const draggableArea = useRef<HTMLDivElement>(null);
  const movableElement = useRef<HTMLDivElement>(null);
  useMakeDraggable(draggableArea, movableElement);
  return (
    <div className="Window" ref={movableElement}>
      <div className="Window-top-bar">
        <div className="Window-menu">
          {menu.map((menuItemData) => (
            <WindowMenuItem {...menuItemData} key={menuItemData.label} />
          ))}
        </div>
        <div className="Window-title" ref={draggableArea}>
          <img
            className="Window-icon"
            src={processData.icon}
            alt={processData.label}
            draggable={false}
          />
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
