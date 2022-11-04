import React, { Component } from "react";

class SortSelection extends Component {
  state = {
    options: [
      { id: 0, name: "Select Below:" },
      { id: 1, name: "Name > Asc" },
      { id: 2, name: "Name > Desc" },
      { id: 3, name: "Quote > Asc" },
      { id: 4, name: "Quote > Desc" },
    ],
  };

  render() {
    return (
      <select onInput={this.props.onInput}>
        {this.state.options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
    );
  }
}

export default SortSelection;
