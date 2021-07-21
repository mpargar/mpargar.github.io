import { useEffect, useState } from "react";

type TuseOpacityTransitionClassString =
  | "Transition-Opacity-Open"
  | "Transition-Opacity-Close"
  | "Transition-Opacity-Transparent";

const useOpacityTransitionClass = (visible: boolean) => {
  const [classes, setClasses] = useState<TuseOpacityTransitionClassString>(
    "Transition-Opacity-Close"
  );
  const transitionTimeMs = 200;

  const open = () => {
    setClasses("Transition-Opacity-Transparent");
    setTimeout(() => {
      setClasses("Transition-Opacity-Open");
    }, transitionTimeMs);
  };

  const close = () => {
    setClasses("Transition-Opacity-Transparent");
    setTimeout(() => {
      setClasses("Transition-Opacity-Close");
    }, transitionTimeMs);
  };

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return classes;
};

export default useOpacityTransitionClass;
