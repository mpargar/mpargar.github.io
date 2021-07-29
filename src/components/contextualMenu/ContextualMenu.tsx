import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
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
    useContextualEvent(wrapperRef, show, closeMenu);
		useImperativeHandle(ref, ():IContextualMenuReference => ({
      closeContextMenu: closeMenu,
      openContextMenu: openMenu,
    }));
    return show ? (
      <div className="ContextualMenu" ref={wrapperRef}>
        {options?.map(({ label, action }, index) => {
          return (
            <button
              className="ContextualMenuButton"
              onClick={action}
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
