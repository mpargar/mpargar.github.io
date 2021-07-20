import React from "react";
import wallpaper from "./assets/img/wallpaper.jpg";
import "./App.css";
import DockBar from "./components/dockBar/DockBar";

function App(): JSX.Element {
  const wallpaperStyles: React.CSSProperties = {
    backgroundImage: `url(${wallpaper})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="App" style={wallpaperStyles}>
      <DockBar />
    </div>
  );
}

export default App;
