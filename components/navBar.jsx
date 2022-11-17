import Link from "next/link";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const data = useSelector((state) => state.root.curr);

  const [isSearch, setIsSearch] = useState(false);
  // const items = useMemo(() => data.map((each) => each.title), [data]);
  const inputRef = useRef();

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
        {!isSearch && <button onClick={() => setIsSearch(true)}>Search</button>}
        {isSearch && (
          <div>
            <input
              className="customBorder rounded-full px-2 focus:outline-none"
              value={inputRef.current}
              onChange={(e) => (inputRef.current = e.target.value)}
            />
            <svg
              onClick={() => setIsSearch(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute right-8 top-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
