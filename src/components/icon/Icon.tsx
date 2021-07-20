import "./Icon.css";
import "../../assets/css/transition.css";

interface IconProps {
  onClick: () => any;
  src: string;
}

const Icon = ({ onClick, src }: IconProps): JSX.Element => {
  return (
    <button
      className="Icon transition-basic"
      onClick={onClick}
    >
      <img className="Icon-image" alt="Menu button" src={src} />
    </button>
  );
};

export default Icon;
