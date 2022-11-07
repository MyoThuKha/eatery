import { useState } from "react";
const NavBar = ({ changePage }) => {
  return (
    <nav className="navHeight border-b border-black w-screen flex items-center justify-around">
      <div className="text-2xl uppercase">recipes</div>
      <div className="flex w-1/3 justify-between text-gray-700">
        <button onClick={() => changePage(1)}>Home</button>
        <button onClick={() => changePage(2)}>Recipes</button>
        <button onClick={() => changePage(3)}>Features</button>
        <button onClick={() => changePage(4)}>Contact</button>
      </div>
      <button>Favorites</button>
    </nav>
  );
};

export default NavBar;
