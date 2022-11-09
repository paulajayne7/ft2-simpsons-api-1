import React, { useEffect } from "react";
import axios from "axios";
import Splash from "./components/Splash";
import Interface from "./components/Interface";
import { useDispatch, useSelector } from "react-redux";
import { SET_API_DATA, SET_SCREEN_MODE } from "./redux/types";
import "./App.css";

const App = () => {
  // const searchInput = useSelector((state) => state.searchInput);
  const characters = useSelector((state) => state.characters);
  const screenMode = useSelector((state) => state.screenMode);
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    dispatch({ type: SET_API_DATA, payload: characters });

    setTimeout(() => {
      dispatch({ type: SET_SCREEN_MODE, payload: 1 });
    }, 500);
  };

  useEffect(() => {
    getApiData();
  }, []);

  if (screenMode === 0) {
    return <Splash />;
  }

  if (!characters) return <p>Loading...</p>;

  return <>{<Interface />}</>;
};

export default App;
