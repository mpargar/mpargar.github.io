import "./Icon.css";
import "../../assets/css/transition.css";
import { useEffect, useState } from "react";
import MdiIcon from "@mdi/react";

interface IconProps {
  onClick?: () => any;
  href?: string;
  disabled?: boolean;
  src?: string;
  icon?: string;
  hoverEffect?: boolean;
  label?: string;
}

const Icon = ({
  onClick,
  href = "",
  src = "",
  disabled = false,
  hoverEffect = true,
  icon = "",
  label,
}: IconProps): JSX.Element => {
  const [optionalClasses, setOptionalClasses] = useState<string>("");

  useEffect(() => {
    let classes = "";
    if (hoverEffect) classes += "Icon-Hover";
    setOptionalClasses(classes);
  }, [hoverEffect]);

  const openHref = (href: string) => window.open(href, "_blank");

  return (
    <button
      className={`Icon transition-basic ${optionalClasses}`}
      onClick={onClick ? onClick : () => openHref(href)}
      disabled={disabled}
    >
      {src ? (
        <img
          className="Icon-image"
          alt="Menu button"
          src={src}
          draggable="false"
        />
      ) : icon ? (
        <MdiIcon path={icon} size={1} color="white" />
      ) : (
        "No src or icon"
      )}
      {label && <span className="Icon-Label">{label}</span>}
    </button>
  );
};

export default Icon;
