import { RefObject, useEffect } from "react";

/*
 * This hooks let you suscribe a contextual event
 * in other words watch if click was inside or outside the component.
 * */
const useContextualEvent = (
  element: RefObject<HTMLElement>,
  suscribeVariable?: boolean,
  onClickOutside?: () => void,
  onClickInside?: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!element?.current?.contains(e.target as Node)) {
        if (onClickOutside) onClickOutside();
      } else {
        if (onClickInside) onClickInside();
      }
    };
    if (suscribeVariable !== undefined) {
      if (suscribeVariable)
        document.addEventListener("mousedown", handleClickOutside);
      else document.removeEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [element, suscribeVariable, onClickInside, onClickOutside]);
};

export default useContextualEvent;
