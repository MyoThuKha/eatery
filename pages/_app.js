import NavBar from "../components/navBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="md:grid md:grid-cols-5">
      <div className="md:col-span-1 flex justify-center">
        <NavBar />
      </div>
      <div className="px-16 py-16 bg-gray-100 col-span-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
