import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const data = useSelector((state) => state.root.curr);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied, setCopied]);

  return (
    <nav className="relative navHeight border-b border-black w-screen flex items-center justify-around">
      <div className="text-2xl uppercase">recipes</div>
      <div className="flex w-1/3 justify-between text-gray-700">
        <Link href="/">Home</Link>
        <Link href={"/recipes?id=" + data}>Recipes</Link>
        <Link href="/features">Features</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* search */}
      <div>
        {copied && <p>Copied to Clipboard!</p>}
        {!copied && (
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
            }}
          >
            Share
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
