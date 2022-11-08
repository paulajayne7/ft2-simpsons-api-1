import React, { Component } from "react";
import axios from "axios";
import Splash from "./components/Splash";
import Interface from "./components/Interface";
import { connect } from "react-redux";
import { SET_API_DATA, SET_SCREEN_MODE } from "./redux/types";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    // this.setState({ characters });
    this.props.dispatch({ type: SET_API_DATA, payload: characters });

    setTimeout(() => {
      // this.setState({ screenMode: 1 });
      this.props.dispatch({ type: SET_SCREEN_MODE, payload: 1 });
    }, 500);
  }

  render() {
    if (this.props.screenMode === 0) {
      return <Splash />;
    }

    let { characters } = this.props;

    if (!characters) return <p>Loading...</p>;

    return (
      <>
        <Interface />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchInput: state.searchInput,
    characters: state.characters,
    screenMode: state.screenMode,
  };
}

export default connect(mapStateToProps)(App);
