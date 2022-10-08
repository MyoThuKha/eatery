import Link from "next/link";
import { Children, useState } from "react";
const NavBar = () => {
  const [active, setActive] = useState(2);

  const NavItem = ({ current, id, children }) => {
    if (current === id) {
      return <li className="activeNav">{children}</li>;
    }
    return <li className="otherNav">{children}</li>;
  };
  return (
    <nav className="flex justify-center">
      {/* title */}
      <div>
        <h1 className="font-bold uppercase p-3 border-b border-gray-100">
          <Link href="/">Food Ninja</Link>
        </h1>
        <svg
          className="w-6 h-6 hover:cursor-pointer md:hidden"
          id="burger-menu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <ul className="hidden md:block md:mr-1 mt-2" id="menu-items"></ul>
    </nav>
  );
};

export default NavBar;
