import React, { useRef } from "react";
import "./App.css";
import { Icon } from "@wordpress/icons";
import * as icons from "@wordpress/icons";

function App() {
  const iconCount = Object.keys(icons).filter(
    (iconName) => iconName !== "Icon"
  ).length;
  const svgWrapperRef = useRef(); // Reference to the SVG wrapper

  const copyToClipboard = async () => {
    if (svgWrapperRef.current) {
      try {
        const serializer = new XMLSerializer();
        // Serialize the entire SVG wrapper including all children
        const svgString = serializer.serializeToString(svgWrapperRef.current);
        await navigator.clipboard.writeText(svgString);
        alert("SVGs copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy SVGs: ", err);
        alert("Error copying SVGs.");
      }
    }
  };

  return (
    <div className="icon-gallery">
      <h1>Total Icons: {iconCount}</h1>
      <h2>Icons preview</h2>
      <div id="icons-list">
        {Object.entries(icons).map(([iconName, iconComponent]) => {
          if (iconName !== "Icon") {
            return <Icon key={iconName} id={iconName} icon={iconComponent} />;
          }
          return null;
        })}
      </div>

      <button onClick={copyToClipboard}>Copy SVGs</button>
      <div id="icons-for-clipboard">
        <svg ref={svgWrapperRef}>
          {Object.entries(icons).map(([iconName, iconComponent]) => {
            if (iconName !== "Icon") {
              return <Icon key={iconName} id={iconName} icon={iconComponent} />;
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
}

export default App;
