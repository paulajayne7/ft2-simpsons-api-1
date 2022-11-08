import React, { Component } from "react";
import Characters from "./Characters";
import { connect } from "react-redux";
import Controls from "./Controls";

class Interface extends Component {
  render() {
    return (
      <>
        <Controls />
        <Characters />
      </>
    );
  }
}

export default connect()(Interface);
