import React, { Component } from "react";

class UseEffectClassDemo extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { windowWidth: window.innerWidth, items: [] };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  updateWindowWidth() {
    console.log("updateWindowWidth");
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render() {
    console.log("render");
    return (
      <>
        {this.state.windowWidth}-{this.props.name}
      </>
    );
  }
}

export default UseEffectClassDemo;
