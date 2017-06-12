import React from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Rect = (props) => (
  <svg>
    <rect width="100" height="100" {...props} />
  </svg>
);

const rectHOC = (WrappedComponent, color) => {
  return (props) => <WrappedComponent fill={color} {...props} />;
};

const RedRect = rectHOC(Rect, "red");

const BlueRect = rectHOC(Rect, "blue");

const GreenRect = rectHOC(Rect, "green");

const PropsManipulationExample = () => (
  <div style={styles}>
    <RedRect />
    <BlueRect />
    <GreenRect height={50} width={200} />
  </div>
);

export default PropsManipulationExample;
