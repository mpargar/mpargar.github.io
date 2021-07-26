type TWindowControlButton = "Minimize" | "Maximize" | "Close";
interface IWindowControlButton {
  buttonClass: TWindowControlButton;
  action: () => void;
}

const WindowControlButton = ({
  buttonClass,
  action,
}: IWindowControlButton): JSX.Element => {
  return (
    <button
      className={`WindowControlButton WindowControlButton-${buttonClass}`}
      onClick={action}
    ></button>
  );
};

export default WindowControlButton;
