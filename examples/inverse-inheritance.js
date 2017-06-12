import React, { Component } from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const authorizationHOC = (WrappedComponent) =>
  class Enhancer extends WrappedComponent {
    render() {
      if (this.props.isAuthorized) {
        return super.render();
      }
      return (
        <div style={ { color: "black" } }>
          {"you are not authorized for this component"}
        </div>
      );
    }
  };

const Component1 = () => {
  return (
    <div style={ { color: "black" } }>
      {"beep boop im a functional component"}
    </div>
  );
};

class Component2 extends Component {
  render() {
    return (
      <div style={ { color: "black" } }>
        {"pop bang, im a classical component"}
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const AuthorizedComponent1 = authorizationHOC(Component1);
const AuthorizedComponent2 = authorizationHOC(Component2);

const InverseInheritanceExample = () =>
  <div style={styles}>
    {
      // this will not work because you cannnot extend from
      // a functional component
      /*<AuthorizedComponent1 isAuthorized={ true } />*/
    }
    <br />
    <AuthorizedComponent2 isAuthorized={false} />
    <br />
    <AuthorizedComponent2 isAuthorized />
  </div>;

export default InverseInheritanceExample;
