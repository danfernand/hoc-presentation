import React, { Component, PropTypes } from "react";
/* eslint-disable react/jsx-handler-names */
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: 5
};

const hoveringHOC = (WrappedComponent) =>
  class HoveringComponent extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        hovering: false
      };

      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver() {
      this.setState({ hovering: true });
    }

    onMouseOut() {
      this.setState({ hovering: false });
    }

    render() {
      return (
        <WrappedComponent
          hovering={this.state.hovering}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          {...this.props}
        />
      );
    }
  };

class Button extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      clicked: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ clicked: true });
  }

  render() {
    const { hovering, ...props } = this.props;
    return (
      <button
        onClick={this.onClick}
        style={{ color: hovering ? "blue" : "#666666", marginLeft: 30 }}
        {...props}
      >
        {this.state.clicked ? "been clicked" : "click me"}
      </button>
    );
  }
}

Button.propTypes = {
  hovering: PropTypes.bool.isRequired
};

const Label = ({ hovering, text, ...props }) => {
  return (
    <label {...props} style={{ fontSize: hovering ? 14 : 12 }}>
      {text}
    </label>
  );
};

Label.propTypes = {
  hovering: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const HoverButton = hoveringHOC(Button);
const HoverLabel = hoveringHOC(Label);

const StateAbstractionExample = () => (
  <div style={styles}>
    <HoverLabel text={"Im a label"} />
    <HoverButton />
  </div>
);

export default StateAbstractionExample;
