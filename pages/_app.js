import NavBar from "../components/navBar";
import "../styles/globals.css";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../data/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="">
        <NavBar></NavBar>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
