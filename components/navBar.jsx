import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [active, setActive] = useState("breakfast");

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div className="fixed">
      <div className="flex justify-center">
        <h1 className="font-bold uppercase p-3 border-b border-gray-100">
          <Link href="/">Food Categories</Link>
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

      <div className="flex justify-center h-full">
        <ul className="md:mr-1 mt-2 text-center items-around capitalize">
          <Category current={active} handleActive={handleActive}>
            breakfast
          </Category>
          <Category current={active} handleActive={handleActive}>
            dessert
          </Category>
          <Category current={active} handleActive={handleActive}>
            snack
          </Category>
          <Category current={active} handleActive={handleActive}>
            drink
          </Category>
          <Category current={active} handleActive={handleActive}>
            beverage
          </Category>
        </ul>
      </div>
    </div>
  );
};
const Category = ({ current, handleActive, children }) => {
  let style = "otherNav";
  if (current === children) style = "activeNav py-2";
  return (
    <li className={style} onClick={() => handleActive(children)}>
      {children}
    </li>
  );
};

export default NavBar;
