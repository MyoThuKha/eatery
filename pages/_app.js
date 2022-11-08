import NavBar from "../components/navBar";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState(1);

  const changePage = (id) => setPage(id);
  return (
    <div className="">
      <NavBar changePage={changePage}></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
