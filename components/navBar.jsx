import Link from "next/link";
import { useState } from "react";
const NavBar = ({ changePage }) => {
  return (
    <nav className="navHeight border-b border-black w-screen flex items-center justify-around">
      <div className="text-2xl uppercase">recipes</div>
      <div className="flex w-1/3 justify-between text-gray-700">
        <Link href="/">Home</Link>
        <button onClick={() => changePage(2)}>Recipes</button>
        <button onClick={() => changePage(3)}>Features</button>
        <Link href="/contact">Contact</Link>
      </div>
      <button>Favorites</button>
    </nav>
  );
};

export default NavBar;
