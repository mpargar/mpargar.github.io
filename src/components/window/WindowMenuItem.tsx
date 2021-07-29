import { useRef, useState } from "react";
import { IPosition } from "../../types";
import ContextualMenu, {IContextualMenuReference} from "../contextualMenu/ContextualMenu";

export interface IWindowMenuItemOption {
  label: string;
  action: () => void;
}
export interface IWindowMenuItem {
  label: string;
  action?: () => void;
  options?: IWindowMenuItemOption[];
}

const WindowMenuItem = ({
  label,
  action,
  options,
}: IWindowMenuItem): JSX.Element => {
  const [contextMenuPosition, setContextMenuPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  });
  const contextMenuRef = useRef<IContextualMenuReference>(null);
  const handleOnClick = () => {
    if (action) action();
    if (options) handleOpenOptions();
  };
  const handleOpenOptions = () => {
    contextMenuRef?.current?.openContextMenu();
  };
  return (
    <>
      <button onClick={handleOnClick} className="WindowMenuItem">
        {label}
      </button>
      {options && (
        <ContextualMenu
          position={contextMenuPosition}
          options={options}
          ref={contextMenuRef}
        />
      )}
    </>
  );
};

export default WindowMenuItem;
