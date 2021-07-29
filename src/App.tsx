import React from "react";
import wallpaper from "./assets/img/wallpaper.jpg";
import "./App.css";
import { DockBar, Menu, Window } from "./components";
import IconTest from "./assets/img/Arhive.svg";

function App(): JSX.Element {
  const wallpaperStyles: React.CSSProperties = {
    backgroundImage: `url(${wallpaper})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="App" style={wallpaperStyles}>
      <Window
        menu={[
          {
            label: "File",
            action: () => {
              console.log("File");
            },
            options: [
              {
                label: "long long label 1",
                action: () => {
                  console.log("Label 1");
                },
              },
              {
                label: "label 2",
                action: () => {
                  console.log("Label 2");
                },
              },
            ],
          },
          {
            label: "Edit",
            action: () => {
              console.log("Edit");
            },
            options: [
              {
                label: "long long label 1",
                action: () => {
                  console.log("Label 1");
                },
              },
              {
                label: "label 2",
                action: () => {
                  console.log("Label 2");
                },
              },
            ],
          },
        ]}
        processData={{ icon: IconTest, label: "Archivos" }}
      >
        Test...
      </Window>
      <Menu />
      <DockBar />
    </div>
  );
}

export default App;
