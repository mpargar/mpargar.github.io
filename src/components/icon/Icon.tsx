import "./Icon.css";
import "../../assets/css/transition.css";

interface IconProps {
  onClick: () => any;
  disabled?: boolean;
  src: string;
}

const Icon = ({ onClick, src, disabled = false }: IconProps): JSX.Element => {
  return (
    <button
      className="Icon transition-basic"
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className="Icon-image"
        alt="Menu button"
        src={src}
        draggable="false"
      />
    </button>
  );
};

export default Icon;
