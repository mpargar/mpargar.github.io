import { RefObject, useEffect } from "react";

const useMakeDraggable = (
  draggableArea: RefObject<HTMLElement>,
  movableElement: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const lastCursorPosition = {
      x: 0,
      y: 0,
    };
    const initDrag = (e: MouseEvent) => {
      lastCursorPosition.x = e.clientX;
      lastCursorPosition.y = e.clientY;
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", moveElement);
    };
    const handleMouseUp = () => {
      unsuscribeEvents();
    };
    const unsuscribeEvents = () => {
      document.removeEventListener("mouseup", unsuscribeEvents);
      document.removeEventListener("mousemove", moveElement);
    };
    const moveElement = (e: MouseEvent) => {
      if (movableElement.current) {
        const cursorChange = {
          x: lastCursorPosition.x - e.clientX,
          y: lastCursorPosition.y - e.clientY,
        };
        const { left, top } = movableElement.current.getBoundingClientRect();
        let newTop = top - cursorChange.y;
        let newLeft = left - cursorChange.x;
        movableElement.current.style.top = `${newTop}px`;
        movableElement.current.style.left = `${newLeft}px`;
        lastCursorPosition.x = e.clientX;
        lastCursorPosition.y = e.clientY;
      }
    };
    let currentDraggableElement = draggableArea.current;
    if (currentDraggableElement) {
      currentDraggableElement.addEventListener("mousedown", initDrag);
    }
    return () => {
      if (currentDraggableElement)
        currentDraggableElement.removeEventListener("mousedown", initDrag);
      unsuscribeEvents();
    };
  }, [draggableArea, movableElement]);
};
export default useMakeDraggable;
