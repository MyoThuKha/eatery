import NavBar from "../components/navBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "#ebe7e4" }} className="col-span-4">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
