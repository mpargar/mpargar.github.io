import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import useContextualEvent from "../../hooks/useContextualEvent";
import { IPosition } from "../../types";
import { IWindowMenuItemOption } from "../window/WindowMenuItem";

interface IContextualMenu {
  position: IPosition;
  options?: IWindowMenuItemOption[];
}

export interface IContextualMenuReference {
  closeContextMenu: () => void;
  openContextMenu: () => void;
}

const ContextualMenu = forwardRef(
  ({ position, options }: IContextualMenu, ref) => {
    const [show, setShow] = useState(false);
    const wrapperRef = useRef(null);
    const closeMenu = () => {
      setShow(false);
    };
    const openMenu = () => {
      setShow(true);
    };
    const handleOptionClick = (action: () => void) => {
      action();
      closeMenu();
    };
    useContextualEvent(wrapperRef, show, closeMenu);
    useImperativeHandle(
      ref,
      (): IContextualMenuReference => ({
        closeContextMenu: closeMenu,
        openContextMenu: openMenu,
      })
    );
    return show ? (
      <div
        className="ContextualMenu"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        ref={wrapperRef}
      >
        {options?.map(({ label, action }, index) => {
          return (
            <button
              className="ContextualMenuButton"
              onClick={() => handleOptionClick(action)}
              key={index}
            >
              {label}
            </button>
          );
        })}
      </div>
    ) : (
      <></>
    );
  }
);
export default ContextualMenu;
