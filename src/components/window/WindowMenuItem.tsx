export interface IWindowMenuItem {
  label: string;
  action: () => void;
}

export const WindowMenuItem = ({
  label,
  action,
}: IWindowMenuItem): JSX.Element => {
  return (
    <button onClick={action} className="WindowMenuItem">
      {label}
    </button>
  );
};
